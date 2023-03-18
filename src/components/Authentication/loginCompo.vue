<template>
<h1>Sign in Component</h1>
<!-- <img class="logo" src="../localassests/organic-food-restaurant-logo-template-free-vector.jpg" alt="AMFMLKMKL;CMKL"> -->

<div class="parent-container">
    <!-- <p uname="omkar"></p> -->
    <div class="container">
        <!-- <input class="child-container" v-model="name" type="text" name="" placeholder="NAME"  id=""> -->
        <input class="child-container" v-model="email" type="email" name="" placeholder="email" id=""> <br>
        <input class="child-container" v-model="password" type="password" name="" placeholder="password" id=""> <br>
        <input class="child-container" v-on:click="LogIn()" id="signinbutton" type="button" value="Sign-In">
    </div>

</div>
<p>
    <router-link to="/">SignUp</router-link>
</p>
</template>

<script>
import axios from 'axios';
export default {

    name: "loginCompo",
    data() {
        return {
            // name:"",
            email: "",
            password: "",

        }
    },
    methods: {
        async LogIn() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            console.log(result.data)
            if (result.status == 200 && result.data.length > 0) {
                alert("login successfully")
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: "Home" })
            }
            if (result.data.length == 0) {
                window.alert("kindly enter correct details")
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "loginnn" })
        }
    }
}
</script>

<style scoped></style>
