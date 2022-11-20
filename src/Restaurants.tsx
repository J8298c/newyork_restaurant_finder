import React, { useState, useEffect } from 'react';
import { Search, Dropdown, Grid, Card } from 'semantic-ui-react';

export function Restaurants() {
  const [foodTypes, setFoodType] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedFoodType, setSelectedFoodType] = useState('');
  useEffect(() => {
    (async function () {
      try {
        const data = await fetch(
          'http://localhost:3001/api/restaurants/get_restaurants/11420'
        ).then((res) => res.json());
        setRestaurants(data.restaurants);

        const foodTypesData = await fetch(
          'http://localhost:3001/api/attrs/get_food_types'
        ).then((res) => res.json());
        console.log(foodTypesData);
        const cuisines = foodTypesData.food_types.map((type: string) => ({
          key: type,
          value: type,
          text: type,
        }));
        setFoodType(cuisines);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleOptionChange = (e: any, data: any) => {
    setSelectedFoodType(data.value);
    console.log(data.value);
    console.log(selectedFoodType, 'the selected food type');
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
        {foodTypes.length ? (
          <Dropdown
            options={foodTypes}
            placeholder='Pick your food type'
            onChange={handleOptionChange}
          />
        ) : null}
        <Search placeholder='Search Restaurants' />
      </div>
      <div style={{ minHeight: '80%', width: '100%' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            padding: 15,
          }}
        >
          {restaurants.length
            ? restaurants.map((restaurant: any) => (
                <Card
                  style={{ height: 50 }}
                  header={restaurant.name}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
