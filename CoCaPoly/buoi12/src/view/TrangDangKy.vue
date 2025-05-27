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
      <!-- Khung chứa form đăng ký -->
      <div class="col-md-6 col-lg-4 p-5 rounded shadow-lg bg-transparent">
        <!-- Component nhập thông tin đăng ký -->
        <FormDangKy v-model:newTaiKhoan="newTaiKhoan" />

        <!-- Thông báo lỗi -->
        <div class="text-white text-center mb-2" v-if="errorMessage">
          {{ errorMessage }}
        </div>

        <!-- Nút đăng ký -->
        <div class="d-flex justify-content-center mt-2">
          <button type="button" class="btn btn-danger w-50 py-2" @click="registerAccount">
            Đăng Ký
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import các thành phần cần thiết
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FormDangKy from '@/form/FormDangKy.vue'
import { listAccounts } from '@/store/data'

// Khởi tạo router để điều hướng
const router = useRouter()

// Biến lưu trữ thông tin tài khoản mới
const newTaiKhoan = ref({
  username: '',
  pass: '',
  role: 'user', // Mặc định tài khoản là 'user'
})

// Biến lưu thông báo lỗi
const errorMessage = ref('')

// Hàm kiểm tra độ mạnh mật khẩu
const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#^_~])[A-Za-z\d@$!%*?&.#^_~]{8,}$/
  return regex.test(password) && !password.includes(' ')
}

// Hàm xử lý đăng ký tài khoản
const registerAccount = () => {
  errorMessage.value = '' // Reset lỗi mỗi lần ấn nút

  const { username, pass } = newTaiKhoan.value

  // Kiểm tra các trường rỗng
  if (!username.trim()) {
    errorMessage.value = 'Username không được để trống.'
    return
  }

  if (!pass.trim()) {
    errorMessage.value = 'Mật khẩu không được để trống.'
    return
  }

  // Kiểm tra mật khẩu đủ mạnh
  if (!validatePassword(pass)) {
    errorMessage.value =
      'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.'
    return
  }

  // Kiểm tra trùng username
  const daTonTai = listAccounts.value.some((acc) => acc.username === username)
  if (daTonTai) {
    errorMessage.value = 'Username đã tồn tại. Vui lòng chọn tên khác.'
    return
  }

  // Xác nhận trước khi đăng ký
  if (confirm('Bạn chắc chắn muốn đăng ký tài khoản này?')) {
    // Thêm vào danh sách tài khoản
    listAccounts.value.push({
      id: listAccounts.value.length + 1,
      username,
      pass,
      role: 'user', // Gán quyền mặc định là 'user'
    })

    alert('Đăng ký thành công!')
    router.push('/trang-chu') // Chuyển về trang chủ
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: rgba(0, 0, 0, 0.5);
}

.col-md-6,
.col-lg-4 {
  max-width: 400px;
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

.text-white {
  color: #ffffff;
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
