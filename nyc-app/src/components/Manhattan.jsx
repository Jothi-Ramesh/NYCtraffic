import React, { Component } from 'react';
import { MapContainer, GeoJSON } from "react-leaflet";
import districts from './../data/districts.json'
import "leaflet/dist/leaflet.css";
import "./Manhattan.css";

class Manhattan extends Component {

    componentDidMount() {
        console.log(districts);
    }


    state = { }

    boroughStyle = {
        fillColor: "red"
    }

    render() {
        return(
            <div>
                <h1 style={{textAlign: "center"}}>Manhattan</h1>
                <MapContainer style = {{height: "80vh"}} zoom = {10} center = {[40.776676, -73.971321]}>
                    <GeoJSON /*style={{this.boroughStyle}}*/ data={districts.features} />
                </MapContainer>

            </div>)

    }
} 

export default Manhattan;