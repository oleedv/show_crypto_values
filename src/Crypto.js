import React, {useEffect, useState} from "react";
const axios = require('axios');

const Crypto = () => {
const [apiData, setApiData] = useState()

    useEffect(() => {
        axios.get('https://api.coincap.io/v2/assets')
            .then(function (response) {
                setApiData(response.data.data)
                //console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

console.log(apiData)
    return (
        <>
            {/*{apiData && apiData.length !== 0 ? apiData[0].id : "Loading..."}*/}
            {apiData && apiData.length !== 0 ? apiData.map((card, index) => (
                <>
                    <li key={index}>
                        ID: {card.id}
                    </li>
                    <br/>
                </>
            )): "Loading.." }
        </>
    )
};

export default Crypto;
