<template>
  <div class="d-flex align-items-end gap-2">
    <div>
      <label>Tên loại:</label>
      <input type="text" v-model="newLoai.ten" class="form-control" />
    </div>
  </div>
</template>
<script setup>
defineModel('newLoai', {
  default: {
    ten: '',
  },
})
</script>
