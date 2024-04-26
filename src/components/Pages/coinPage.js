import React,{useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "../Common/Loader";
import axios from "axios";
import Header from "../Common/Header";
import { CoinObject } from "../../Functions/ConvertCoinObject";
import List from "../Dashbord/List";
import CoinInfo from "../Coin/coinInfo";
import { GetCoinData } from "../../Functions/getCoinData";
import { getCoinPrices } from "../../Functions/getCoinPrices";
import LineChart from "../Coin/LineChart";
import SelectDays from "../Coin/selectDays";
import { SettingChartData } from "../../Functions/SettingChartdata";
import TogglePriceType from "../Coin/PriceType";


const CoinPage = () => {
    const {id} = useParams();
    const[isLoading , setIsLoading] = useState(true);
    const[coinData , setCoinData] = useState();
    const [chartData , setChartData] = useState({});
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState('prices');

    useEffect(()=>{
        if(id){
            getData();
        }
    },[id])

    async function  getData(){
        const data = await GetCoinData(id);
        if(data){
            CoinObject(setCoinData , data);
            const prices = await getCoinPrices(id , days ,priceType);
            if(prices.length > 0){
                SettingChartData(setChartData, prices);
                setIsLoading(false);
            }
        }
     }

     const handleDaysChange = async (event) => {
        setIsLoading(true);
         setDays(event.target.value);
         const prices = await getCoinPrices(id , event.target.value ,priceType);
            if(prices.length > 0){
                console.log("hoo");

                SettingChartData(setChartData, prices);
                setIsLoading(false);
            }
     };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id , days, newType);
            if(prices.length > 0){
                SettingChartData(setChartData, prices);
                setIsLoading(false);
            }
  };


    return (
        <div>
            {/* <Header /> */}
            {isLoading? (<Loader /> ): 
            (
            <>
                <div className="gray-wrapper">
                 <List coin={coinData}/>
                </div>
                <div className="gray-wrapper">
                    <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                    <TogglePriceType 
                             priceType={priceType} 
                             handlePriceTypeChange={handlePriceTypeChange}
                    />
                  <LineChart chartData={chartData} 
                             priceType={priceType} 
                />
                </div>
                <CoinInfo heading={coinData.name} desc={coinData.desc}/>
            </>
            )}
            {/* {coinData ? <CoinInfo heading={coinData.name} desc={coinData.desc}/> : <Loader />} */}
             
             
        </div>
    )
}

export default CoinPage;