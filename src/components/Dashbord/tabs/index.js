import * as React from 'react';
// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material'; 
import Grid from '../Grid';
import "./style.css";
import List from '../List';

export default function TabsComponet({coins,isDarkMode}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color : isDarkMode ? "var(--black)": "var(--white)" ,
    width : '50vw',
    fontSize : "1.2rem",
    fontWeight : "600",
    textTransform : "capitalize"
  }

  const theme = createTheme({
    palette : {
      primary : {
        main : "#3a80e9"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="1" style={style}/>
            <Tab label="List" value="2" style={style}/>
          </TabList>
        </div>
        <TabPanel value="1">
           <div className='grid-flex'>
           {coins.map((coin,index)=>{
                  return <Grid coin={coin} key={index}/>
            })}
           </div>
        </TabPanel>
        <TabPanel value="2">
          <table className='list-table'>
            {coins.map((coin,index)=>{
                  return <List coin={coin} key={index}/>
            })}
           </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}


