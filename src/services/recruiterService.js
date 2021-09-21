import axios from 'axios'
const urls = {
    dev: 'http://localhost:3000/recruiter',
    build: 'https://acs-back.vercel.app/recruiter'
}
const http = axios.create({
    baseURL: urls.dev
})

const updateComentario = async (comment, id) => {
        console.log(id)
        try{
            const response = await http.patch(`/${id}`, comment)
            return response.data
        }catch(e) {
            console.error(e)
        }
}
const createComentario = async (comment, idCV) => {
    comment = {...comment, idCandidato: idCV}
    try{
        const response = await http.post('/', comment)
        return response.data
    }catch(e){
        console.error(e)
    }
}
const recruiterService = {
    updateComentario,
    createComentario
}
export default recruiterService