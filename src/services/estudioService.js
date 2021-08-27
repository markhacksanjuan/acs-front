import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/estudio',
    build: 'https://acs-back.vercel.app/estudio'
}
const http = axios.create({
    baseURL: urls.dev
})

const updateEstudio = async (id, estudio) => {
    try {
        const response = await http.patch(`/${id}`, estudio)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const estudioService = {
    updateEstudio
}
export default estudioService