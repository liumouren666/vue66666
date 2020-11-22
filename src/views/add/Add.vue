<template>
    <div class='my-add'>
        <div 
        v-for='item in list' 
        :key='item.id'
        v-text='item.label'
        ></div>
        <hr>
        <div v-text='lists'>


        </div>
    </div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex'
export default {
    name:'Add',
    data:function(){
        return {
            list:[
                {id:'01',label:'一'},
                {id:'02',label:"二"},
                {id:'03',label:'三'}

            ]
        }
    },
    computed:{
        ...mapState(['lists'])

    },
    mounted(){
        this.fn({name:'嘻嘻'})
    },
    methods:{
        ...mapMutations(['fn'])
    }

}
</script>

<style>

</style>