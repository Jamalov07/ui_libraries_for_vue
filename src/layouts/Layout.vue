<template>
  <div class="w-screen h-screen font-[Poppins]">
    <div class="w-full h-[8%] bg-lime-400 border-2">
      <div class="h-full w-full px-4 py-4">
        <ul
          class="h-full w-full flex gap-4 text-xl items-center justify-center text-blue-600"
        >
          <li><router-link to="/vux"> Vux </router-link></li>
          <li><router-link to="/quasar"> Quasar </router-link></li>
          <li><router-link to="/vuetify"> Vuetify </router-link></li>
          <li><router-link to="/bootstrapvue"> Bootstrap Vue</router-link></li>
          <li><router-link to="/elementplus">Element Plus</router-link></li>
          <li><router-link to="/keenui">Keen Ui</router-link></li>
          <li><router-link to="/equal">Equal</router-link></li>
        </ul>
      </div>
    </div>
    <div class="h-[92%] w-full bg-blue-500 border-2 p-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  color: white !important;
  text-decoration-line: underline;
}
</style>
