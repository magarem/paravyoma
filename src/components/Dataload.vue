<!--
Say Hello World with Vue!
-->

<script setup>
import { ref } from 'vue'

// A "ref" is a reactive data source that stores a value.
// Technically, we don't need to wrap the string with ref()
// in order to display it, but we will see in the next
// example why it is needed if we ever intend to change
// the value.
const message = ref('Hello World!')
const URL = import.meta.env.PUBLIC_URL
const response = await fetch(URL + '/api/clhdtusbo0000lbyc6y8yntkc/note/clhjf3u850000mn08ofd4sk7w/show');
const data = await response.json();
console.log(data);
</script>

<template>
  <h1>{{ data }}</h1>
</template>