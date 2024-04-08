<template>
    <html lang="en">
		<Head>
			<Title>My App</Title>
			<!-- <Meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> -->
		</Head>
        <Header title="testeheader" />
        <body>
            <Navigation />
            <slot />
            <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://magaweb.com.br/" class="hover:underline">Magaweb</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></Script>
    <Script>
		document.querySelector('.hamburger').addEventListener('click', () => {
		  document.querySelector('.nav-links').classList.toggle('expanded');
		});
	</Script>        </body>
    </html>
</template>
<script setup>
    // import "assets/css/global.css?url";
</script>
<style>

	:root {
		--accent: 124, 58, 237;
		--accent-gradient: linear-gradient(45deg, rgb(var(--accent)), #da62c4 30%, white 60%);
	}
	html {
		font-family: system-ui, sans-serif;
		background-color: #F6F6F6;
	}
	code {
		font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, monospace;
	}

 
</style>