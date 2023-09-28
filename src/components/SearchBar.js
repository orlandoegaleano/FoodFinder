import React from "react";
import { Text, View, StyleSheet, TextInput, } from "react-native";
import {Entypo} from "@expo/vector-icons";


const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Entypo name="magnifying-glass" style={styles.iconStyle}/>
            <TextInput placeholder="Search" style={styles.inputStyle}/>
        </View>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#CCCCCC",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",

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