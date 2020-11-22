import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Home =()=>import('@/views/home/Home.vue')
const Add = ()=>import('@/views/add/Add.vue')

const router=new VueRouter({
    mode:'hash',
    routes:[
        {path:'/',component:Home},
        {path:'/add',component:Add}
    ]
})

export default router