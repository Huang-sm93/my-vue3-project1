<template>
    <div>
      <button @click="fetchData">点击请求</button>
      <div v-if="data">
        Fetched Data: {{ data }}
      </div>
    </div>
  </template>
   
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      fetchData() {
        axios.get('http://47.95.172.206:8080/account/get/8888')
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      },
    },
  };
  </script>