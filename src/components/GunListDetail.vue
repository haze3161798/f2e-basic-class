<template>
    <div class="card">
        <img :src="img" alt="">
        <div class="py-3">
            <div class="pb-3">{{ gunType }}</div>
            <div style="cursor:pointer" @click="$emit('showAlert', {gunName, gunType})">{{ gunName }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default : ''
            },
            img: {
                type: String,
                default: ''
            }
        },
        emits:{
            showAlert: (param) => typeof param === 'object'
        },
        computed: {
            gunType() {
                return '類別:' + this.type
            },
            gunName() {
                return '型號:' + this.name
            }
        },
    }
</script>
