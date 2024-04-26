import React,{useState, useEffect} from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { ConvetNumber } from '../../../Functions/ConvertNumber';
import { Link } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const List = ({coin}) => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
        if (storedWatchlist) {
            setWatchlist(storedWatchlist);
        }
    }, []);

    const handleAddToWatchlist = (event) => {
        event.stopPropagation();
        const index = watchlist.findIndex(item => item.id === coin.id);
        if (index === -1) {
            const updatedWatchlist = [...watchlist, coin];
            setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        } else {
            const updatedWatchlist = watchlist.filter(item => item.id !== coin.id);
            setWatchlist(updatedWatchlist);
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        }
    };

    return (
        <Link to={`/coin/${coin.id}`}>
        <tr className='list-row'>
            <Tooltip title="logo" placement='bottom-start'>
            <td className='td-img'>
               <img src={coin.image} className='coin-logo' alt='coinImg'/>
            </td>
            </Tooltip>

                
                 <td className='name-col'>
                 <Tooltip title="Symbol" placement='bottom-start'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                 </Tooltip>
                 <Tooltip title="Name" placement='bottom-start'>
                    <p className='coin-name'>{coin.name}</p>
                    </Tooltip>
                 </td>
                 

            <Tooltip title="price Change" placement='bottom-start'>
            {coin.price_change_percentage_24h > 0 ? 
                    ( <div className='chip-flex'>
                    <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip td-icon'>
                        <TrendingUpRoundedIcon />
                       </div>
                     </div>   )
              :
                  (  <td className='chip-flex '>
                       <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                       <div className='icon-chip chip-red td-icon'>
                        <TrendingDownRoundedIcon />
                       </div>
                    </td> )
            }   
            </Tooltip>  
            <Tooltip title="Current price" placement='bottom-start'>
            <td> 
                <h3 className='coin-price td-right-align'
                style={{color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
            </td>
           </Tooltip>
           
            <Tooltip title="Total Volume" placement='bottom-start'>
            <td className='td-volume'>
                <p>${coin.total_volume.toLocaleString()}</p>
            </td>
            </Tooltip>
            
            <Tooltip title="Market Cap" placement='bottom-start'>
            <td className='desktop-td-mkt'>
                <p> ${coin.market_cap.toLocaleString()}</p>
            </td>
            </Tooltip>
            
            <Tooltip title="Market Cap" placement='bottom-start'>
            <td className='mobile-td-mkt'>
                <p> {ConvetNumber(coin.market_cap)}</p>
            </td>
            </Tooltip>
            {watchlist.some(item => item.id === coin.id) ? (
                        <StarRoundedIcon className='star active' onClick={(e)=>handleAddToWatchlist(e)} />
                    ) : (
                        <StarBorderRoundedIcon className='star' onClick={(e)=>handleAddToWatchlist(e)} />
                    )}
        </tr>
        </Link>
    )
}

export default List;
