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
const updateOneOferta = async (id, data) => {
    try{
        const response = await http.patch(`/getOne/${id}`, data)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const addCsv = async csv => {
    try{
        const response = await http.post('/addCsv', csv)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const addXls = async xls => {
    try {
        const response = await http.post('/addXls', xls)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const ofertaService = {
    createOferta,
    getAllOfertas,
    getOneOferta,
    deleteOneOferta,
    addCsv,
    updateOneOferta,
    addXls
}
export default ofertaService