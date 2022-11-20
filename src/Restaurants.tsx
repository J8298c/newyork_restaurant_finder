import React, { useState, useEffect } from 'react';

export function Restaurants() {
  const [foodTypes, setFoodType] = useState([]);

  useEffect(() => {
    (async function () {
      console.log('fetching food types and restaurants');
    })();
  }, []);

  return (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ minHeight: '20%', width: '100%', background: 'red' }}>
        Top Nav
      </div>
      <div style={{ minHeight: '80%', width: '100%' }}> Restaurants List</div>
    </div>
  );
}
