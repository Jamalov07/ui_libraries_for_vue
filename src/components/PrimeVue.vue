<template>
  <div class="w-full h-3/4 bg-white p-2 flex flex-col justify-around items-center">
    <div class="text-4xl text-lime-500 font-bold">Prime vue</div>
    <div class="card flex justify-content-center">
      <MultiSelect
        v-model="selectedCities"
        :options="cities"
        optionLabel="name"
        placeholder="Select Cities"
        :maxSelectedLabels="3"
        class="w-full md:w-20rem"
      />
    </div>
    <!-- <div class="card">
      <div
   
        class="flex align-items-center justify-content-center"
      >
        <SpeedDial
          :model="items"
          :radius="80"
          type="circle"
          buttonClass="p-button-warning"
        />
      </div>
    </div> -->
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MultiSelect from "primevue/multiselect";
// import SpeedDial from "primevue/speeddial";
// import { useToast } from "primevue/usetoast";
// import { useRouter } from "vue-router";
import Chart from 'primevue/chart';

// const toast = useToast();
// const router = useRouter();

// const items = ref([
//   {
//     label: "Add",
//     icon: "pi pi-pencil",
//     command: () => {
//       toast.add({ severity: "info", summary: "Add", detail: "Data Added" });
//     },
//   },
//   {
//     label: "Update",
//     icon: "pi pi-refresh",
//     command: () => {
//       toast.add({
//         severity: "success",
//         summary: "Update",
//         detail: "Data Updated",
//       });
//     },
//   },
//   {
//     label: "Delete",
//     icon: "pi pi-trash",
//     command: () => {
//       toast.add({
//         severity: "error",
//         summary: "Delete",
//         detail: "Data Deleted",
//       });
//     },
//   },
//   {
//     label: "Upload",
//     icon: "pi pi-upload",
//     command: () => {
//       router.push("/fileupload");
//     },
//   },
//   {
//     label: "Vue Website",
//     icon: "pi pi-external-link",
//     command: () => {
//       window.location.href = "https://vuejs.org/";
//     },
//   },
// ]);
const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
});
const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});
</script>
