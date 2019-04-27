import BoxComponent from './box.vue'

const Box = {
    install:function(Vue){
        Vue.component('Box',BoxComponent)
    }
}

export default Box