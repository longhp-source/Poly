<template>
  <div>
    <h2 class="text-center mb-3 text-light">Đổi Mật Khẩu</h2>
    <form>
      <div class="mb-2">
        <label for="currentPassword" class="form-label text-light">Mật khẩu hiện tại</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="currentPassword"
          required
          v-model="pass.hienTai"
        />
      </div>
      <div class="mb-2">
        <label for="newPassword" class="form-label text-light">Mật khẩu mới</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="newPassword"
          required
          v-model="pass.moi"
        />
      </div>
      <div class="mb-2">
        <label for="confirmNewPassword" class="form-label text-light">Xác nhận mật khẩu mới</label>
        <input
          type="text"
          class="form-control form-control-lg"
          id="confirmNewPassword"
          v-model="pass.moiNhacLai"
          required
        />
      </div>
    </form>
  </div>
</template>

<script setup>
defineModel('pass', {
  default: () => ({
    hienTai: '',
    moi: '',
    moiNhacLai: '',
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
