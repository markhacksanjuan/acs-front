import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/user',
    build: 'https://acs-back.vercel.app/user'
}

const http = axios.create({
    baseURL: urls.dev
})

const getUsers = async () => {
    try{
        const response = await http.get('/getUsers')
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const createUser = async (data) => {
    try{
        const response = await http.post('/createUser', data)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const getOneUser = async (id) => {
    try{
        const response = await http.get(`/oneUser/${id}`)
        console.log(response)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const updateUser = async (id, user) => {
    try{
        const response = await http.patch(`/oneUser/${id}`, user)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const deleteUser = async id => {
    try{
        const response = await http.delete(`/oneUser/${id}`)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const userService = {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser
}
export default userService