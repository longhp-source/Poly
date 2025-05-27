<script setup>
defineModel('newTaiKhoan', {
  default: () => ({
    username: '',
    pas: '',
  }),
})
</script>

<template>
  <div>
    <h2 class="text-center mb-3 text-light">Đăng Ký Tài Khoản</h2>
    <form>
      <div class="mb-2">
        <label for="email" class="form-label text-light">Tài khoản</label>
        <input
          id="email"
          type="text"
          class="form-control form-control-lg"
          v-model="newTaiKhoan.username"
          required
        />
      </div>
      <div class="mb-2">
        <label for="password" class="form-label text-light">Mật khẩu</label>
        <input
          id="password"
          type="text"
          class="form-control form-control-lg"
          v-model="newTaiKhoan.pass"
          required
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
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
h2 {
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  font-size: 28px;
}
.text-light {
  color: #ffffff !important;
}
.mb-2 {
  margin-bottom: 10px;
}
</style>
