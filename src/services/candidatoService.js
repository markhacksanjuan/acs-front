import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/candidato',
    build: 'https://acs-back.vercel.app/candidato'
}

const http = axios.create({
    baseURL: urls.dev
})

const updateCandidato = async (id, candidato) => {
    try{
        const response = await http.patch(`/${id}`, candidato)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const candidatoService = {
    updateCandidato
}
export default candidatoService