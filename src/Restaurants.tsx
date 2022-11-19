import React, {useState, useEffect} from 'react';

export function Restaurants() {

    const [foodTypes, setFoodType] = useState([])

    useEffect(() => {
        (
            async function() {
                console.log('fetching food types and restaurants')
            }
        )()
    }, [])

    return (
        <div style={{display: "flex", flexDirection: 'row', minWidth: '100vw', minHeight: "100vh"}}>
            <div style={{width: '25%', background: 'blue'}}></div>
            <div style={{width: '75%', background: 'red'}}></div>
        </div>
    )
}
