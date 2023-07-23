<template>
  <div class="lg:px-[100px] px-[20px]">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 pt-[20px] pb-[100px] gap-[50px]"
    >
      <userBox
        :element="user"
        :index="index"
        v-for="(user, index) in users"
        :key="index"
      />
      
    </div>
  </div>
</template>

<script setup lang="ts">
import userBox from "./userBox.vue";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { users } = storeToRefs(userStore);
</script>

<style scoped></style>
