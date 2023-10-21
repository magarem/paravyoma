<script setup>
const props = defineProps(['href', 'title', 'body'])
console.log(props);
</script>
<template>
<li class="link-card ">
	<a :href="props.href">
		<h2 class="font-bold mb-1">
			{{props.title}}
			<span>&rarr;</span>
		</h2>
		<div class="aspect-w-16 aspect-h-9">
			<iframe :src="props.body[0]" :width="props.body[1]" :height="props.body[2]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</a>
</li>
</template>
<style>
	.link-card {
		list-style: none;
		display: flex;
		padding: 0.25rem;
		margin-bottom: 20px;
	}

	.link-card > a {
		width: 100%;
		text-decoration: none;
		line-height: 1.4;
		padding: 1rem 1.3rem;
		border-radius: 0.35rem;
		color: #111;
		/* background-color: white; */
	
	}
	h2 {
		margin: 0;
		font-size: 1.25rem;
		/* transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1); */
	}
	p {
		margin-top: 0.5rem;
		margin-bottom: 0;
		color: #444;
	}
	
</style>
