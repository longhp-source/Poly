<template>
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>

<script setup>
// import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'

import HeaderLayout from './layout/HeaderLayout.vue'
import FooterLayout from './layout/FooterLayout.vue'

// const router = useRouter()

// // Điều hướng đến trang chủ khi ứng dụng được khởi chạy
// onMounted(() => {
//   router.push('/trang-chu')
// })
//
</script>
