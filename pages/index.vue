<script setup>
	const { data: dataHome } = await useAsyncData(() => queryContent('home').findOne());
    const { data: dataBeneficios } = await useAsyncData(() => queryContent('yoga_beneficios').findOne());
  
	const home = dataHome.value
	
	const beneficios = dataBeneficios.value
	const beneficiosItens = beneficios.body.children[0].children
    
	// console.log(5, beneficiosItens.children[0].value.slice(beneficiosItens.children[0].value.indexOf('\n')+2));
	// console.log(11, data.value.body.children[0].children[0].children[0].value);
    // const session = data.value
    // const baneficios = dataBeneficios.value
	
	console.log(2, home);
	console.log(3, JSON.stringify(beneficiosItens, null, 2));

    const p = (str, index) => {
        return str.split('|')[index]
    }

    const f = (vv, param, val) => {
        let a
        a =  vv.filter(x => x[param] == val)
        if (a.length==1){
            return a[0]
        }else {
            return a
        }
    }

</script>

<template>
	<main>
		<div class="relative bg-white pt-[12px] pb-[110px] lg:pt-[80px]">
			<div class="container mx-auto">
				<div class="-mx-1 flex flex-wrap">
					<div class="w-full px-4 lg:w-5/12">
						<div class="hero-content">
						<h1
							class="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]"
						>
                            {{home.title}}
						</h1>
						<!-- <p class="mb-8 max-w-[480px] text-base text-body-color"> -->
						<!-- <div v-if="data.body.children.length"> -->
							<ContentRenderer class="prose" :value="home" />
						<!-- </div> -->
						<!-- </p> -->
						
						<ul class="flex flex-wrap items-center">
							<li>
							<a
								:href="home.links[0].target"
                                class="bg-blue-700 hover:bg-blue-950 px-6 py-4 shadow-lg text-stone-100 rounded border-black"
							>
                                {{home.links[0].label}}
							</a>
							</li>
							<li>
							<a
                                :href="home.links[1].target"
								class="inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
							>
								<span class="mr-2">
								<svg
									width="22"
									height="22"
									viewBox="0 0 22 22"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle cx="11" cy="11" r="11" fill="#3056D3" />
									<rect
									x="6.90906"
									y="13.3636"
									width="8.18182"
									height="1.63636"
									fill="white"
									/>
									<rect
									x="10.1818"
									y="6"
									width="1.63636"
									height="4.09091"
									fill="white"
									/>
									<path
									d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
									fill="white"
									/>
								</svg>
								</span>
								{{home.links[1].label}}
							</a>
							</li>
						</ul>
						</div>
					</div>
					<div class="w-full px-4 lg:w-6/12">
						<div class="lg:ml-auto lg:text-right">
						<div class="relative z-10 inline-block pt-11 lg:pt-0">
							<img
							:src="home.img"
							alt="hero"
							class="rounded-lg max-w-full lg:ml-auto"
							/>
							<!-- <div class="bg-indigo-300 ...">
								<img :src="home.img" class="object-cover h-48 w-96">
							</div> -->
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
							
							<div class="mt-10">
								<iframe class="w-full aspect-video ..." src="https://www.youtube.com/embed/8D1XQ0QSnm0?si=n7iniaTVN5OTOeZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
						</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<section class="pt-20 pb-12 lg:pt-[40px] lg:pb-[90px]">
		<div class="container mx-auto">
			<div class="-mx-4 flex flex-wrap">
			<div class="w-full px-4">
				<div class="mx-auto mb-4 max-w-[510px] text-center lg:mb-10">
					<!-- <span class="mb-2 block text-lg font-semibold text-primary">
						Our Services
					</span> -->
					<h2
						class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
					>
						{{beneficios.title}}
					</h2>
					<p class="font-bold text-sky-400/150 italic text-base text-body-color">
						{{beneficios.subtitle}}
					</p>
				</div>
			</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full px-4 md:w-1/2 lg:w-1/3" v-for="item in beneficiosItens">
					<!-- {{ item.children[0].value.slice(0,  item.children[0].value.indexOf('\n')) }} -->
					<Card :body="item.children[0].value.slice(item.children[0].value.indexOf('\n')) + 2" :title="item.children[0].value.slice(0,  item.children[0].value.indexOf('\n'))" href="/"/>
				</div>
			</div>
		</div>
		</section>
	</main>
</template>

