<template>
    <div class="w-full h-1/2 flex flex-col justify-around items-center">
        <div class="text-4xl text-white font-bold">Naive Ui</div>
        <n-carousel
            effect="card"
            prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
            next-slide-style="transform: translateX(50%) translateZ(-800px);"
            style="height: 240px"
            :show-dots="false"
        >
            <n-carousel-item :style="{ width: '30%' }">
                <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
            </n-carousel-item>
            <n-carousel-item :style="{ width: '30%' }">
                <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
            </n-carousel-item>
            <n-carousel-item :style="{ width: '30%' }">
                <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
            </n-carousel-item>
            <n-carousel-item :style="{ width: '30%' }">
                <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
            </n-carousel-item>
        </n-carousel>
    </div>
</template>

<script setup>
import { NCarousel, NCarouselItem } from "naive-ui";
</script>
<style scoped>
.carousel-img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
