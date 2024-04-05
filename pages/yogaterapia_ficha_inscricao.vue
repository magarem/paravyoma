<template>
<div class="container">
  <div v-if="formRegisterOk" style="margin: 50px;">
    <h1 style="font-size: 25px;">Dados registrados com sucesso! Bom curso.</h1>
    <br/><a href="/" class="btn">Clique aqui para ir para o início do site</a>
  </div>
  <div v-else style="margin-top: 50px;">
    <form  method="post" @submit.prevent="formTest">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        <div class="form-group row">
          <label for="nome" class="col-4 col-form-label">Nome completo</label> 
          <div class="col-8">
            <input id="nome" name="nome" v-model="formData.nome" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="cpf" class="col-4 col-form-label">CPF</label> 
          <div class="col-8">
            <input id="cpf" name="cpf"  v-model="formData.cpf" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-4 col-form-label">Email</label> 
          <div class="col-8">
            <input id="email" name="email"  v-model="formData.email" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="endereco" class="col-4 col-form-label">Endereço Completo com CEP</label> 
          <div class="col-8">
            <textarea id="endereco" name="endereco"  v-model="formData.endereco" cols="40" rows="5" class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="telefone" class="col-4 col-form-label">Telefone com whatsapp</label> 
          <div class="col-8">
            <input id="fone" name="fone" v-model="formData.fone" type="text" class="form-control">
          </div>
        </div> 
      </div>
      <div class="form-group row">
          <div class="offset-4 col-8">
            <button name="submit" type="submit" _class="btn btn-primary">Enviar formulário</button>
          </div>
        </div>
    </form>
  </div>

</div>

</template>
<script setup>
let formRegisterOk = ref(false)
const formData = reactive({})
const formTest = async () => {

  const isFormValid = true
  console.log(formData)

  if(isFormValid) { // Send the request only if there are no errors
    console.log("sss");
    const data = await $fetch('api/go', {
      // mode: "no-cors",
      method: 'POST',
        headers: {
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials': 'true',
          "Access-Control-Allow-Headers": '*',
          "Access-Control-Expose-Headers": '*'
        },
        body: JSON.stringify(formData)
    })
    
    console.log('data:', data);

    if (data=='ok') {
      formRegisterOk.value = true
      // alert("Sua ficha foi registrada com sucesso!")
    }
    // const { data : shopsData } = await useFetch('https://mocki.io/v1/3fa1924f-6c6b-4d49-b9ec-d91f6da13c3c')

    
  }
  
}

</script>
<style scoped>
.container { 
    margin-left: 15%;
    margin-right:15%;
    width: 70%;
}

* {
  box-sizing: border-box;
}
#wrapper {
  width: 170px;
}
textarea {
  border-color: #3c2e2e;
  border-width: 1px;
  padding: 10px;
}
label, textarea, input {
  width: 100%;
  display: block;
  /* margin-right: 100px;
  margin-left: 100px; */
}
input , button{
  border-color: #3c2e2e;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
}

button {
  margin-top: 10px;
  background-color: rgb(78, 144, 122);
}

div {
  margin-bottom: 10px;
}

</style>