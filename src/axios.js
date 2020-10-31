import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://facebook-clone-dextar.herokuapp.com'
})

export default instance

