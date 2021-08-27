import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/otrosDatos',
    build: 'https://acs-back.vercel.app/otrosDatos'
}
const http = axios.create({
    baseURL: urls.dev
})

const updateOtrosDatos = async (id, estudio) => {
    try {
        const response = await http.patch(`/${id}`, estudio)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const otrosDatosService = {
    updateOtrosDatos
}
export default otrosDatosService