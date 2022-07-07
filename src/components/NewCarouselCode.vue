<template>
<div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full bg-green-500 justify-center">
      <div class="flex bg-red-500 space-x-7">
        <img src="https://placeimg.com/800/200/arch" class="w-56" />
        <img src="https://placeimg.com/800/200/arch" class="w-56" />
        <img src="https://placeimg.com/800/200/arch" class="w-56" />
        <img src="https://placeimg.com/800/200/arch" class="w-56" />
       
      </div>
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img src="https://placeimg.com/800/200/arch" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>

  </div>
</template>