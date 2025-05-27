<template>
  <div class="about_section py-5 bg-light">
    <div class="container">
      <div class="row align-items-center">
        <!-- Phần nội dung -->
        <div class="col-md-6 mb-4 mb-md-0">
          <div>
            <h1 class="fw-bold text-danger">About Our Shop</h1>
            <h2 class="fw-semibold text-dark">LongCocaPoly</h2>
            <p class="mt-3 text-muted">
              LongCocaPoly là cửa hàng uy tín, chất lượng, luôn đặt sự hài lòng của khách hàng lên
              hàng đầu. Phi Long – người sáng lập cửa hàng – là một người tài năng, nhiệt huyết và
              luôn không ngừng sáng tạo. Anh ấy không chỉ có óc kinh doanh nhạy bén mà còn là người
              truyền cảm hứng mạnh mẽ cho mọi người xung quanh.
            </p>
            <a href="#" class="btn btn-danger mt-3 px-4">Read More</a>
          </div>
        </div>

        <!-- Phần ảnh -->
        <div class="col-md-6 text-center">
          <img :src="aboutImg" alt="About Us" class="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import aboutImg from '@/img/about_img.png'
</script>
