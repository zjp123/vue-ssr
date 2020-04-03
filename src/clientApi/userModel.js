import axios from 'axios'
import { createError } from './util'

const createRequest = axios.create({
    // baseURL: process.env.VUE_ENV === 'server' ? 'http://127.0.0.1:3333/' : '/'
    baseURL: '/'
})

const handleRequest = (request) => {
    return new Promise((resolve, reject) => {
        request.then(resp => {
            const data = resp.data
            if (!data) {
                return reject(createError(400, 'no data'))
            }
            if (!data.success) {
                return reject(createError(400, data.message))
            }
            resolve(data.data)
        }).catch(err => {
            const resp = err.response
            console.log('---------------', resp)
            if (resp.status === 401) {
                reject(createError(401, 'need auth'))
            }
        })
    })
}

export default {
    goLogin(username, password) {
        console.log('username, password', username, password)

        return handleRequest(createRequest.post('/user/login', { username, password }))
    },
    getAllTodos() {
        return handleRequest(createRequest.get('/api/todos'))
    }
}
