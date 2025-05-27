<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Kiểm tra nếu có sản phẩm -->
      <div v-if="product" class="col-md-8 mx-auto">
        <div class="card shadow-sm border-light rounded-3">
          <!-- Ảnh sản phẩm -->
          <img
            :src="anhSanPham"
            alt="Ảnh sản phẩm"
            class="card-img-top rounded-top"
            style="max-height: 350px; object-fit: contain"
          />

          <div class="card-body">
            <h3 class="card-title">{{ product.ten }}</h3>
            <p class="card-text"><strong>Giá: </strong>{{ product.gia }} VND</p>
            <p class="card-text"><strong>Dung tích: </strong>{{ product.dungTich }} ml</p>

            <!-- Nút Thêm vào giỏ và Yêu thích -->
            <div class="d-flex justify-content-start mt-3">
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

      <!-- Nếu không tìm thấy sản phẩm -->
      <div v-else class="col-md-8 mx-auto">
        <div class="alert alert-danger" role="alert">
          Không tìm thấy sản phẩm với id <strong>{{ route.params.id }}</strong
          >.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { listCoca, listAnh } from '@/store/data'

const route = useRoute()
const id = route.params.id

// Tìm sản phẩm theo id
const product = listCoca.value.find((p) => p.id === parseInt(id))

// Lấy ảnh tương ứng từ listAnh
const anhSanPham = product ? listAnh.value.find((a) => a.id === product.anh)?.link : null
</script>

<style scoped>
.card-body {
  padding: 25px;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
}

.card-text {
  font-size: 1.2rem;
}

.btn-outline-danger,
.btn-outline-success {
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 30px;
}

.alert-danger {
  font-size: 1.2rem;
}
</style>
