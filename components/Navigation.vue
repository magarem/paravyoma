<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{logo}}</span>
      </a>
      <Hamburger />
      <div class="nav-links">
          <a :href="item[1]"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"
              v-for="item in menuItens">
            {{item[0]}}
          </a>
      </div>
  </div>
</template>
<script setup>
  const logo = "Paravyoma Yoga"
  const menuItens = [["sobre mim","about"], ["yogaterapia", "yogaterapia"], ["videos", "videos"], ["contato", "contact"]]
</script>
<style>
  /* nav styles */
  .hamburger {
    padding-right: 20px;
    cursor: pointer;
  }
  
  .hamburger .line {
    display: block;
    width: 25px;
    height: 5px;
    margin-bottom: 3px;
    background-color: #110525;
  }
  
  .nav-links {
    width: 100%;
    top: 5rem;
    left: 48px;
    background-color: #080215;
    display: none;
    margin: 0;
  }
  
  .nav-links a {
    display: block;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .nav-links a:hover, a:focus {
    background-color: #34264a;
  }
  
  .expanded {
    display: unset;
  }
  
  @media screen and (min-width: 636px) {
    .nav-links {
      margin-left: 5em;
      display: block;
      position: static;
      width: auto;
      background: none;
    }
  
    .nav-links a {
      display: inline-block;
      padding: 15px 20px;
    }
  
    .hamburger {
      display: none;
    }
  }
</style>