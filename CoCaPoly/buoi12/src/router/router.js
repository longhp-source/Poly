import { user } from '@/store/data'

import ChiTietSanPham from '@/view/ChiTietSanPham.vue'
import QuanLySanPham from '@/view/QuanLySanPham.vue'
import TrangChu from '@/view/TrangChu.vue'
import TrangDangKy from '@/view/TrangDangKy.vue'
import TrangDangNhap from '@/view/TrangDangNhap.vue'
import TrangDoiMatKhau from '@/view/TrangDoiMatKhau.vue'
import TrangGioHang from '@/view/TrangGioHang.vue'
import TrangGioiThieu from '@/view/TrangGioiThieu.vue'
import TrangLienHe from '@/view/TrangLienHe.vue'
import TrangSanPham from '@/view/TrangSanPham.vue'
import TrangTinTuc from '@/view/TrangTinTuc.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

const listRouter = [
  { path: '/trang-chu', name: 'TrangChu', component: TrangChu },
  { path: '/dang-ky', name: 'DangKy', component: TrangDangKy },
  { path: '/dang-nhap', name: 'DangNhap', component: TrangDangNhap },
  { path: '/doi-mat-khau', name: 'DoiMatKhau', component: TrangDoiMatKhau },
  { path: '/gioi-thieu', name: 'GioiThieu', component: TrangGioiThieu },
  { path: '/tin-tuc', name: 'TinTuc', component: TrangTinTuc },
  { path: '/lien-he', name: 'LienHe', component: TrangLienHe },
  { path: '/gio-hang', name: 'GioHang', component: TrangGioHang },
  { path: '/san-pham', name: 'SanPham', component: TrangSanPham },
  { path: '/detail/:id', name: 'ChiTietSanPham', component: ChiTietSanPham },
  { path: '/quan-ly-san-pham', name: 'QuanLySanPham', component: QuanLySanPham },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: listRouter,
})

// Kiểm tra quyền mỗi khi điều hướng
router.beforeEach((to, from, next) => {
  if (to.path === '/trang-chu' && user.value?.role === 'admin') {
    return next({ name: 'QuanLySanPham' })
  }
  next()
})

export default router
