<template>
  <div class="w-full h-1/2 flex flex-col justify-around items-center">
    <div class="text-4xl text-white font-bold">Equal buttons and selects</div>
    <div class="flex gap-2">
      <it-button
        @click="following = !following"
        icon="personicon"
        :variant="following ? 'primary' : 'default'"
        >{{ following ? "Following" : "Follow" }}</it-button
      >
      <it-button variant="primary" loading>Loading</it-button>
      <it-button variant="primary" loading outlined>Loading</it-button>
    </div>

    <it-select
      label-top="List of string"
      v-model="exampleStringValue"
      :options="exampleStringOptions"
    />
    <it-select
      label-top="List of number"
      v-model="exampleNumberValue"
      :options="exampleNumberOptions"
    />
    <it-select
      label-top="Track by 'value'(default)"
      v-model="exampleTrackByValue1"
      :options="exampleTrackByOptions1"
    />
    <it-select
      label-top="Track by 'some'"
      v-model="exampleTrackByValue2"
      track-by="some"
      :options="exampleTrackByOptions2"
    />
    <it-select
      label-top="Track by 'key'"
      v-model="exampleTrackByValue3"
      track-by="key"
      :options="exampleTrackByOptions3"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const following = ref(false);

let exampleStringValue = ref(null);
let exampleStringOptions = ref([
  "Test string 1",
  "Test string 2",
  "Test string 3",
  "Test string 4",
  "Test string 5",
  "Test string 6",
]);
let exampleNumberValue = ref(1);
let exampleNumberOptions = ref([1, 2, 3, 4, 5, 6, 7, 8]);
let exampleTrackByValue1 = ref(null);
let exampleTrackByOptions1 = ref([
  { name: "New York", value: "nwrk" },
  { name: "Paris", value: "prs" },
  { name: "Moscow", value: "mscw" },
]);
let exampleTrackByValue2 = ref({ name: "Some field 1", some: "some-field-1" });
let exampleTrackByOptions2 = ref([
  { name: "Some field 1", some: "some-field-1" },
  { name: "Some field 2", some: "some-field-2" },
  { name: "Some field 3", some: "some-field-3" },
  { name: "Some field 4", some: "some-field-4" },
]);
let exampleTrackByValue3 = ref(null);
let exampleTrackByOptions3 = ref([
  { name: "Key 1", key: "key-1" },
  { name: "Key 2", key: "key-2" },
  { name: "Key 3", key: "key-3" },
  { name: "Key 4", key: "key-4" },
  { name: "Key 5", key: "key-5" },
  { name: "Key 6", key: "key-6" },
  { name: "Key 7", key: "key-7" },
]);
</script>

<style scoped></style>
