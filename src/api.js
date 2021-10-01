import axios from 'axios';


export const getDetails = (num) =>{
    return axios.get(`https://sls.magzter.com/maglists/prod/magazine-filter?storeID=1&categoryID=BS&page=${num}&ver=3`)
}

export const postDetails = (payload) =>{
    console.log('inside api')
    return axios.post("https://reqres.in/",payload)
}