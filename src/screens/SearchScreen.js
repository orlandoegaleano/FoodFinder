import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";


const SearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = useState(" ");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        let myFilteredArray = results.filter((result) => {
            return result.price === price;
        });
        
        return myFilteredArray;            
    };

    return (
        <View style= {styles.container}>
            <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi(searchTerm)}}
            />           
            
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList results={filterResultsByPrice("$")} headerText="Budget Options"/>
                <ResultsList results={filterResultsByPrice("$$")} headerText="Kinda Pricey"/>    
                <ResultsList results={filterResultsByPrice("$$$")} headerText="A Whole Lotta Dollas"/>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({ 
    container:{
        marginLeft: 10,
        flex: 1,
    },  

});

export default SearchScreen