import React, {useState} from "react";
import { Text, View, StyleSheet, } from "react-native";
import SearchBar from "../components/SearchBar";


const SearchScreen = () => {

    const [searchTerm, setSearchTerm] = useState(" ");


    return (
        <View>
            <SearchBar 
            searchTerm={searchTerm} 
            onTermChange={(newTerm) => setSearchTerm(newTerm)}
            onSearchTermSubmit={() => {console.log(searchTerm);}}
            />

            <Text>Hello Search Screen</Text>
            <Text>Am I working? {searchTerm} </Text>
        </View>
    )

}

const styles = StyleSheet.create({   

});
export default SearchScreen