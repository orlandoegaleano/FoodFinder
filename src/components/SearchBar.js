import React from "react";
import { Text, View, StyleSheet, TextInput, } from "react-native";
import {Entypo} from "@expo/vector-icons";


const SearchBar = (props) => {
    return (
        <View style={styles.background}>
            
            <Entypo name="magnifying-glass" style={styles.iconStyle}/>
            
            <TextInput 
            placeholder="Search" 
            style={styles.inputStyle}
            value={props.searchTerm}
            autoCapitalize="none"
            onChangeText={(newTerm) => props.onTermChange(newTerm)}
            onEndEditing={() => {props.onSearchTermSubmit()}}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#CCCCCC",
        height: 50,
        borderRadius: 5,        
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 10
    },
    inputStyle: {
        borderColor: "black",
        borderWidth: 1,
        flex: 1,
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: "center",
        marginHorizontal: 10,
    },

});
export default SearchBar