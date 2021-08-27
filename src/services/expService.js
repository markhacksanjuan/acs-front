import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/exp',
    build: 'https://acs-back.vercel.app/exp'
}
const http = axios.create({
    baseURL: urls.dev
})

const updateExp = async (id, estudio) => {
    try {
        const response = await http.patch(`/${id}`, estudio)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const expService = {
    updateExp
}
export default expService