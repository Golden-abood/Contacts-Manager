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
  let conf = document.querySelector("#delete-user");
  console.log(conf);
  const deleteUser = (index) => {
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
  // inputs

  // {{ CRUD }} {{C}}
  const CreateUser = () => {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let name = document.getElementById("name").value;
    let bt = document.getElementById("bt");
    console.log(email);
    console.log(name);
    console.log(phone);
    let user = {
      name: name,
      email: email,
      phone: phone,
    };
    users.value.push(user);
    bt.setAttribute("data-modal-hide", "authentication-modal");
  };
  return {
    users,
    CreateUser,
    updateTask,
    deleteUser,
  };
});
