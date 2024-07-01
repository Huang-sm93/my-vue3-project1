<template>
    <div class="genNums">
      <form @submit.prevent="genNums">
        <input type="text" v-model="search.num1" placeholder="num1"/>
        <input type="text" v-model="search.num2" placeholder="num2"/>
        <input type="text" v-model="search.num3" placeholder="num3"/>
        <button type="submit">一键生成</button> 
      </form>
    </div>
    <div>
      <button @click="fetchData">点击</button>
      <div v-if="data">
        Fetched Data: {{ data }}
      </div>
    </div>
  </template>
   
<style>
  .genNums{
    background-color: aliceblue;
    padding: 20px;
    display: flex;
  }
</style>
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        data: null,
        search:{
          num1: '',
          num2: '',
          num3: ''
        },
        genNumRes:[],

      };
    },
    methods: {
      fetchData() {
        axios.get('http://localhost:8090/account/get/'+'8888')
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      },
      genNums(){

        axios.post('http://localhost:8090/account/insert',)
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      }
    },
  };
  </script>