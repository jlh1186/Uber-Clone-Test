import React from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiamxoMTE4NiIsImEiOiJja3Zva3htZHAzejJhMnZueWZqeHp4a2cwIn0.N_AhiR3ap29FV9oc9F8s_Q';

const Map = (props) => {
    
    useEffect(() => {
        const map = new mapboxgl.Map({
           container: 'map',
           style: 'mapbox://styles/mapbox/streets-v11',
           center: [-99.29011, 39.39172],
           zoom: 3
         })
         //Adds Markers to Map
        if(props.pickupCoordinates){
            addToMap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map,props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates
            ],{
                padding:60 
            })
        }
       },[props.pickupCoordinates, props.dropoffCoordinates])
       
       //Function for Markers
    const addToMap = (map,coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    }


    return <Wrapper id = 'map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`