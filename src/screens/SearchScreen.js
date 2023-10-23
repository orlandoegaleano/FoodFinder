import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import Yelp from "../api/Yelp";
import useResults from "../hooks/useResults";


const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState(" ");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        let myFilteredArray = results.filter((result) => {
            return result.price === price;
        });
        
        return myFilteredArray;            
    };

    return (
        <View>
            <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi()}}
            />

            <Text>Hello Search Screen</Text>
            <Text>We have found {results.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ResultsList results={filterResultsByPrice("$")} headerText="Budget Options"/>
            <ResultsList results={filterResultsByPrice("$$")} headerText="Kinda Pricey"/>    
            <ResultsList results={filterResultsByPrice("$$$")} headerText="A Whole Lotta Dollas"/>
        </View>
    )

}

const styles = StyleSheet.create({   

});

export default SearchScreen