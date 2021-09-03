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
        if(response.data.token){
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.token))
        }
        return response.data
    }catch(e) {

    }
}

const authService = {
    login
}
export default authService