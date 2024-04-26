

import React, { useState, useEffect } from 'react';
import "./style.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Grid = ({coin}) => {
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
            <div className='grid-container'>
                <div className='info-flex'>
                    <img src={coin.image} className='coin-logo' alt='coinImg'/>
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                    {watchlist.some(item => item.id === coin.id) ? (
                        <StarRoundedIcon className='star active' onClick={(e)=>handleAddToWatchlist(e)} />
                    ) : (
                        <StarBorderRoundedIcon className='star' onClick={(e)=>handleAddToWatchlist(e)} />
                    )}
                </div>
                {coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-flex'>
                        <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip'>
                            <TrendingUpRoundedIcon />
                        </div>
                    </div>
                ) : (
                    <div className='chip-flex '>
                        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip chip-red'>
                            <TrendingDownRoundedIcon />
                        </div>
                    </div>
                )}
                <div className='info-container'>
                    <h3 style={{color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
                    <p>Total Volume :{coin.total_volume.toLocaleString()}</p>
                    <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
                </div>
            </div>
        </Link>
    );
}

export default Grid;
