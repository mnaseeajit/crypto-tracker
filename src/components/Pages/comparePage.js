import React, { useEffect, useState } from "react";
import SelectCoins from "../Compare/SelectCoins";
import SelectDays from "../Coin/selectDays";
import { GetCoinData } from "../../Functions/getCoinData";
import { getCoinPrices } from "../../Functions/getCoinPrices";
import { CoinObject } from "../../Functions/ConvertCoinObject";
import Loader from "../Common/Loader";
import List from "../Dashbord/List";
import CoinInfo from "../Coin/coinInfo";
import { SettingChartData } from "../../Functions/SettingChartdata";
import LineChart from "../Coin/LineChart";
import TogglePriceType from "../Coin/PriceType";

const ComparePage = ({isDarkMode}) => {
    const[crypto1 , setCrypto1] = useState('bitcoin');
    const[crypto2 , setCrypto2] = useState("ethereum");
    const[crypto1Data , setCrypto1Data] = useState();
    const[crypto2Data , setCrypto2Data] = useState();
    const [days , setDays] = useState(30);
    const[isLoading , setIsLoading] = useState(true);
    const[priceType, setPriceType] = useState('prices');
    const[chartData , setChartData] = useState({});


   async function handleDaysChange(event){
        setIsLoading(true);
       setDays(event.target.value);
       const prices1 = await getCoinPrices(crypto1 , event.target.value , priceType);
       const prices2 = await getCoinPrices(crypto2 , event.target.value , priceType);
       SettingChartData(setChartData, prices1 , prices2);
       setIsLoading(false);
    }

    useEffect(()=>{
          getData();
    },[])

    async function getData(){
        setIsLoading(true);
        const data1 = await GetCoinData(crypto1);
        const data2 = await GetCoinData(crypto2);
        if(data1){
            CoinObject(setCrypto1Data , data1);
        }
        if(data2){
            CoinObject(setCrypto2Data , data2);
        }

        if(data1 && data2){
            const prices1 = await getCoinPrices(crypto1 , days , priceType);
            const prices2 = await getCoinPrices(crypto2 , days , priceType);
            if(prices1.length > 0 && prices2.length > 0){
                SettingChartData(setChartData, prices1 , prices2);
               console.log("both prices fetch", prices1, prices2);
                setIsLoading(false);
            }
        }
    }

    const handleCoinChange = async (event, isCoin2) => {
        setIsLoading(true);
       console.log(event.target.value);
        if (isCoin2) {
            const selectedCrypto = event.target.value;
            setCrypto2(selectedCrypto);
            const data = await GetCoinData(selectedCrypto);
            if (data) {
                CoinObject(setCrypto2Data , data);
                const prices2 = await getCoinPrices(selectedCrypto, days, priceType);
            } else {
                // Handle the case where data is undefined
                console.error("Data for", selectedCrypto, "is undefined");
            }
        } else {
            const selectedCrypto = event.target.value;
            setCrypto1(selectedCrypto);
            const data = await GetCoinData(selectedCrypto);
            if (data) {
                CoinObject(setCrypto1Data , data);
                const prices1 = await getCoinPrices(selectedCrypto, days, priceType);
            } else {
                // Handle the case where data is undefined
                console.error("Data for", selectedCrypto, "is undefined");
            }
        }
    
        setIsLoading(false);
    };
    
    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true);
        setPriceType(newType);
        const prices1 = await getCoinPrices(crypto1 , days , newType);
         const prices2 = await getCoinPrices(crypto2 , days , newType);
         SettingChartData(setChartData, prices1 , prices2);
         setIsLoading(false);
      };
    

    return (
        <div >
            {/* <Header /> */}
            {
            isLoading ? (<Loader /> ): (
             <>
                <div className="coin-days-flex">
                <SelectCoins 
                  crypto1={crypto1} 
                  crypto2={crypto2} 
                  handleCoinChange={handleCoinChange}
                />
                 <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true}/>
                </div>
                <div className="gray-wrapper">
                 <List coin={crypto1Data}/>
                </div>
                <div className="gray-wrapper">
                 <List coin={crypto2Data}/>
                </div>

                <div className="gray-wrapper">
                <TogglePriceType 
                             priceType={priceType} 
                             handlePriceTypeChange={handlePriceTypeChange}
                    />
                  <LineChart chartData={chartData} 
                             priceType={priceType} 
                             multiAxis={true}
                />
                </div>

                <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
                <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/>
            </>
            )
            }
            
            
        </div>
    )
}

export default ComparePage;