<template lang="jade">
.lt-btn-wrap
    button.lt-btn(type='{{ type }}' v-on:click="_click" v-bind:disabled="loading || disabled")
        slot(v-if="!loading")
        span(v-if="loading") {{loadingText == undefined ? "Loading..." :  loadingText}}
</template>

<style lang="sass" scoped>
.lt-btn-wrap{
    margin: 0 16px;
    .lt-btn{
        border: 1px solid rgba(0,0,0,.12);
        display: inline-block;
        width: 100%;
        height: 36px;
        font-size: 14px;
        background: rgba(0,0,0,.0);
        color: rgba(0,0,0,.38);
        cursor: pointer;
        &:hover{
            background: rgba(0,0,0,0.02);
        }
        &[disabled]{
            cursor: not-allowed;
            opacity: 0.65;
            &:hover{
                background: rgba(0,0,0,0.0);
            }
        }
    }
}
</style>

<script>
    export default{
        data(){
            return{
                
            }
        },
        props: ['type', 'loading', 'loadingText', 'disabled'],
        methods: {
            _click(){
                if (this.type == "submit") {
                    this.$dispatch('submit')
                }
            }
        }
    }
</script>