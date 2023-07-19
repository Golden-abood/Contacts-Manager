<template>
  <div>
    <div class="flex-col justify-start items-center mx-auto max-w-[80%]">
      <div class="flex pt-[30px] items-center gap-x-5 pb-6">
        <h2 class="text-primary text-3xl font-bold">Contact Manager</h2>
        <div
          class="flex bg-primary text-white gap-x-2 py-1 px-2 rounded-md mt-2"
        >
          <i class="ri-add-circle-line"></i>
          <a>New</a>
        </div>
      </div>
      <p class="text-[#666] italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis
        nisi aperiam earum et rerum cum pariatur dicta incidunt sequi
        reprehenderit ratione porro harum omnis dignissimos ab nobis illum. Ad.
      </p>
      <div class="flex items-center gap-x-5 pt-[30px]">
        <input
          class="text-white border-solid border-[2px] border-[#666] rounded-md"
          type="text"
        />
        <button
          class="border-[1px] border-blue-950 border-solid px-3 rounded-md text-base py-1"
        >
          Search
        </button>
      </div>
    </div>

    <div class="users">
        <UserBox />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserBox from './userBox.vue'
</script>

<style scoped></style>
