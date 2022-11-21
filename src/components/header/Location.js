import React, { useState, useEffect } from "react";
import axios from "axios";

const Location = () => {
    const [state, setState] = useState({
        countryName: "",
        // ip: "",
        // countryCode: "",
        // city: "",
        // timezone: ""
    });

    const getGeoInfo = () => {
        axios.get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setState({
                    ...state,
                    countryName: data.country_name,
                    // ip: data.ip,
                    // countryCode: data.country_calling_code,
                    // city: data.city,
                    // timezone: data.timezone
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    return (
        <div>
            <p>{state.countryName}</p>
            {/* <p>IP: {state.ip}</p> */}
            {/* <p>Country Name: {state.countryName}</p> */}
            {/* <p>Country Code: {state.countryCode}</p>
      <p>City: {state.city}</p>
      <p>Timezone: {state.timezone}</p> */}
        </div>
    );
};
export default Location
