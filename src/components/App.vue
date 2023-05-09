<script setup>
import { onMounted, ref } from 'vue'
import Account from './Account.vue'
import Auth from './Auth.vue'
import Lista from './Lista.vue'
import { supabase } from '../supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>
<!-- -a@3*_78UNSk#K7 -->
<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account client:load v-if="session" :session="session" />
    <Auth client:load v-else />
    <Lista client:load/>
  </div>
</template>