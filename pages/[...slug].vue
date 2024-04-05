<script setup>

  const route = useRoute()
	const { data } = await useAsyncData(() => queryContent(route.params.slug[0]).findOne());
	// const dataValue = data.value
  console.log(11, route.params.slug);
</script>

<template>
	<main v-if="data">
        
		<div class="relative bg-white pt-[12px] pb-[110px] lg:pt-[80px]">
			<div class="container mx-auto">
				<div class="-mx-1 flex flex-wrap">
                    <div class="w-full px-4 lg:w-6/12" v-if="data?.img">
						<div class="lg:ml-auto lg:text-right">
						<div class="relative z-10 inline-block pt-11 lg:pt-0">
							<img
							:src="data?.img"
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
                            {{data.title}}
						</h1>
					
						<!-- <p _class="mb-8 max-w-[480px] text-base text-body-color"> -->
						<div v-if="data.body.children.length">
							<ContentRenderer class="prose" :value="data" />
						</div>
							
						<!-- </p> -->
					
						</div>
					</div>
					<div style="width: 400px;">
          
    </div>
	
          <div class="grid md:grid-cols-3 gap-4" v-if="data.videos">
					<div v-for="item in data.videos" _style="width: 400px;">
					
						<!-- <LiteYouTubeEmbed class="w-full aspect-video ..."
        :id="item[0]"
        title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
    /> -->
						<!-- <VideoCard  :body="item" title="video" href="/"/> -->
						<VideoShow videoChannel="youtube" :videoId="item" />
						<!-- <ModalVideo
							:thumb="'https://img.youtube.com/vi/'+item+'/0.jpg'"
							:thumbWidth="400"
							:thumbHeight="300"
							:video="item"
							:videoWidth="1920"
							:videoHeight="1080" /> -->
					</div>
              
          </div>
					
				</div>
			</div>
		</div>
		
	</main>
</template>

