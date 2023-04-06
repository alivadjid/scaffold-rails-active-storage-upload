import { ref } from "vue";

export const latestPost = ref();

export function setLatestPost(url: string) {
  console.log("setLate", url);
  latestPost.value = url;
}
