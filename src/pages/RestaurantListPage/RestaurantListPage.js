import React from "react";
import { baseURL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";

export default function RestauranteListPage() {
    const restaurants = useRequestData([] , `${baseURL}/restaurants`)
    console.log(restaurants)


    
    return (
        <div>
            <h1>RestauranteListPage</h1>
        </div>
    )

}