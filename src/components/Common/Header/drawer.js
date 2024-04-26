
import {useState} from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from "../Button";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {Link} from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  
    const[open , setOpen] = useState(false);
  

  return (
    <div>
      
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className="link"/></IconButton>
          <SwipeableDrawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
           
          >
            <div className="drawer-div">
              <Link to="/">
                    <p className="link">Home</p>
                </Link>
              <Link to="/compare">
                    <p className="link">Compare</p>
                </Link>
              <Link to="/watchlist">
                    <p className="link">WatchList</p>
                </Link>
              <Link to="/dashbord">
                    <Button text="Dashbord" 
                            outline={true}
                            onClick={()=>console.log('btn clicked')}/>
                </Link>
            </div>
          </SwipeableDrawer>
       
     
    </div>
  );
}