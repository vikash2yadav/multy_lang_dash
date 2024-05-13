import React, { useEffect, useState } from 'react'
import "./selector.scss";
import { FormControl, MenuItem, Select } from '@mui/joy';

const Selector = ({ options, onChange }) => {
  const [lang, setLang ]= useState('');

  useEffect(()=>{
    let data = localStorage.getItem('lang');
    setLang(data)
    console.log(lang)
  }, [])

  return (
    <div className='lang_box'>
      <FormControl sx={{ m: 1, minWidth: 50 }}>
        <Select defaultValue="" id="grouped-select" label="Grouping" 
        onChange={(event)=>{
            alert(event)
        }}>
          { options &&
            options.map((item) => (
             <MenuItem value={item.value}>{item.label}</MenuItem>
            ))  
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default Selector