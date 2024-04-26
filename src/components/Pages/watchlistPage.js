// import React from "react";
// import Header from "../Common/Header";

// const WatchListPage = () => {
//     return (
//         <div>
//             <Header />
//         </div>
//     )
// }

// export default WatchListPage;

import React, { useState, useEffect } from "react";
import Header from "../Common/Header";
import TabsComponet from "../Dashbord/tabs";

const WatchListPage = () => {
    // State to store the watchlist data
    const [watchlist, setWatchlist] = useState([]);

    // Load watchlist data from local storage on component mount
    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist'));
        if (storedWatchlist) {
            setWatchlist(storedWatchlist);
        }
    }, []);

    return (
        <div className="watchlist">
            {/* <Header /> */}
            <TabsComponet coins={watchlist}/>
            
        </div>
    );
}

export default WatchListPage;
