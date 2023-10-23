import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, } from "react-native";
import Yelp from "../api/Yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try{
            const response = await Yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "New Orleans"
                }
            });
            setResults(response.data.businesses);
        } catch(e){
            console.log(e);
            setErrorMessage("Oops, something went wrong!");
        }
    }

    useEffect( () => {
        searchApi("pizza");
    }, []
    )

    return [searchApi, results, errorMessage];
};