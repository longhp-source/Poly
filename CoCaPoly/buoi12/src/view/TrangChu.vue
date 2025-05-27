<template>
  <div class="container mt-5">
    <!-- Sản phẩm bán chạy nhất -->
    <h3 class="mb-4 text-center text-primary font-weight-bold">Sản phẩm bán chạy nhất</h3>
    <div class="row">
      <div v-for="product in topSellingProducts" :key="product.id" class="col-md-3 mb-4">
        <div class="card shadow-sm border-light rounded">
          <img
            :src="product.image"
            class="card-img-top"
            alt="Ảnh sản phẩm"
            style="height: 180px; object-fit: cover"
          />
          <div class="card-body">
            <h5 class="card-title text-truncate" style="max-width: 200px">{{ product.ten }}</h5>
            <p class="card-text text-success">Số lượng đã bán: {{ product.soldQuantity }}</p>
            <p class="card-text font-weight-bold">Giá: {{ product.gia }} VND</p>
            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-success btn-sm w-50 me-2">
                <i class="bi bi-lightning"></i> Mua ngay
              </button>
              <button class="btn btn-outline-primary btn-sm w-50">
                <i class="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sản phẩm mới nhất -->
    <h3 class="mb-4 mt-5 text-center text-primary font-weight-bold">Sản phẩm mới nhất</h3>
    <div class="row">
      <div v-for="product in topNewProducts" :key="product.id" class="col-md-3 mb-4">
        <div class="card shadow-sm border-light rounded">
          <img
            :src="product.image"
            class="card-img-top"
            alt="Ảnh sản phẩm"
            style="height: 180px; object-fit: cover"
          />
          <div class="card-body">
            <h5 class="card-title text-truncate" style="max-width: 200px">{{ product.ten }}</h5>
            <p class="card-text text-muted">Ngày tạo: {{ product.created_at }}</p>
            <p class="card-text font-weight-bold">Giá: {{ product.gia }} VND</p>
            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-success btn-sm w-50 me-2">
                <i class="bi bi-lightning"></i> Mua ngay
              </button>
              <button class="btn btn-outline-primary btn-sm w-50">
                <i class="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { listCoca, listInvoices, listAnh } from '@/store/data'

// Tính toán tổng số lượng đã bán theo từng sản phẩm
const soldProducts = computed(() => {
  const productSales = {}
  listInvoices.value.forEach((invoice) => {
    invoice.products.forEach((product) => {
      if (!productSales[product.productId]) {
        productSales[product.productId] = 0
      }
      productSales[product.productId] += product.quantity
    })
  })
  return productSales
})

// Lấy top 4 sản phẩm bán chạy nhất và gắn ảnh
const topSellingProducts = computed(() => {
  const sortedProducts = listCoca.value
    .map((product) => {
      const soldQuantity = soldProducts.value[product.id] || 0
      const imageData = listAnh.value.find((img) => img.id === product.anh)
      return {
        ...product,
        soldQuantity,
        image: imageData ? imageData.link : '',
      }
    })
    .sort((a, b) => b.soldQuantity - a.soldQuantity)

  return sortedProducts.slice(0, 4)
})

// Lấy top 4 sản phẩm mới nhất và gắn ảnh
const topNewProducts = computed(() => {
  const sortedProducts = listCoca.value
    .map((product) => {
      const imageData = listAnh.value.find((img) => img.id === product.anh)
      return {
        ...product,
        image: imageData ? imageData.link : '',
      }
    })
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return sortedProducts.slice(0, 4)
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 100%;
  transition: all 0.3s ease-in-out;
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}
.card-body {
  padding: 20px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
}
h3 {
  font-size: 1.5rem;
}
.text-primary {
  color: #007bff !important;
}
</style>
