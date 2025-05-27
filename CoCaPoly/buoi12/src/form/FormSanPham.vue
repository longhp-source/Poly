<template>
  <form>
    Tên :<input v-model="newCoca.ten" placeholder="Tên" class="form-control mb-2" /> Giá:
    <input v-model="newCoca.gia" type="number" placeholder="Giá" class="form-control mb-2" />
    Dung tích:
    <input
      type="number"
      v-model="newCoca.dungTich"
      placeholder="Dung tích"
      class="form-control mb-2"
    />
    Số lượng:
    <input
      type="number"
      v-model="newCoca.soLuong"
      placeholder="Dung tích"
      class="form-control mb-2"
    />

    <!-- Select cho loại -->
    Loại:
    <select v-model="newCoca.loai" class="form-control mb-2">
      <option disabled value="">-- Chọn loại Coca --</option>
      <option v-for="(loai, index) in listLoai" :key="index" :value="loai.id">
        {{ loai.ten }}
      </option>
    </select>

    <!-- Radio cho trạng thái -->
    <div class="mb-2">
      <label class="me-2">Trạng thái:</label>
      <label class="me-2">
        <input type="radio" value="true" v-model="newCoca.trangThai" /> Đang bán
      </label>
      <label> <input type="radio" value="false" v-model="newCoca.trangThai" /> Dừng bán </label>
    </div>
    Ảnh:
    <select v-model="newCoca.anh" class="form-control mb-2">
      <option disabled value="">-- Chọn loại Coca --</option>
      <option v-for="(anh, index) in listAnh" :key="index" :value="anh.id">
        {{ anh.ten }}
      </option>
    </select>
  </form>
</template>
<script setup>
import { listAnh } from '@/store/data'

defineModel('listLoai', {
  default: () => ({
    id: -1,
    ten: '',
  }),
})
defineModel('listAnh', {
  default: () => ({
    id: -1,
    ten: '',
    link: '',
  }),
})

defineModel('newCoca', {
  default: () => ({
    ten: '',
    gia: 0,
    dungTich: -1,
    loai: -1,
    trangThai: 'true',
    soLuong: 0,
    anh: -1,
  }),
})
</script>
