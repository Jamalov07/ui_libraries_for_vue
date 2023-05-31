<template>
  <div class="w-full h-1/2 flex flex-col justify-around items-center">
    <div class="text-4xl text-white font-bold">Quasar buttons</div>

    <div class="q-pa-md q-gutter-sm">
      <q-btn style="background: #ff0080; color: white" label="Fuchsia" />
      <q-btn flat style="color: #ff0080" label="Fuchsia Flat" />
      <q-btn style="background: goldenrod; color: white" label="Goldenrod" />
      <q-btn outline style="color: goldenrod" label="Goldenrod" />
      <q-btn
        color="grey-4"
        text-color="purple"
        glossy
        unelevated
        icon="camera_enhance"
        label="Purple text"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
