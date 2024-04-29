import React, { useEffect } from "react";
import TabsComponet from "../Dashbord/tabs";
import { useState } from "react";
import Search from "../Dashbord/Search";
import PaginationComponet from "../Dashbord/Pagination";
import Loader from "../Common/Loader";
import BackToTop from "../Common/BackToTop";
import { Get100Coins } from "../../Functions/get100Coins";


const DashbordPage = ({isDarkMode}) => {

    const[coins , setCoin] = useState([]);
    const[PaginatedCoin , setPaginatedCoin] = useState([]);
    const[search , setSearch] = useState("");
    const[page , setpage] = useState(1);
    const[isLoading , setIsLoading] = useState(true);

    const HandlePageChange = (event, value) => {
        setpage(value);
        var PreviousIndex = (value -1 ) * 10;
        setPaginatedCoin(coins.slice(PreviousIndex, PreviousIndex + 10));
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    var onFilterCoin = coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
    ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(()=>{
           getData();
           
    },[])

    const getData = async () => {
        const myCoins = await Get100Coins();
        if(myCoins){
            setCoin(myCoins);
            setPaginatedCoin(myCoins.slice(0,10));
            setIsLoading(false);
        }
        
    }

    return (
        <div>
            {/* <Header /> */}
            <BackToTop />
            {isLoading? (<Loader />) : (
                <>
                 <Search search={search} onSearchChange={onSearchChange}/>
                 <TabsComponet coins={search? onFilterCoin : PaginatedCoin} isDarkMode={isDarkMode}/>
                 {!search &&  <PaginationComponet page={page} HandlePageChange={HandlePageChange} isDarkMode={isDarkMode}/>}
                </>
            )}
            
            
        </div>
    )
}

export default DashbordPage;