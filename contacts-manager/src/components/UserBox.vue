<template>
  <div
    class="box bg-light flex flex-col lg:flex-row items-center gap-4 justify-around p-5 rounded-md"
  >
    <img class="max-w-[35%] rounded-full" :src="props.element.photo" />
    <div class="bg-white py-4 px-10 w-[90%] lg:w-[50%] rounded-sm">
      <p><span class="text-[#666]">Name :</span> {{ props.element.name }}</p>
      <p>
        <span class="text-[#666]">Mobile :</span>
        {{ props.element.mobilePhone }}
      </p>
      <p><span class="text-[#666]">Email :</span> {{ props.element.email }}</p>
    </div>
    <div class="actions flex flex-row lg:flex-col gap-2">
      <button class="rounded-[10px] bg-warning">
        <i class="ri-eye-fill text-white px-5"></i>
      </button>
      <button
        @click="userStore.deleteUser(index)"
        class="rounded-[10px] bg-error"
      >
        <i class="ri-delete-bin-5-fill text-white px-5 py-10"></i>
      </button>

      <button
        @click="userStore.updateTask(index)"
        class="rounded-[10px] bg-sucsses"
      >
        <i class="ri-pencil-fill text-white px-5"></i>
      </button>


    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../store/user";
const userStore = useUserStore();
const props = defineProps({
  element: { type: Object, required: true },
  index: { type: Number, required: true },
});
</script>

<style scoped></style>
