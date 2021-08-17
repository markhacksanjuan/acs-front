import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/auth'
}

const http = axios.create({
    baseURL: urls.dev
})

const login = async (user) => {
    try{
        const response = await http.post('/login', user)
        return response.data
    }catch(e) {

    }
}

const authService = {
    login
}
export default authService