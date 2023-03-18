import HomeComponent from "@/components/HOMECOMPONENT/HomeComponent.vue";
import signUp from "@/components/Authentication/signUp.vue";
import login from "../src/components/Authentication/loginCompo.vue"
import AddCompo from "../src/components/HOMECOMPONENT/AddCompo.vue"
import sampleCompo from "../src/components/Authentication/sampleCompo.vue"
import UpdateCompo from "../src/components/HOMECOMPONENT/UpdateCompo.vue"
import {createRouter,createWebHistory} from "vue-router"
const routes=[
    
    {
        name:"SignUp",
        component:signUp,
        path:"/"
    },
    {
        name:"Home",
        component:HomeComponent,
        path:"/Home"
    },
    {
        name:"loginnn",
        component:login,
        path:"/Sign-in"
    },
    {
        name:"ADD",
        component:AddCompo,
        path:"/Add"
    },
    {
        name:"UPDATE",
        component:UpdateCompo,
        path:"/Update/:id"
    },
    {
        name:"sample",
        component:sampleCompo,
        path:"/sample"
    },
];

const router =createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router
