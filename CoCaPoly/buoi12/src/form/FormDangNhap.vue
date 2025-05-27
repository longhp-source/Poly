<template>
  <div>
    <h2 class="text-center mb-3 text-light">Đăng Nhập</h2>
    <form>
      <div class="mb-2">
        <label for="exampleInputUsername1" class="form-label text-light">Tên đăng nhập</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleInputUsername1"
          required
          v-model="taiKhoan.username"
        />
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label text-light">Mật khẩu</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="exampleInputPassword1"
          v-model="taiKhoan.pass"
          required
        />
      </div>
    </form>
  </div>
</template>

<script setup>
defineModel('taiKhoan', {
  default: () => ({
    username: '',
    pass: '',
  }),
})
</script>

<style scoped>
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
