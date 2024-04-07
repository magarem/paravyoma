<template>
    <div class="container mt-5 mb-5">
        <h1>Lista de alunos inscritos</h1>
        <table id="customers">
            <tr>
                <th v-for="tt in Object.keys(data[0])">{{ tt }}</th>
            </tr>
            <tr v-for="t in data">
                <td v-for="tt in Object.values(t)">{{ tt }}</td>
            </tr>
        </table>
        <!-- {{ data }} -->
    </div>
</template>
<script setup>
// import VueTableLite from "vue3-table-lite";

// const table = reactive({
//       isLoading: false,
//       columns: [
//         {
//           label: "ID",
//           field: "id",
//           width: "3%",
//           sortable: true,
//           isKey: true,
//         },
//         {
//           label: "Name",
//           field: "nome",
//           width: "10%",
//           sortable: true,
//         },
//         {
//           label: "Email",
//           field: "email",
//           width: "15%",
//           sortable: true,
//         },
//         {
//           label: "Cpf",
//           field: "cpf",
//           width: "10%",
//           sortable: true,
//           isKey: true,
//         },
//         {
//           label: "Name",
//           field: "endereco",
//           width: "10%",
//           sortable: true,
//         },
//         {
//           label: "Fone",
//           field: "fone",
//           width: "15%",
//           sortable: true,
//         },
//         {
//           label: "Nascimento",
//           field: "nascimento",
//           width: "15%",
//           sortable: true,
//         },
//         {
//           label: "Pg",
//           field: "formadepagamento",
//           width: "15%",
//           sortable: true,
//         }
//       ],
//       rows: [],
//       totalRecordCount: 0,
//       sortable: {
//         order: "id",
//         sort: "asc",
//       },
//     });

// import data from "http://localhost:8000/lista/" assert {type: 'json'};
// const data = await import("https://jsonplaceholder.typicode.com/posts", { assert: { type: "json" } })
    // onMounted(async () => {
    const data = await $fetch('http://localhost:8000/lista/')
    console.log('data:', data);
    // table.rows = response.rows;
    // table.totalRecordCount = response.count;
    // table.sortable.order = order;
    // table.sortable.sort = sort;
    // })
</script>
<style scoped>
/* input[type=checkbox] {
    margin-bottom: 4px;
    vertical-align: middle;
}

label {  vertical-align: middle;

} */
h1 {
    font-size: 25px;
}
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


#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>