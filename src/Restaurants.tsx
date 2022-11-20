import React, { useState, useEffect } from 'react';
import { Search, Dropdown } from 'semantic-ui-react';

export function Restaurants() {
  const [foodTypes, setFoodType] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState('');
  useEffect(() => {
    (async function () {
      console.log('fetching food types and restaurants');
    })();
  }, []);

  const options = [
    {
      key: 'american',
      text: 'American',
      value: 'american',
    },
    {
      key: 'italian',
      text: 'Italian',
      value: 'italian',
    },
  ];

  const handleOptionChange = (e: any, data: any) => {
    setSelectedFoodType(data.value);
  };

  return (
    <div
      style={{
        minWidth: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          border: '1px solid',
          minHeight: '20%',
          width: '100%',
          display: 'flex',
          gap: 100,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: 40,
        }}
      >
        <Dropdown
          options={options}
          placeholder='Pick your food type'
          onChange={handleOptionChange}
        />
        <Search placeholder='Search Restaurants' />
      </div>
      <div style={{ minHeight: '80%', width: '100%' }}> Restaurants List</div>
    </div>
  );
}
