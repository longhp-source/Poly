<template>
  <div
    class="container-fluid"
    style="
      background-image: url('/src/img/background.png');
      background-size: cover;
      height: 100vh;
      background-position: center;
    "
  >
    <div class="row justify-content-center align-items-center" style="height: 100vh">
      <!-- Khung chứa form đăng nhập -->
      <div class="col-md-6 col-lg-4 p-5 rounded shadow-lg bg-transparent">
        <!-- Form nhập tài khoản -->
        <FormDangNhap v-model:taiKhoan="taiKhoan" />

        <!-- Nút đăng nhập -->
        <div class="d-flex justify-content-center mt-2">
          <button type="button" class="btn btn-danger w-50 py-2" @click="xuLyDangNhap">
            Đăng Nhập
          </button>
        </div>

        <!-- Link đăng ký nếu chưa có tài khoản -->
        <div class="mt-3 text-center">
          <span class="text-light">Chưa có tài khoản? </span>
          <RouterLink class="btn btn-link text-light" to="/dang-ky">Đăng ký</RouterLink>
        </div>

        <!-- Thông báo lỗi đăng nhập -->
        <div v-if="loiDangNhap" class="text-white text-center mt-3">
          {{ loiDangNhap }}
        </div>

        <!-- Thông báo đăng nhập thành công -->
        <div v-if="thongBaoThanhCong" class="text-success text-center mt-3">
          {{ thongBaoThanhCong }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import các thành phần cần thiết
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormDangNhap from '@/form/FormDangNhap.vue'
import { listAccounts, user, isLoggedIn } from '@/store/data'

// Sử dụng router để điều hướng
const dieuHuong = useRouter()

// Biến lưu thông tin tài khoản người dùng nhập
const taiKhoan = ref({
  username: '',
  pass: '',
})

// Biến lưu thông báo lỗi khi đăng nhập thất bại
const loiDangNhap = ref('')

// Biến lưu thông báo khi đăng nhập thành công
const thongBaoThanhCong = ref('')

// Hàm xử lý đăng nhập
const xuLyDangNhap = () => {
  // Tìm tài khoản khớp với username và pass
  const taiKhoanHopLe = listAccounts.value.find(
    (acc) => acc.username === taiKhoan.value.username && acc.pass === taiKhoan.value.pass,
  )

  if (taiKhoanHopLe) {
    // Nếu tìm thấy tài khoản, hỏi xác nhận
    if (confirm('Bạn chắc chắn muốn đăng nhập với tài khoản này?')) {
      // Lưu vào biến toàn cục user
      user.value = taiKhoanHopLe
      isLoggedIn.value = true
      // Hiển thị thông báo
      thongBaoThanhCong.value = 'Đăng nhập thành công!'

      // Chuyển hướng sau 2 giây
      setTimeout(() => {
        dieuHuong.push('/trang-chu') // Điều hướng sau khi đăng nhập thành công
      }, 2000)
    }
  } else {
    // Nếu không tìm thấy tài khoản hợp lệ
    loiDangNhap.value = 'Tài khoản hoặc mật khẩu sai! Vui lòng thử lại.'
  }
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.container-fluid {
  background-color: rgba(0, 0, 0, 0.5);
}

.col-md-6,
.col-lg-4 {
  max-width: 400px;
}

h2 {
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  font-size: 28px;
}

.text-light {
  color: #ffffff !important;
}

.col-md-6,
.col-lg-4 {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

.btn-link {
  text-decoration: none;
  font-weight: bold;
}

.btn-link:hover {
  text-decoration: underline;
}

.text-white {
  color: #ffffff;
}

.text-success {
  color: #28a745; /* Màu xanh lá cho thông báo thành công */
}
</style>
