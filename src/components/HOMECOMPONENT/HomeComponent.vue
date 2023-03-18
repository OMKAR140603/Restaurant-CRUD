<template>
<headerCompo></headerCompo>
<!-- <h1>home page,{{ ename }}</h1> -->
<h1>Hello {{ userName }} Welcome to home page</h1>
<table border="2px solid red">
    <tr>
        <td>id </td>
        <td>name </td>
        <td>contact </td>
        <td>address </td>
        <td>action</td>
    </tr>
    <tr v-for="item in restaurant " :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/Update/'+item.id">update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">delete</button>
        </td>
    </tr>
</table>
</template>

    
<script>
import axios from 'axios';
import headerCompo from '../Header/headerCompo.vue';
export default {
    name: "HomeComponent",
    components: {
        headerCompo
    },
    data() {
        return {
            userName: "",
            restaurant: [],
        }

    },
    methods: {
        async deleteRestaurant(id) {

            let res = await axios.delete("http://localhost:3000/restaurants/" + id)
            console.log(res)
            if (res.status == 200) {
                this.loadData();
                alert("data deleted successfully!");
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");
        this.userName = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: "Signin" })
        }

        let res = await axios.get("http://localhost:3000/restaurants")
        console.log(res.data)
        this.restaurant = res.data

        }

    },
    props: {
        uname: String,
        ename: String
    },
    async mounted() {
       this.loadData()

    }

}
</script>

    
<style scoped>

    </style>
