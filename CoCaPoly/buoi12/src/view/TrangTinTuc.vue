<template>
  <div class="row" style="margin-top: 15px">
    <!-- Tin chính bên trái -->
    <div class="col-lg-8 d-flex flex-column">
      <div class="position-relative mb-5 flex-grow-1">
        <img
          class="img-fluid w-100 rounded shadow-lg"
          src="../img/anhcanhan.png"
          style="object-fit: cover; max-height: 400px"
          alt="main"
        />
        <div class="bg-white border border-top-0 p-4 shadow-lg rounded-bottom border-danger mt-3">
          <div class="mb-3">
            <a
              class="badge bg-danger text-uppercase fw-semibold px-3 py-2 me-2 text-white"
              href="#"
            >
              CocaCola
            </a>
          </div>
          <h1 class="mb-4 text-danger text-uppercase fw-bold fs-3">
            LongCocaPoly – Câu chuyện thành công của nước giải khát số 1 tại Poly
          </h1>
          <p class="text-muted lh-base fs-6 mb-3">
            Từ một quầy nhỏ ở hành lang ký túc xá,
            <span class="text-danger fw-bold">LongCocaPoly</span> – thương hiệu phân phối CocaCola
            nổi bật tại Trường Cao đẳng FPT Polytechnic – đã nhanh chóng trở thành biểu tượng giải
            khát của sinh viên.
          </p>
          <p class="text-muted lh-base fs-6">
            Với tầm nhìn chiến lược của nhà sáng lập <strong class="text-danger">Phi Long</strong>,
            thương hiệu này đã mở rộng quy mô với
            <strong class="text-danger">5 điểm bán hàng</strong> và phục vụ hơn
            <strong class="text-danger">500 sinh viên mỗi ngày</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Tin phụ bên phải -->
    <div class="col-lg-4 d-flex flex-column">
      <div class="mb-4 flex-grow-1">
        <div class="section-title mb-3 border-bottom border-danger pb-2">
          <h4 class="text-uppercase fw-bold text-danger m-0">Tin nổi bật</h4>
        </div>
        <div class="bg-white border border-danger p-3 shadow-lg rounded">
          <!-- Danh sách tin phụ -->
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="d-flex align-items-center bg-white mb-3 shadow-sm rounded overflow-hidden border-start border-4 border-danger"
            style="height: 110px"
          >
            <img
              class="img-fluid rounded-start"
              :src="news.img"
              alt="thumb"
              style="height: 100%; width: auto"
            />
            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center">
              <div class="mb-1 d-flex align-items-center">
                <a
                  class="badge bg-danger text-uppercase fw-semibold px-2 py-1 me-2 text-white"
                  href="#"
                >
                  CocaCola
                </a>
                <small class="text-muted">{{ news.date }}</small>
              </div>
              <a
                class="text-danger fw-bold text-uppercase small m-0 lh-sm text-decoration-none hover-text-shadow"
                href="#"
              >
                {{ news.title }}
              </a>
            </div>
          </div>
          <!-- End v-for -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import coca from '@/img/coca.png'
import coca1 from '@/img/coca1.png'
import coca2 from '@/img/coca2.png'
import coca3 from '@/img/coca3.png'
import coca4 from '@/img/coca4.png'

const newsList = [
  {
    title: 'LongCocaPoly đạt doanh thu 1 triệu trong tháng đầu tiên',
    date: 'Apr 12, 2025',
    img: coca1,
  },
  {
    title: 'Phi Long – Từ sinh viên đến "ông trùm" CocaCola Poly',
    date: 'Apr 11, 2025',
    img: coca2,
  },
  {
    title: 'Bí quyết giữ lạnh CocaCola 3 ngày của LongCocaPoly',
    date: 'Apr 10, 2025',
    img: coca3,
  },
  {
    title: 'LongCocaPoly lọt top 3 startup sinh viên nổi bật năm 2025',
    date: 'Apr 09, 2025',
    img: coca4,
  },
  {
    title: 'LongCocaPoly ký kết hợp tác phân phối độc quyền CocaCola tại FPT Polytechnic',
    date: 'Apr 08, 2025',
    img: coca,
  },
]
</script>

<style scoped>
.hover-text-shadow:hover {
  text-shadow: 2px 2px 5px rgba(255, 0, 0, 0.3);
}

.shadow-lg {
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 10px rgba(0, 0, 0, 0.1);
}

.text-muted {
  font-family: 'Arial', sans-serif;
}

.text-danger {
  font-family: 'Helvetica', sans-serif;
}

.badge.bg-danger {
  background-color: #dc3545 !important;
  font-weight: 600;
}

.mb-4,
.mb-3,
.mb-2 {
  margin-bottom: 1.5rem;
}

.section-title h4 {
  letter-spacing: 1px;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-grow-1 {
  flex-grow: 1;
}

.mt-3 {
  margin-top: 1rem;
}
</style>
