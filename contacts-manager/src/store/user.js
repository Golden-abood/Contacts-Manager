import { defineStore } from "pinia";
import { ref } from "vue";
export const useUserStore = defineStore("user", () => {
  const users = ref([
    {
      name: "Golden abood",
      mobilePhone: "0958680183",
      email: "a@Golden-1958.com",
      photo: "../../public/images/team-02.jpg",
    },
    {
      name: "Ossy dh",
      mobilePhone: "0956873465",
      email: "O@ssy-1958.com",
      photo: "../../public/images/team-03.jpg",
    },
    {
      name: "Ayham Hawa",
      mobilePhone: "0956824957",
      email: "a@yhmam-1958.com",
      photo: "../../public/images/team-04.jpg",
    },
  ]);
  // {{ CRUD }} {{D}}
  const deleteUser = (index) => {
    let conf = confirm("Are you sure you want to delete " + index + 1);
    if (conf) {
      users.value.splice(index, 1);
    }
  };
  // {{ CRUD }} {{U}}
  const updateTask = (index) => {
    let user = users.value[index];
    let nameTask = prompt("update task", user.name);
    user.name = nameTask;
  };

  // {{ CRUD }} {{C}}
  const CreateUser = () => {
    
  };
  return {
    users,
    CreateUser,
    updateTask,
    deleteUser,
  };
});
