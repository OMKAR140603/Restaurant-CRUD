<template>
    <headerCompo></headerCompo>
    <!-- <h1>home page,{{ ename }}</h1> -->
    <h1>Hello {{ userName }} Welcome to ADD page</h1>
   
      <form>
      <input type="text" name="name" id="" placeholder="enter name" v-model="restaurants.name"> <br>
      <input type="number" name="contact" id="" placeholder="enter number" v-model="restaurants.contact"><br>
      <input type="text" name="address" id="" placeholder="enter address" v-model="restaurants.address"><br>
      <input type="button" value="Add Restaurant" v-on:click="Add()"> <br>
      </form>
    </template>
    
    <script>
    import headerCompo from '../Header/headerCompo.vue';
    import axios from "axios"
    export default {
        name: "AddComponent",
        components: {
            headerCompo
        },
        data() {
            return {
                userName:"",
                restaurants:{
                    name:"",
                    address:"",
                    contact:""
                }
            }
    
        },
        methods: {
          async  Add(){
                console.log(this.restaurants);
                const res = await axios.post("http://localhost:3000/restaurants",
                {
                  name:this.restaurants.name,
                  contact:this.restaurants.contact,
                  address:this.restaurants.address,  
                
                });
                if(res.status==201){
                    alert("restaurant added successfully");
                    this.$router.push({name:"Home"})
                }
                console.log("result",res.data)
            }
        },
       
        props: {
         uname: String,
         ename:String
        },
        mounted(){
            let user = localStorage.getItem("user-info");
            this.userName = JSON.parse(user).name;
            if(!user){
                this.$router.push({name:"Signin"})
            }
        }
    
    }
    </script>
    
    <style scoped>
    
    </style>
    