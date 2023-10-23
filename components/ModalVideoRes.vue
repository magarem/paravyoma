<script setup lang="ts">
import { ref } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import { useScreen, useGrid } from 'vue-screen'
const screen = useScreen()
	console.log(111, screen);
let medida = 0
    if (screen.width>600) {
        medida = 600
    }else{
        medida = screen.width - 40
    }
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'

interface Props {
    thumb: string
    thumbWidth: number
    thumbHeight: number
    video: string
    videoWidth: number
    videoHeight: number
}

const props = defineProps<Props>()
const modalOpen = ref<boolean>(false)
const videoRef = ref<HTMLVideoElement | null>(null)

watch(videoRef, () => {
    videoRef.value?.play()
})
</script>

<template>
    <div>

        <!-- 1. The button -->
        <button
            class="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"    
            @click="modalOpen = true"
            aria-label="Watch the video"
        >
            <img class="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out" :src="thumb" :width="thumbWidth" :height="thumbHeight" alt="Modal video thumbnail" />
            <!-- Play icon -->
            <svg class="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="<http://www.w3.org/2000/svg>" width="72" height="72">
                <circle class="fill-white" cx="36" cy="36" r="36" fill-opacity=".8" />
                <path class="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
            </svg>
        </button>

        <TransitionRoot :show="modalOpen" as="template">
            <Dialog :initialFocus="videoRef" @close="modalOpen = false">

                <!-- Modal backdrop -->
                <TransitionChild
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                />
                <!-- End: Modal backdrop -->

                <!-- Modal dialog -->
                <TransitionChild
                    className="fixed inset-0 z-[99999] flex p-6"
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-75"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                >
                    <div class="max-w-5xl mx-auto h-full flex items-center">
                        <DialogPanel class="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                            <div :style="'width:' + medida + 'px;'" class="aspect-w-16 aspect-h-9">
                                <!-- <iframe class="w-full aspect-video ..."  src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" width="500" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                          
                                <LiteYouTubeEmbed  title="" :id="video"  />
                        
                            </div>
                            <!-- <iframe :src="video" class="w-full aspect-video ..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                               
                                <!-- <iframe width="100%" :height="videoHeight" :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                            <!-- <video ref="videoRef" loop controls>
                                <source src="../assets/video.mp4" width="1920" height="1080" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> -->
                        </DialogPanel>
                    </div>
                </TransitionChild>
                <!-- End: Modal dialog -->

            </Dialog>
        </TransitionRoot>

    </div>
</template>
