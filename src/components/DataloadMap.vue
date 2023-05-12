<script setup>
import { ref, computed } from 'vue'
import fm from 'front-matter'
const props = defineProps(['target', 'type', 'field'])
const URL = import.meta.env.PUBLIC_URL
const response = await fetch(URL + props.target);
const data = await response.json();
var content = fm(data[0].body)
console.log(data);
var ret
if (props.type=="fm"){
  ret = content.attributes[props.field]
}else{
  ret = data[0][props.field]
}

const publishedBooksMessage = computed(() => {
  return content.attributes[props.field]
})
</script>

<template>
  <li v-for="(item, index) in publishedBooksMessage">
  {{ item }} - {{ index }}
  </li>
</template>