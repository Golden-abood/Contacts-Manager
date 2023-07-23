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
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        type="button"
        class="rounded-[10px] bg-error"
        @click="userStore.deleteUser(index)"
      >
        {{ props.index }}
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
  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this user ?
          </h3>
          <button
            data-modal-hide="popup-modal"
            type="button"
            id="delete-user"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            Yes, I'm sure
          </button>
          <button
            data-modal-hide="popup-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            No, cancel
          </button>
        </div>
      </div>
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
import { onMounted } from "vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});
</script>

<style scoped></style>
