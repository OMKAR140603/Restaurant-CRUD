<template>

<!-- <h1>Header</h1> -->
<div class="nav">

<router-link to="/Home">Home</router-link>

<router-link to="/Add">Add Restaurant</router-link>
<router-link to="/Update">Update Restaurant </router-link>


<a href="#" v-on:click="Logout()">Logout</a>
</div>
</template>
<script>
export default {
    name:"headerCompo",
    methods:{
        Logout(){
            // console.log("logout")
            localStorage.clear()
            this.$router.push({name:"loginnn"})
        }
    }


}
</script>
<style scoped>

.nav{
    background-color: blanchedalmond;
    overflow: hidden;

}
.nav a{
    float: left;
    font-size: x-large;
    color: black;
    padding: 14px;
    text-decoration: none;
    text-align: center;
    margin: 3px;
}
.nav a:hover{
    transform: scale(1.1);
    color: brown;
}
</style>