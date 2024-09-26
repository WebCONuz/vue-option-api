<script>
import axios from "../api/axios.js";

export default {
  components: {},
  data() {
    return {
      usergmail: "emilys",
      userpassword: "emilyspass",
    };
  },
  methods: {
    async sendData() {
      try {
        const res = await axios.post("https://dummyjson.com/auth/login", {
          username: this.usergmail,
          password: this.userpassword,
          expiresInMins: 30,
        });
        console.log(res);
        if (res.status === 200) {
          console.log(res.data);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("email", res.data.email);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {},
};
</script>

<template>
  <main class="my-10">
    <div class="container flex gap-x-5">
      <div class="w-1/2 bg-[#E2F0FF] flex flex-col items-center">
        <img src="/logo.png" alt="logo" class="w-full mb-2" />
      </div>
      <div class="w-1/2 py-[100px] flex justify-center">
        <form class="block w-[440px]" @submit.prevent="sendData">
          <h3 class="font-semibold text-2xl">Welcome back!</h3>
          <p class="font-semibold text-lg mt-3 mb-16">
            Please login to access your account.
          </p>
          <div class="mb-8">
            <label for="usergmail">G-mail</label>
            <input
              id="usergmail"
              type="text"
              class="py-2 px-4 rounded-md outline-none bg-gray-200 mt-[10px] w-full"
              placeholder="Enter your gmail"
              v-model="usergmail"
            />
          </div>
          <div class="mb-11">
            <label for="userPassword">Password</label>
            <input
              id="userPassword"
              type="text"
              class="py-2 px-4 rounded-md outline-none bg-gray-200 mt-[10px] w-full"
              placeholder="Enter your password"
              v-model="userpassword"
            />
          </div>
          <input
            id="userPassword"
            type="submit"
            class="py-2 px-4 rounded-md outline-none bg-[#4C70FF] text-white mt-[10px] w-full"
            value="Login"
          />
        </form>
      </div>
    </div>
  </main>
</template>

<style></style>
