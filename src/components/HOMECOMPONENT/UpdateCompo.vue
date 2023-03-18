<template>
    <headerCompo></headerCompo>
    <!-- <h1>home page,{{ ename }}</h1> -->
    <h1>Hello {{ userName }} Welcome to Update page</h1>
   
    <form>
      <input type="text" name="name" id="" placeholder="enter name" v-model="restaurants.name"> <br>
      <input type="number" name="contact" id="" placeholder="enter number" v-model="restaurants.contact"><br>
      <input type="text" name="address" id="" placeholder="enter address" v-model="restaurants.address"><br>
      <input type="button" value="Update Restaurant" v-on:click="Update()"> <br>
      </form>
    </template>
    
    <script>
    import headerCompo from '../Header/headerCompo.vue';
    import axios from "axios"
    export default {
        name: "UpdateCompo",
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
         async   Update(){
                 const res = await axios.put("http://localhost:3000/restaurants/"+ this.$route.params.id,
                {
                  name:this.restaurants.name,
                  contact:this.restaurants.contact,
                  address:this.restaurants.address,  
                
                });

                if(res.status==200){
                    alert("restaurant Updated successfully");
                    console.log("200")
                    this.$router.push({name:"Home"})
                }
            }
        },
        props: {
         uname: String,
         ename:String
        },
      async mounted(){
            let user = localStorage.getItem("user-info");
            this.userName = JSON.parse(user).name;
           const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
           console.log(result.data)
           this.restaurants = result.data
            if(!user){
                this.$router.push({name:"Signin"})
            }

        }
    
    }
    </script>
    
    <style scoped>
    
    </style>
    