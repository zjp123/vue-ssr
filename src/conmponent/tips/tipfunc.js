import Components from './tips-extend'
import Vue from 'vue'

const tipsConstruct = Vue.extend(Components) // vue的子类

// const app = Vue.component('my-component', {
//         template: '<span>333</span>',
//         data() {
//             return {
//                 aa: 88
//             }
//         }
//     })
// console.log(tipsConstruct, 'tipsConstruct')
// console.log(app, 'tt')
const instances = []
let inId = 0

const removeInstance = (instance) => {
    if (!instance) return
    const len = instances.length
    const index = instances.findIndex(inst => instance.id === inst.id)

    instances.splice(index, 1)

    if (len <= 1) return
    const removeHeight = instance.vm.height
    console.log('removeHeight', removeHeight)
    for (let i = index; i < len - 1; i++) {
        instances[i].verticalOffset =
            parseInt(instances[i].verticalOffset) - removeHeight - 16
    }
}

const tips = (optios) => {
    if (Vue.prototype.$isServer) return
    const { autoClose, ...rest } = optios
    const instance = new tipsConstruct({
        propsData: {
            ...rest
        },
        data() {
            return {
                autoClose: autoClose === undefined ? '3000' : autoClose
            }
        }
    })

    instance.id = `tips_${inId++}`
    console.log('instandce:', instance, instance === instance.$mount())
    instance.vm = instance.$mount() // 返回实例自身
    document.body.appendChild(instance.vm.$el)
    instance.vm.visible = true

    let verticalOffset = 0
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    })
    verticalOffset += 16
    instance.verticalOffset = verticalOffset
    instances.push(instance)

    instance.$on('destory', (vm) => {
        removeInstance(vm)
        document.body.removeChild(instance.vm.$el)
        instance.vm.$destroy()
    })
    instance.$on('close', () => {

        const len = instances.length
        let num
        instances.forEach((v, index) => {
            if (instance.id === v.id) {
                num = index
                return instances.splice(index, 1)
            }
        })

        if (len > 1) {
            const removeHeight = instance.vm.height
            console.log('removeHeight', removeHeight)
            for (let i = num; i < len - 1; i++) {
                instances[i].verticalOffset =
                    parseInt(instances[i].verticalOffset) - removeHeight - 16
            }
        }

        instance.vm.visible = false

        document.body.removeChild(instance.vm.$el)
        instance.vm.$destroy()
    })

    return instance.vm
}
export default tips
