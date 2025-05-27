<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Menu bên trái: danh sách loại Coca -->
      <div class="col-md-3 p-0 menu-left">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(loai, index) in dsLoai"
            :key="index"
            @click="chonLoai(loai)"
            :class="{ active: loaiDangChon?.id === loai.id }"
          >
            {{ loai.ten }}
          </li>
        </ul>
      </div>

      <!-- Danh sách sản phẩm bên phải -->
      <div class="col-md-9">
        <div v-if="dsPhanTrang.length > 0" class="row g-4">
          <div class="col-md-4 mb-4" v-for="coca in dsPhanTrang" :key="coca.id">
            <div class="card shadow-sm border-light rounded-3">
              <div class="card-body">
                <img
                  :src="layAnhCoca(coca.anh)"
                  class="card-img-top img-fluid"
                  alt="Ảnh Coca"
                  style="height: 180px; object-fit: contain"
                />
                <h5 class="card-title text-truncate">{{ coca.ten }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ coca.dungTich }}</h6>
                <p class="card-text font-weight-bold">Giá: {{ coca.gia }} VND</p>

                <!-- Nút yêu thích và thêm giỏ hàng -->
                <div class="d-flex justify-content-between align-items-center">
                  <button class="btn btn-success btn-sm w-50 me-2">
                    <i class="bi bi-lightning"></i> Mua ngay
                  </button>
                  <button class="btn btn-outline-primary btn-sm w-50">
                    <i class="bi bi-cart-plus"></i>
                  </button>
                </div>

                <router-link :to="`/detail/${coca.id}`" class="btn btn-primary btn-sm mt-2 w-100">
                  Chi tiết
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Vui lòng chọn loại Coca để xem sản phẩm.</p>
        </div>

        <!-- Phân trang -->
        <div class="d-flex justify-content-center align-items-center mt-3" v-if="tongSoTrang > 1">
          <button
            class="btn btn-outline-primary me-2"
            @click="trangHienTai--"
            :disabled="trangHienTai === 1"
          >
            Trước
          </button>
          <span>Trang {{ trangHienTai }} / {{ tongSoTrang }}</span>
          <button
            class="btn btn-outline-primary ms-2"
            @click="trangHienTai++"
            :disabled="trangHienTai === tongSoTrang"
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { listCoca, listLoai, listAnh } from '@/store/data'

// 👉 Biến lưu loại Coca đang chọn
const loaiDangChon = ref(null)

// 👉 Trang hiện tại (mặc định là 1)
const trangHienTai = ref(1)

// 👉 Số lượng sản phẩm hiển thị mỗi trang
const soLuongMoiTrang = 6

// 👉 Danh sách các loại Coca
const dsLoai = computed(() => listLoai.value)

// 👉 Hàm chọn loại Coca
const chonLoai = (loai) => {
  loaiDangChon.value = loai
  trangHienTai.value = 1 // Reset về trang đầu
}

// 👉 Lọc sản phẩm theo loại đang chọn
const dsTheoLoai = computed(() => {
  if (!loaiDangChon.value) return []
  return listCoca.value.filter((coca) => coca.loai === loaiDangChon.value.id)
})
const layAnhCoca = (anhId) => {
  const anh = listAnh.value.find((a) => a.id === anhId)
  return anh ? anh.link : ''
}
// 👉 Tổng số trang
const tongSoTrang = computed(() => Math.ceil(dsTheoLoai.value.length / soLuongMoiTrang))

// 👉 Danh sách sản phẩm hiển thị trên trang hiện tại
const dsPhanTrang = computed(() => {
  const batDau = (trangHienTai.value - 1) * soLuongMoiTrang
  return dsTheoLoai.value.slice(batDau, batDau + soLuongMoiTrang)
})
</script>

<style scoped>
.list-group-item {
  cursor: pointer;
}
.list-group-item.active {
  background-color: #007bff;
  color: white;
}
.menu-left {
  padding-left: 0;
  padding-right: 0;
}
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 100%;
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
.card-body {
  padding: 15px;
}
.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-subtitle {
  font-size: 0.9rem;
}
.card-text {
  font-size: 1.2rem;
  color: #28a745;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3 {
  font-size: 1.5rem;
}
.text-primary {
  color: #007bff !important;
}
</style>
