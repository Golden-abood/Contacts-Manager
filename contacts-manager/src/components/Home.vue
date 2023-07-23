<template>
  <div>
    <div class="flex-col justify-start items-center mx-auto max-w-[80%]">
      <div class="flex pt-[30px] items-center gap-x-5 pb-6">
        <h2 class="text-primary text-3xl font-bold">Contact Manager</h2>
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          class="flex cursor-pointer bg-primary text-white gap-x-2 py-1 px-2 rounded-md mt-2"
        >
          <i class="ri-add-circle-line"></i>
          <a>New</a>
        </button>
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
      <UsersBoxs />
    </div>
  </div>
  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          data-modal-hide="authentication-modal"
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
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Create User
          </h3>
          <div class="space-y-6" action="#">
            <div>
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >User Name</label
              >
              <input
                type="text"
                name="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="user name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your mobile phone</label
              >
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="09"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div class="flex justify-between"></div>
            <button
              id="bt"
              @click="userStore.CreateUser()"
              type="submit"
              class="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UsersBoxs from "./UsersBoxs.vue";
import { useUserStore } from "../store/user";
const userStore = useUserStore();
</script>

<style scoped></style>
