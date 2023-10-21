<script setup>
    const props = defineProps(['title'])
    console.log(props.title)
</script>
<template>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="generator" content="nuxt3" />
        <!-- <link rel="stylesheet" href="/assets/css/tailwind.css" /> -->
        <link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />


        <title>{{title}}</title>
    </head>
</template>
