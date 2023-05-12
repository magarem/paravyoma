<script setup>
import fm from 'front-matter'

import Card from '../components/Card.vue';	
const session = {}
const URL = import.meta.env.PUBLIC_URL
const response = await fetch(URL + '/api/clhdtusbo0000lbyc6y8yntkc/note/clhfizxr40002lbi8fqmhhye8/show');
const data = await response.json();
var content = fm(data[0].body)

session.header = {
	txt1: content.attributes.txt1,
	btn: content.attributes.btn,
	body: content.body,
	img: data[0].img,
	file: content.attributes.file,
}
const response2 = await fetch(URL + '/api/clhdtusbo0000lbyc6y8yntkc/note/clhfkszgr0000lb6ceflrxssh/show');
const data2 = await response2.json();
var content2 = fm(data2[0].body)
console.log('log:', content2);
session.beneficios= {
	title: content2.attributes.title,
	subtitle: content2.attributes.subtitle,
	itens: content2.attributes.beneficios
}

const p = (str, index) => {
	return str.split('|')[index]
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
							{{session.header.txt1}}
						</h1>
						<p class="mb-8 max-w-[480px] text-base text-body-color">
							{{session.header.body}}
						</p>
						<ul class="flex flex-wrap items-center">
							<li>
							<a
								:href="p(session.header.btn[0], 1)"
								class="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
							>
								{{p(session.header.btn[0], 0)}}
							</a>
							</li>
							<li>
							<a
								:href="p(session.header.btn[1], 1)"
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
								{{p(session.header.btn[1], 0)}}
							</a>
							</li>
						</ul>
						<!-- <div class="clients pt-16">
							<h6
							class="mb-2 flex items-center text-xs font-normal text-body-color"
							>
							Some Of Our Clients
							<span
								class="ml-2 inline-block h-[1px] w-8 bg-body-color"
							></span>
							</h6>
							<div class="flex items-center">
							<div class="mr-4 w-full py-3">
								<img src="assets/images/brands/ayroui.svg" alt="ayroui" />
							</div>
							<div class="mr-4 w-full py-3">
								<img
								src="assets/images/brands/graygrids.svg"
								alt="graygrids"
								/>
							</div>
							<div class="mr-4 w-full py-3">
								<img src="assets/images/brands/uideck.svg" alt="uideck" />
							</div>
							</div>
						</div> -->
						</div>
					</div>
					<div class="hidden px-4 lg:block lg:w-1/12"></div>
					<div class="w-full px-4 lg:w-6/12">
						<div class="lg:ml-auto lg:text-right">
						<div class="relative z-10 inline-block pt-11 lg:pt-0">
							<img
							:src="session.header.img"
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
						{{session.beneficios.title}}
					</h2>
					<p class="font-bold text-sky-400/150 italic text-base text-body-color">
						{{session.beneficios.subtitle}}
					</p>
				</div>
			</div>
			</div>
			<div class="flex flex-wrap">
				<div v-for="item in session.beneficios.itens" class="w-full px-4 md:w-1/2 lg:w-1/3 ">
					<Card :body="item.body" :title="item.titulo" />
				</div>
			</div>
		</div>
		</section>
	</main>
</template>
