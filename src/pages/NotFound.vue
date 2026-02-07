<script setup></script>
<template>
  <div class="h-[65vh]">
    <div class="container h-full">
      <div class="flex flex-col justify-center items-center h-full">
        <h1
          class="font-[900] text-[#fff] text-[150px] text-center leading-none flex flex-col items-center"
        >
          404
          <span class="text-[#fff] text-[50px] font-[900] mt-[-10px]">
            Кина не будет :(
          </span>
        </h1>
        <h3 class="text-[#fff] my-[25px] font-[500] text-[18px]">
          Возможно, данного адреса страницы не сущетсвует, или странциа была
          перемещена.
        </h3>
        <div class="flex gap-[15px]">
          <RouterLink
            to="/"
            class="text-[#fff] w-[243px] h-[63px] flex justify-center items-center bg-[#3657CB] font-[700] shadow-[0_0_7px_0_rgba(72,113,255,0.6)] rounded-[10px]"
            >Вернуться на главную</RouterLink
          >
          <RouterLink to="/" class="text-[#fff] w-[243px] h-[63px] flex items-center justify-center rounded-[10px] border border-white">Поиск по сайту</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
