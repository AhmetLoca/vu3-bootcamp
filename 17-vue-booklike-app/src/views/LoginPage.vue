<template>
  <div class="login_register_container">
    {{ $store.getters._saltKey }}
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <a href="#" class="text-red-900 hover:text-black">Üye olmak istiyorum!</a>
      <router-link :to="{ name: 'Register' }" class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
    </span>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJS.SHA256(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("Boyle bir kullanici bulunamadi...");
          }
        })
        .catch((e) => console.log(e));

      // const password = CryptoJS.AES.encrypt(this.userData.password, this.$store.getters._saltKey).toString();
      // this.$appAxios.get(`/users?username=${this.userData.username}&password=${password}`).then((login_response) => {
      //   console.log(login_response);
      // });
    },
  },
};
</script>

<style></style>
