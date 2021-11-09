<template>
    <div>
        <p>{{nombre}}</p>
    </div>
</template>
<script>
export default {

    data() {
        return {
            renombre:"",
        }
    },
    computed:{
        nombre(){  
            return this.$store.state.nombre
        },
    }
    
}
</script>