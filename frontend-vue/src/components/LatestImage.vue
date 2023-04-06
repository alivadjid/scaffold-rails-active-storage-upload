<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { latestPost } from "./ImageService";

const imageUrl = ref();

watch(
  () => latestPost.value,
  () => {
    download();
  }
);

onMounted(() => download());

function download() {
  fetch("http://localhost:3000/latest")
    .then((res) => res.json())
    .then((data) => (imageUrl.value = data.image_url))
    .catch((err) => console.error(err));
}
</script>

<template>
  <div>
    <img :src="imageUrl" alt="latest post" />
  </div>
</template>

<style></style>
