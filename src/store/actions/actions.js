// import model from '../../model/client-model'
// import model from '../../clientApi/userModel'
import model from 'model'
import notify from '../../conmponent/notification/function'
import { pub } from '../../clientApi/util'

const handleError = (err) => {
    // handle error
    if (err.code === 401) {
        notify({
            content: '你得先登录啊！'
        })
        pub.$emit('auth')
    }
}

export default {
    fetchTodos({ commit }) {
        commit('startLoading')
        return model.getAllTodos()
            .then(data => {
                commit('endLoading')
                console.log('------zjp----', data)

                commit('fillTodos', data)
            })
            .catch(err => {
                commit('endLoading')
                handleError(err)
            })
    },
    loginAction({ commit }, { username, password }) {
        commit('startLoading')
            // console.log('username, password', username, password)

        return new Promise((resolve, reject) => {
            model.goLogin(username, password)
                .then(data => {
                    commit('doLogin', data)
                    notify({
                        content: '登录成功'
                    })
                    resolve()
                    commit('endLoading')
                }).catch(err => {
                    handleError(err)
                    reject(err)
                    commit('endLoading')
                })
        })
    }
}
