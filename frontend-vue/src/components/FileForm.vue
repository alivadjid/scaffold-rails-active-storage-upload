<script setup lang="ts">
import { setLatestPost } from "./ImageService";

function handleSubmit(event: Event) {
  event.preventDefault();

  const data = new FormData();
  console.log(data);
  data.append("post[title]", event.target.title.value);
  data.append("post[image]", event.target.image.files[0]);
  // data.append("title", event.target.title.value);
  // data.append("image", event.target.image.files[0]);
  console.log(data);
  submitToAPI(data);
}

function submitToAPI(data: FormData) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => setLatestPost(data.id))
    .catch((err) => console.error(err));
}
</script>

<template>
  <div>
    <h1>FileForm</h1>
    <form @submit="handleSubmit">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" />
      <br />

      <label for="image">Image</label>
      <input type="file" name="image" id="image" />
      <br />

      <button type="submit">Create post</button>
    </form>
  </div>
</template>

<style></style>
