import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/auth',
    build: 'https://acs-back.vercel.app/auth'
}

const http = axios.create({
    baseURL: urls.build
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