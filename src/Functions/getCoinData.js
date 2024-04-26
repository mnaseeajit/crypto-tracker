import axios from "axios";

export const GetCoinData = (id) => {
  const mydata =   axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
    )
    .then((response)=>{
        console.log(response.data);
        return response.data
    })
    .catch((error)=>{
        console.log("err",error);
    })

    return mydata;
}