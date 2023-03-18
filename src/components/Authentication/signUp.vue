<template>
<img class="logo" src="../localassests/organic-food-restaurant-logo-template-free-vector.jpg" alt="AMFMLKMKL;CMKL">
<!-- <h1>Sign up components</h1> -->
<div class="parent-container">
<p uname="name"></p>
    <div class="container">
        <input class="child-container" v-model="name" type="text" name="" placeholder="NAME"  id="">
        <input class="child-container" v-model="email" type="email" name="" placeholder="email" id="">
        <input class="child-container" v-model="password" type="password" name="" placeholder="password" id="">
        <input class="child-container" v-on:click="signUp()" id="signinbutton" type="button" value="Sign-up">
    </div>

</div>
<p>
<router-link to="/Sign-in">SignIn</router-link>
</p>
</template>

<script>
import axios from "axios"
export default {
    name: "signUp",
    components: {

    },
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }

    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status == 201) {
            //201
                localStorage.setItem("user-info", JSON.stringify(result.data))
                 alert("sign up successfully")
                 this.$router.push({name:'loginnn'})
            }
            console.log("result", result)
        }
    },
    mounted(){
let user = localStorage.getItem("user-info");
if(user){
    // this.$router.push({name:"sample"})
    this.$router.push({name:"SignUp"})
}
    },
    props: {

    },

}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 100px;
}

.container {
    display: flex;
    flex-direction: column;
    width: 50vh;
    padding: 11vw 37vw;
}

.child-container {
    padding: 5px;
    margin: 5px;
}

#signinbutton {
    width: 80px;
    margin-left: 10vw;
}
</style>
