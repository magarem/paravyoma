<script setup>
	const { data } = await useAsyncData(() => queryContent('yogaterapia').findOne());
	const page = data.value
</script>

<template>
	<main>
		<div class="relative bg-white pt-[12px] pb-[110px] lg:pt-[80px]">
			<div class="container mx-auto">
				<div class="-mx-1 flex flex-wrap">
                    <div class="w-full px-4 lg:w-6/12">
						<div class="lg:ml-auto lg:text-right">
						<div class="relative z-10 inline-block pt-11 lg:pt-0">
							<img
							:src="page.img"
							alt="hero"
							class="rounded-lg max-w-full lg:ml-auto"
							/>
							<span class="absolute -left-8 -bottom-8 z-[-1]">
							<svg
								width="93"
								height="93"
								viewBox="0 0 93 93"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
								<circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
								<circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
								<circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
								<circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
								<circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
								<circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
								<circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
								<circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
								<circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
								<circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
								<circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
								<circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
								<circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
								<circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
								<circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
								<circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
								<circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
								<circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
								<circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
								<circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
								<circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
								<circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
								<circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
								<circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
							</svg>
							</span>
						</div>
						</div>
					</div>
					<div class="w-full px-4 lg:w-5/12">
						<div class="hero-content">
                            
						<h1
							class="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]"
						>
                            {{page.title}}
						</h1>
						<div class="">
							<!-- <ContentRenderer class="prose" :value="data" /> -->
						
							<ContentDoc class="prose" />
                        </div>
					
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
	</main>
</template>
<style>
 p {
	font-size: 20px;
 }
</style>