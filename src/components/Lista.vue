<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    // loading.value = true
    // const { user } = session.value

    let { data, error } = await supabase
        .from('note')
        .select('*')
    
    console.log(data);

    if (error && status !== 406) throw error

  } catch (error) {
    alert(error.message)
  } finally {
    // loading.value = false
  }
}

async function updateProfile() {
  try {
    // loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    // loading.value = false
  }
}


</script>

<template>
 <div>
    teste222
 </div>
</template>