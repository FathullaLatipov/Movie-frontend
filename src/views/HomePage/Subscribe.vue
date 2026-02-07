<script setup></script>
<template>
  <section
    class="container  relative h-[550px] bg-[url(@/assets/images/subscribe-bg.png)] bg-center bg-cover"
  >
    <div
      class="absolute z-3 w-full rounded-[10px] h-full bg-[#1d39a0d1] left-[0px] top-0"
    ></div>
    <div
      class="absolute z-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center"
    >
      <img src="@/assets/images/subscribe-logo.svg" alt="Logo" />
      <h3 class="text-[50px] font-[700] mt-[60px] text-[#fff]">
        БУДЬ В КУРСЕ НОВЫХ ФИЛЬМОВ И СЕРИАЛОВ
      </h3>
      <p class="font-[400] text-[22px] text-center text-[#fff] mt-[20px]">
        Подписывайтесь на наши официальные социальные сети и <br />
        будьте в курсе всех последних новостей
      </p>
      <form class="max-w-[615px] w-full mt-[35px] flex flex-col">
        <div class="justify-between flex max-w-[615px] w-full h-[70px]">
          <input
            type="text"
            placeholder="Введите свой E-mail адрес"
            class="bg-[#fff] max-w-[425px] w-full h-full rounded-[10px] pl-[30px]"
          />
          <button
            class="bg-[#F2F60F] text-[#151a26] max-w-[180px] w-full h-full rounded-[10px] cursor-pointer text-[18px] font-[700]"
          >
            Подписаться
          </button>
        </div>
        <div class="mt-[20px] gap-[5px] flex items-center justify-center ">
          <input
            type="checkbox"
            class="accent-[#F2F60F] mt-1 w-[18px] h-[18px]"
          />
          <p class="text-[#fff] text-[17px] leading-snug">
            Соглашаюсь на условия
            <a href="#" class="text-[#F2F60F] underline"
              >политики конфиденциальности</a
            >
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
