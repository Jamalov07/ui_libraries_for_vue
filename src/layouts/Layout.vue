<template>
  <div class="w-screen h-screen font-[Poppins]">
    <div class="w-full h-[8%] bg-lime-400 border-2">
      <div class="h-full w-full px-4 py-4">
        <ul
          class="h-full w-full bg-white flex gap-4 text-xl items-center justify-center text-blue-600"
        >
          <li><router-link class="border p-1" to="/vux"> Vux </router-link></li>
          <li><router-link class="border p-1" to="/quasar"> Quasar </router-link></li>
          <li><router-link class="border p-1" to="/vuetify"> Vuetify </router-link></li>
          <li><router-link class="border p-1" to="/bootstrapvue"> Bootstrap Vue</router-link></li>
          <li><router-link class="border p-1" to="/elementplus">Element Plus</router-link></li>
          <li><router-link class="border p-1" to="/keenui">Keen Ui</router-link></li>
          <li><router-link class="border p-1" to="/equal">Equal</router-link></li>
          <li><router-link class="border p-1" to="/antdesignvue">Ant Design Vue</router-link></li>
          <li><router-link class="border p-1" to="/primevue">Prime Vue</router-link></li>
          <li><router-link class="border p-1" to="/fishui">Fish ui</router-link></li>
          <li><router-link class="border p-1" to="/naiveui">Naive Ui</router-link></li>
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
  color: red !important;
  text-decoration-line: underline;
}

</style>
