import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/oferta',
    build: 'https://acs-back.vercel.app/oferta'
}

const http = axios.create({
    baseURL: urls.build
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

const ofertaService = {
    createOferta,
    getAllOfertas
}
export default ofertaService