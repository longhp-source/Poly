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
      <div class="col-md-6 col-lg-4 p-5 rounded shadow-lg bg-transparent">
        <!-- Form đổi mật khẩu -->
        <FormDoiMatKhau v-model:pass="matKhau" />
        <div class="text-white text-center mb-2" v-if="thongBaoLoi">{{ thongBaoLoi }}</div>
        <div class="d-flex justify-content-center mt-2">
          <button type="submit" class="btn btn-danger w-50 py-2" @click="xuLyDoiMatKhau">
            Đổi Mật Khẩu
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormDoiMatKhau from '@/form/FormDoiMatKhau.vue'
import { listAccounts, user, isLoggedIn } from '@/store/data'

const dieuHuong = useRouter()

// Biến lưu trữ dữ liệu mật khẩu từ form
const matKhau = ref({
  hienTai: '',
  moi: '',
  moiNhapLai: '',
})

// Biến hiển thị lỗi nếu có
const thongBaoLoi = ref('')

// Hàm kiểm tra mật khẩu mạnh (8 ký tự trở lên, có hoa, thường, số, ký tự đặc biệt, không chứa khoảng trắng)
const kiemTraMatKhauManh = (matKhauMoi) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^_~])[A-Za-z\d@$!%*?&.#^_~]{8,}$/
  return regex.test(matKhauMoi) && !matKhauMoi.includes(' ')
}

// Hàm xử lý khi người dùng bấm nút Đổi Mật Khẩu
const xuLyDoiMatKhau = () => {
  thongBaoLoi.value = ''

  // Kiểm tra đăng nhập
  if (!isLoggedIn.value || !user.value) {
    thongBaoLoi.value = 'Bạn cần đăng nhập để đổi mật khẩu.'
    return
  }

  // Lấy thông tin người dùng hiện tại từ danh sách tài khoản
  const nguoiDungHienTai = listAccounts.value.find(
    (taiKhoan) => taiKhoan.username === user.value.username,
  )

  if (!nguoiDungHienTai) {
    thongBaoLoi.value = 'Không tìm thấy thông tin tài khoản.'
    return
  }

  // Kiểm tra mật khẩu hiện tại
  if (matKhau.value.hienTai !== nguoiDungHienTai.pass) {
    thongBaoLoi.value = 'Mật khẩu hiện tại không đúng.'
    return
  }

  // Kiểm tra mật khẩu mới phải khác mật khẩu cũ
  if (matKhau.value.moi === matKhau.value.hienTai) {
    thongBaoLoi.value = 'Mật khẩu mới phải khác mật khẩu cũ.'
    return
  }

  // Kiểm tra độ mạnh của mật khẩu mới
  if (!kiemTraMatKhauManh(matKhau.value.moi)) {
    thongBaoLoi.value =
      'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt, và không chứa khoảng trắng.'
    return
  }

  // Kiểm tra xác nhận mật khẩu
  if (matKhau.value.moi !== matKhau.value.moiNhapLai) {
    thongBaoLoi.value = 'Mật khẩu xác nhận không khớp.'
    return
  }

  // Xác nhận từ người dùng
  if (!confirm('Xác nhận đổi mật khẩu?')) return

  // Cập nhật mật khẩu và đăng xuất
  nguoiDungHienTai.pass = matKhau.value.moi
  isLoggedIn.value = false
  user.value = null

  alert('Đổi mật khẩu thành công. Vui lòng đăng nhập lại.')
  dieuHuong.push('/trang-chu')
}
</script>

<style scoped>
.text-white {
  color: white;
  font-size: 14px;
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

.form-control {
  border-radius: 10px;
  padding: 12px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ff3333;
}

.form-control:focus {
  border-color: #ff6666;
  box-shadow: 0 0 0 0.2rem rgba(255, 99, 99, 0.5);
}

.btn-danger {
  background-color: #ff3333;
  border-color: #ff3333;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
}

.btn-danger:hover {
  background-color: #ff6666;
  border-color: #ff6666;
}

.shadow-lg {
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);
}

.bg-transparent {
  background: transparent;
}

.text-light {
  color: #ffffff !important;
}

.mb-2 {
  margin-bottom: 10px;
}

.col-md-6,
.col-lg-4 {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
