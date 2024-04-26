import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ThemeButton({toggleDarkMode,isDarkMode}) {

  return (
    <div>
      <Switch {...label} isDarkMode={isDarkMode} onChange={toggleDarkMode} />
    </div>
  );  
}
