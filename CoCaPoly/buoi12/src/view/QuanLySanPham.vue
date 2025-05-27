<template>
  <!-- <TrangSanPham v-model:listCoca="listCoca" /> -->
  <h2>{{ phanTab ? 'Đây là trang quản lý sản phẩm' : 'Đây là trang quản lý loại' }}</h2>
  <button type="button" class="btn btn-success" @click="chuyenTab()">
    {{ phanTab ? 'Chuyển sang quản lý loại' : 'Chuyển sang quản lý sp' }}
  </button>

  <div v-show="phanTab">
    <FormSanPham v-model:newCoca="newCoca" :listLoai="listLoai" :listAnh="listAnh" />
    <button type="button" class="btn btn-success mx-3" @click="addCoca()" v-if="isUpdate">
      ADD
    </button>
    <button type="button" class="btn btn-danger" @click="updateCoca()" v-show="!isUpdate">
      Update
    </button>

    <table class="table mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Quy cách</th>
          <th>Loại</th>
          <th>Số lượng</th>
          <th>Ngày tạo</th>
          <th>Ảnh</th>
          <!-- 👈 thêm cột ngày tạo -->
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coca, index) in listCoca" :key="coca.id">
          <td>{{ index + 1 }}</td>
          <td>{{ coca.ten }}</td>
          <td>{{ coca.gia.toLocaleString() }}</td>
          <td>{{ coca.dungTich }}</td>
          <td>{{ getLoaiNameById(coca.loai) }}</td>
          <td>{{ coca.soLuong }}</td>
          <td>{{ coca.created_at }}</td>
          <td>{{ coca.anh }}</td>
          <!-- 👈 hiển thị ngày tạo -->
          <td>
            <span :class="coca.trangThai ? 'text-success' : 'text-danger'">
              {{ coca.trangThai ? 'Đang bán' : 'Dừng bán' }}
            </span>
          </td>

          <td>
            <button class="btn btn-success btn-sm me-2" @click="detailCoca(coca)">Detail</button>
            <button class="btn btn-danger btn-sm" @click="chuyenTrangThai(coca.id)">
              Chuyển trạng thái
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--  -->
  <div v-if="!phanTab">
    <FormLoai v-model:newLoai="newLoai" />
    <button class="btn btn-success" @click="addLoai()" v-if="isUpdateLoai">Thêm</button>
    <button class="btn btn-warning" @click="updateLoai()" v-show="!isUpdateLoai">Cập nhật</button>

    <table class="table mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên loại</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(loai, index) in listLoai" :key="loai.id">
          <td>{{ index + 1 }}</td>
          <td>{{ loai.ten }}</td>
          <td>
            <button class="btn btn-info btn-sm me-2" @click="editLoai(loai)">Detail</button>
            <button class="btn btn-danger btn-sm" @click="deleteLoai(loai.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
const phanTab = ref(true)
import FormLoai from '@/form/FormLoai.vue'

import FormSanPham from '@/form/FormSanPham.vue'
import { ref } from 'vue'
import { listCoca, listLoai, listAnh } from '@/store/data'

const chuyenTab = () => {
  phanTab.value = !phanTab.value
}
// import TrangSanPham from './TrangSanPham.vue'

const getLoaiNameById = (id) => {
  const loai = listLoai.value.find((item) => item.id === id)
  return loai ? loai.ten : 'Không xác định'
}
const isUpdate = ref(true)
const updateIndex = ref(-1)

const newCoca = ref({
  ten: '',
  gia: 0,
  dungTich: 0,
  loai: -1,
  trangThai: 'true',
  soLuong: 0,
  anh: -1,
})

const resetData = () => {
  newCoca.value = { ten: '', gia: 0, dungTich: '', loai: -1, trangThai: 'true', soLuong: 0 }
}

const addCoca = () => {
  if (!valForm()) {
    alert('Thêm không thành công')
    return
  }

  const idNew = Date.now().toString() // Tạo ID mới bằng thời gian hiện tại

  // Lấy ngày tháng năm dưới dạng yyyy/mm/dd
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0') // Tháng bắt đầu từ 0, phải cộng 1
  const day = String(today.getDate()).padStart(2, '0')

  const createAt = `${year}/${month}/${day}` // Định dạng ngày theo yyyy/mm/dd

  // Thêm create_at vào sản phẩm mới
  const newProduct = { ...newCoca.value, id: idNew, created_at: createAt }

  // Đẩy sản phẩm mới vào danh sách
  listCoca.value.push(newProduct)

  alert('Thêm thành công')
  resetData()
}

const chuyenTrangThai = (id) => {
  const index = listCoca.value.findIndex((c) => c.id === id)
  listCoca.value[index].trangThai = !listCoca.value[index].trangThai
}

const detailCoca = (item) => {
  updateIndex.value = listCoca.value.findIndex((c) => c.id === item.id)
  newCoca.value = { ...item }
  isUpdate.value = false
}

const updateCoca = () => {
  if (!valForm()) {
    alert('Cập nhật không thành công')
    return
  }
  listCoca.value[updateIndex.value] = { ...newCoca.value }
  alert('Cập nhật thành công')
  resetData()
  isUpdate.value = true
}

const valForm = () => {
  if (!confirm('Bạn có muốn thực hiện chức năng này không?')) return false

  let check = true
  let err = []

  if (newCoca.value.ten.trim() === '') {
    err.push('Tên Coca trống')
    check = false
  }
  if (newCoca.value.gia <= 0 || isNaN(newCoca.value.gia)) {
    err.push('Giá không hợp lệ')
    check = false
  }

  // Bỏ qua kiểm tra dung tích
  // if (newCoca.value.dungTich.trim() === '') {
  //   err.push('Dung tích trống')
  //   check = false
  // }

  if (!check) {
    alert(err.join('\n'))
  }

  return check
}

//
const newLoai = ref({ id: null, ten: '' })
const isUpdateLoai = ref(true)
const updateLoaiIndex = ref(-1)

const addLoai = () => {
  if (newLoai.value.ten.trim() === '') {
    alert('Tên loại không được để trống')
    return
  }
  const newId = Date.now()
  listLoai.value.push({ id: newId, ten: newLoai.value.ten })
  resetForm()
}

const editLoai = (loai) => {
  updateLoaiIndex.value = listLoai.value.findIndex((l) => l.id === loai.id)
  newLoai.value = { ...loai }
  isUpdateLoai.value = false
}

const updateLoai = () => {
  if (newLoai.value.ten.trim() === '') {
    alert('Tên loại không được để trống')
    return
  }
  listLoai.value[updateLoaiIndex.value] = { ...newLoai.value }
  resetForm()
  isUpdate.value = true
}

const deleteLoai = (id) => {
  const confirmed = confirm('Bạn có chắc chắn muốn xóa?')
  if (!confirmed) return
  listLoai.value = listLoai.value.filter((loai) => loai.id !== id)
}

const resetForm = () => {
  newLoai.value = { id: null, ten: '' }
  isUpdate.value = true
}
</script>
