import React, {useState} from "react";
import { Text, View, StyleSheet, } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";


const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState(" ");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async () => {
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


    return (
        <View>
            <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {searchApi()}}
            />

            <Text>Hello Search Screen</Text>
            <Text>Am I working? {searchTerm} </Text>
            <Text>We have found {results.length}</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}            
        </View>
    )

}

const styles = StyleSheet.create({   

});
export default SearchScreen