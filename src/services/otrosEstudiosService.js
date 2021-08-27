import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/estudio2',
    build: 'https://acs-back.vercel.app/estudio2'
}
const http = axios.create({
    baseURL: urls.build
})

const updateOtrosEstudios = async (id, estudio) => {
    try {
        const response = await http.patch(`/${id}`, estudio)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const otrosEstudiosService = {
    updateOtrosEstudios
}
export default otrosEstudiosService