<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">LongCocaPoly</a>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/trang-chu">Trang chủ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/gioi-thieu">Trang giới thiệu</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/tin-tuc">Trang tin tức</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/lien-he">Trang liên hệ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/gio-hang">Trang giỏ hàng</RouterLink>
          </li>

          <!-- Chỉ để lại một mục "Sản phẩm" -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/san-pham">Trang sản phẩm</RouterLink>
          </li>

          <!-- Quản lý tài khoản -->
          <li class="nav-item">
            <div v-if="isLoggedIn" class="nav-link" @click="goToProfile">{{ user.username }}</div>
            <div v-else class="nav-link">
              <RouterLink to="/dang-nhap">Đăng nhập</RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { user, isLoggedIn } from '@/store/data' // Import danh sách tài khoản từ store

const router = useRouter()

const goToProfile = () => {
  router.push('/doi-mat-khau') // Chuyển hướng đến trang đổi mật khẩu khi nhấn vào tên tài khoản
}
</script>

<style scoped>
/* Navbar container */
.navbar {
  border-bottom: 2px solid #f40009; /* Thêm đường viền dưới navbar */
}

/* Logo */
.navbar-brand {
  font-family: 'Arial', sans-serif; /* Font chữ cho logo */
  font-weight: bold; /* Chữ đậm */
  font-size: 24px; /* Kích thước chữ logo */
  color: #f40009; /* Màu đỏ giống lon Coca-Cola */
  text-transform: uppercase; /* Chữ in hoa */
  transition: all 0.3s ease; /* Hiệu ứng chuyển động */
  letter-spacing: 2px; /* Khoảng cách giữa các chữ */
  text-decoration: none; /* Xóa gạch chân */
}

.navbar-brand:hover {
  color: #fff; /* Màu trắng khi hover */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Hiệu ứng bóng khi hover */
}

/* Navbar links */
.navbar-nav {
  display: flex;
  flex-wrap: nowrap; /* Ngăn các mục menu xuống dòng */
  justify-content: center; /* Căn giữa các mục menu */
  padding-left: 0;
  margin-bottom: 0;
  gap: 20px; /* Khoảng cách giữa các mục menu */
}

.nav-item {
  flex: 0 1 auto; /* Đảm bảo các mục menu không co giãn */
}

/* Navbar link */
.nav-link {
  transition: all 0.3s ease;
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 25px;
  font-size: 14px;
  white-space: nowrap; /* Ngăn ngừa việc xuống dòng */
}

.nav-link:hover {
  background-color: #f40009; /* Màu nền đỏ khi hover */
  color: white; /* Màu chữ trắng khi hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng đổ */
}

.nav-link.router-link-active {
  background-color: #f40009; /* Màu nền đỏ cho mục đang được chọn */
  color: white; /* Chữ màu trắng khi active */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng đổ */
}

/* Mobile responsive */
@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column; /* Đổi menu thành cột trên màn hình nhỏ */
    gap: 15px; /* Khoảng cách giữa các mục */
  }
}
</style>

<style scoped>
/* Navbar container */
.navbar {
  border-bottom: 2px solid #f40009; /* Thêm đường viền dưới navbar */
}

/* Logo */
.navbar-brand {
  font-family: 'Arial', sans-serif; /* Font chữ cho logo */
  font-weight: bold; /* Chữ đậm */
  font-size: 24px; /* Kích thước chữ logo */
  color: #f40009; /* Màu đỏ giống lon Coca-Cola */
  text-transform: uppercase; /* Chữ in hoa */
  transition: all 0.3s ease; /* Hiệu ứng chuyển động */
  letter-spacing: 2px; /* Khoảng cách giữa các chữ */
  text-decoration: none; /* Xóa gạch chân */
}

.navbar-brand:hover {
  color: #fff; /* Màu trắng khi hover */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Hiệu ứng bóng khi hover */
}

/* Navbar links */
.navbar-nav {
  display: flex;
  flex-wrap: nowrap; /* Ngăn các mục menu xuống dòng */
  justify-content: center; /* Căn giữa các mục menu */
  padding-left: 0;
  margin-bottom: 0;
  gap: 20px; /* Khoảng cách giữa các mục menu */
}

.nav-item {
  flex: 0 1 auto; /* Đảm bảo các mục menu không co giãn */
}

/* Navbar link */
.nav-link {
  transition: all 0.3s ease;
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 25px;
  font-size: 14px;
  white-space: nowrap; /* Ngăn ngừa việc xuống dòng */
}

.nav-link:hover {
  background-color: #f40009; /* Màu nền đỏ khi hover */
  color: white; /* Màu chữ trắng khi hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng đổ */
}

.nav-link.router-link-active {
  background-color: #f40009; /* Màu nền đỏ cho mục đang được chọn */
  color: white; /* Chữ màu trắng khi active */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng đổ */
}

/* Mobile responsive */
@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column; /* Đổi menu thành cột trên màn hình nhỏ */
    gap: 15px; /* Khoảng cách giữa các mục */
  }
}
</style>
