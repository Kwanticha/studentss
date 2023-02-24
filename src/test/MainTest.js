import React, { useEffect, useState } from 'react';
import Animal from '../data/animal.json';
function MainTest() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Animal);

    }, []);

    console.log('Animal', Animal);


    function addArray(text) {
        console.log(text);
        Animal.pop(text);
        console.log('Animal', Animal);
    }
    function deleteArray(text) {
        console.log(text);
        Animal.pop(text)
        console.log('Animal', Animal);
    }
    function filterArray(text) {
        console.log(text);
        let array = Animal.filter(a => a !== text)
        console.log('Animal', Animal);
       
    }
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    deleteArray('แมว');

                }}

            >
                Click
            </button>
            <div className='row'>
                {data.map((item, index) => (
                    <div className='col' key={index}>
                        <p> {item}</p>
                    </div>
                ))}
            </div>

        </div>


    )
}





export default MainTest