import axios from "axios"

let data: any
let isLoading : boolean = true
let error:any = null

const GetData = async(url:string) => {

    try {
        data = await axios.get(url,{
          headers:{
            Accept:'application/json'
          }
        })
        isLoading = false
        error = null
        data= await data.data
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log('error message: ', err)
          error = err
        } else {
          console.log('unexpected error: ', err)
          error = 'An unexpected error occured'
        }
      }
      return { data, isLoading, error };
}



export default GetData;