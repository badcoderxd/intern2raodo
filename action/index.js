import axios from 'axios';

//const URL = '/api/v2/entries/en-us';
const headers = {
	            'app_id':'b265fa05',
                'app_key':'07b0a7f3468a105d9fd9ae9a09e322a1'
                }

export function wordListAll(){
    const request =  axios.get('/api/v2/entries/en-us/home',{headers})
                     .then(response => response.data.results)

         return{
             type:'GET_WORDS_ALL',
             payload:request
         }
}

export function wordadd(){
    const request =  axios.get('/api/v2/entries/en-us/RAM',{headers})
                     .then(response => response.data.results)
                     

         return{
             type:'GET_WORDS_ALL',
             payload:request
         }
}

export function wordList(key){
    const request = axios.get(`/api/v2/entries/en-us/${key}`,{headers})
                     .then(response => response.data.results)
               
         return{
             type:'GET_WORDS',
             payload:request
         }
}