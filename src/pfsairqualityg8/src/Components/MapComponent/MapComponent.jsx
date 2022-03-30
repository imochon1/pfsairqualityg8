/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDTIodKQV1m4Z-r8OQ3N1mdD9lmcC9AGic;
import React, { Component, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from "axios";

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
const MapComponent = () => {
    const [apiData, setApiData] = useState([]);

    const getData = () => {
        axios
            .get("https://api-220201.herokuapp.com/statistics")
            .then((response) => {
                console.log("response data", response.data.data);
                setApiData(response.data.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    useEffect(() => {
        (function () {
            console.log("init useEffect");
        })();
        getData({});
    }, []);

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    //   render() {
    return (

        // Important! Always set the container height explicitly
        // 
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA92YogLOEY_i7LTMlZLTpSPCXM8mzw94Y" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            {apiData.map((element, index) => {
                console.log("element ->", element)
                return (
                    <>
                        <AnyReactComponent
                            lat={element.lat}
                            lng={element.lon}
                            text={`${element.name} ${element.value} ${element.unit}`}
                        />
                    </>
                );
            })}
            </GoogleMapReact>

            </div>


    );
}

export default MapComponent;