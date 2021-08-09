import Toast from './Toast'
import { createApp,h } from 'vue'
import { def } from '@vue/shared'

// const obj = {}

const app=createApp({
    render(){
        return h(Toast)
    }
})

app.mount('#toast')

export default app