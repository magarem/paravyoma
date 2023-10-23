<template>
    <div class="media-component size-small">
      
      <button class="video-trigger" 
        @click="openVideo">
         <img f-if="videoChannel=='youtube'" class="rounded-md" :src="'https://img.youtube.com/vi/'+videoId+'/0.jpg'" style="width:700px;">
       </button>
       <ModalVideo :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
    </div><!--.media-component-->
  </template>
  
  <script setup>
  import ModalVideo from '@/components/Modalvideo.vue'
  const props = defineProps(['videoChannel', 'videoId'])
  let videoIsOpen = ref(false)
  let a = ref(10)
  function openVideo()  {
   
        videoIsOpen.value = !videoIsOpen.value
      }
  // const videoChannel = computed(() => 'youtube')
  // const videoId = computed(() => 'jUtI7qMf890')
 
  </script>