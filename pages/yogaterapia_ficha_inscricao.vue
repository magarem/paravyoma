<template>
{{ formData }}
<div class="container">
  <form  method="post" @submit.prevent="formTest">
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
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" _class="btn btn-primary">Enviar formulário</button>
      </div>
    </div>
  </form>

</div>

</template>
<script setup>
const formData = reactive({})
const formTest = () => {
  
  const isFormValid = true
  console.log(formData)

  if(isFormValid) { // Send the request only if there are no errors
    console.log("sss");
    fetch('http://localhost:8000/', {
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
  }
  
}

</script>
<style scoped>
.container { 
    width: 700px; 
    margin-left: auto;
    margin-right: auto; 
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