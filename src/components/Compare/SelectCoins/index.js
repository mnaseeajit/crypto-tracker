import React, { useEffect, useState } from "react";
import "./style.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Get100Coins } from "../../../Functions/get100Coins";

// const SelectCoins = ({crypto1, crypto2, handleCoinChange}) => {
//    const[AllCoins , setAllCoins] = useState([]);

//     const style = {
//         height: "2.5rem",
//             color : "var(--white)",
//             "& .MuiOutlinedInput-notchedOutline" : {
//                 borderColor : "var(--white)",
//             },
//             "& .MuiSvgIcon-root" : {
//                 color : "var(--white)",
//             },
//             "&:hover":{
//                 "&& fieldset" : {
//                     borderColor : "#3a80e9",
//                 },
//             },
//     }

    

//     useEffect(()=>{
//            getData();
//     },[])

//     async function getData(){
//        const myCoins = await Get100Coins();
//        if(myCoins){
//           setAllCoins(myCoins);
//        }
//     }

//     return (
//         <div className="coin-flex">
//             <p>Crypto 1</p>
//             <Select
//         sx={style}
//           value={crypto1 || ''}
//           label="Crypto 1"
//           onChange={(e)=>handleCoinChange(e,false)}
//         >
//             {AllCoins.filter((item)=>item.id != crypto2).map((coin,i)=>  <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>  )}
          
//         </Select>
     
//         <p>Crypto 2</p>
//             <Select
//         sx={style}
//           value={crypto2 || ''}
//           label="Crypto 2"
//           onChange={(e)=>handleCoinChange(e,true)}
//         >
//             {AllCoins.filter((item)=>item.id != crypto1).map((coin,i)=>  <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>  )}
          
//         </Select>
//     </div>
//   );
//    }

// export default SelectCoins;

const SelectCoins = ({crypto1, crypto2, handleCoinChange}) => {
    const [allCoins, setAllCoins] = useState([]);
    
    const style = {
        // Your style object
        height: "2.5rem",
                    color : "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline" : {
                        borderColor : "var(--white)",
                    },
                    "& .MuiSvgIcon-root" : {
                        color : "var(--white)",
                    },
                    "&:hover":{
                        "&& fieldset" : {
                            borderColor : "#3a80e9",
                        },
                    },
    };

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const myCoins = await Get100Coins();
        if (myCoins) {
            setAllCoins(myCoins);
        }
    }

    return (
        <div className="coin-flex">
            <p>Crypto 1</p>
            <Select
                sx={style}
                value={crypto1 || ''}
                label="Crypto 1"
                onChange={(e) => handleCoinChange(e, false)}
            >
                {allCoins.length > 0 && allCoins
                    .filter((item) => item.id !== crypto2)
                    .map((coin, i) => (
                        <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                    ))}
            </Select>
     
            <p>Crypto 2</p>
            <Select
                sx={style}
                value={crypto2 || ''}
                label="Crypto 2"
                onChange={(e) => handleCoinChange(e, true)}
            >
                {allCoins.length > 0 && allCoins
                    .filter((item) => item.id !== crypto1)
                    .map((coin, i) => (
                        <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                    ))}
            </Select>
        </div>
    );
}

export default SelectCoins;
