<template>
    <div>
        <!-- {{ data }}     -->
    </div>
</template>
<script setup>
// import data from "http://localhost:8000/lista/" assert {type: 'json'};
// const data = await import("https://jsonplaceholder.typicode.com/posts", { assert: { type: "json" } })
    // onMounted(async () => {
    // const data = await $fetch('http://localhost:8000/lista/')
    // console.log('data:', data);
    // })
</script>
<style scoped>
/* input[type=checkbox] {
    margin-bottom: 4px;
    vertical-align: middle;
}

label {  vertical-align: middle;
} */
p {
    margin-bottom: 10px;
}
.form-field * {
    vertical-align: middle;
}
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
label, textarea, input[type=text] {
    width: 100%;
    display: block;
    /* margin-right: 100px;
    margin-left: 100px; */
    border-radius: 7px;
    border-color: #626262;
}
label {
    font-weight: bold;
    /* margin-right: 100px;
    margin-left: 100px; */
    color: #3c2e2e;
    margin-bottom: 5px;
}
input[type=text] , button{
    /* border-color: #3c2e2e; */
    border-style: solid;
    border-width: 1px;
    padding: 7px;
    border-radius: 7px;
    border-color: #626262;
    
}

button {
    margin-top: 10px;
    background-color: rgb(78, 144, 122);
    padding: 10px;
}

div {
    margin-bottom: 10px;
}

</style>