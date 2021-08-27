import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/oferta',
    build: 'https://acs-back.vercel.app/oferta'
}

const http = axios.create({
    baseURL: urls.dev
})

const createOferta = async offer => {
    try{
        const response = await http.post('/createOferta', offer)
        return response.data
    }catch(e){
        console.error(e)
    }
}
const getAllOfertas = async () => {
    try{
        const response = await http.get('/getAll')
        return response.data
    }catch(e){
        console.error(e)
    }
}
const getOneOferta = async (id) => {
    try {
        const response = await http.get(`/getOne/${id}`)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const deleteOneOferta = async (id) => {
    try {
        const response = await http.delete(`/getOne/${id}`)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const ofertaService = {
    createOferta,
    getAllOfertas,
    getOneOferta,
    deleteOneOferta
}
export default ofertaService