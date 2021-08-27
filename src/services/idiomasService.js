import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/idioma',
    build: 'https://acs-back.vercel.app/idioma'
}
const http = axios.create({
    baseURL: urls.dev
})

const updateIdiomas = async (id, estudio) => {
    try {
        const response = await http.patch(`/${id}`, estudio)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const idiomasService = {
    updateIdiomas
}
export default idiomasService