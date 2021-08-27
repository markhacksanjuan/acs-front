import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/cv',
    build: 'https://acs-back.vercel.app/cv'
}

const http = axios.create({
    baseURL: urls.dev
})

const getCV = async () => {
    try{
        const response = await http.get('/getCV')
        return response.data
    }catch(e){
        console.error(e)
    }
}

const getOneCV = async id => {
    try{
        const response = await http.get(`/cv/${id}`)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const createCV = async cv => {
    try{
        const response = await http.post('/createCV', cv)
        return response.data
    }catch(e) {
        console.error(e)
    }
}
const addFoto = async (foto, id) => {
    try{
        const response = await http.post(`/addFoto/${id}`, foto)
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const deleteCV = async id => {
    try{
        await http.delete(`/cv/${id}`)
        return
    }catch(e) {
        console.error(e)
    }
}
const updateCV = async (cv, id) => {
    try{
        await http.patch(`/cv/${id}`, cv)
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
const deleteCsv = async () => {
    try{
        const response = await http.delete('/deleteCsv')
        return response.data
    }catch(e) {
        console.error(e)
    }
}

const cvService = {
    getCV,
    getOneCV,
    createCV,
    deleteCV,
    addFoto,
    addCsv,
    updateCV,
    deleteCsv
}
export default cvService