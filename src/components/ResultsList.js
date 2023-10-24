import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultsDetail from "./ResultsDetail";
import {withNavigation} from "react-navigation";

const ResultsList = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.headerText}</Text>
            <Text>Results: {props.results.length}</Text>
            <FlatList
                horizontal={true}
                data={props.results}
                keyExtractor = {(result) => {return result.id}}
                showsHorizontalScrollIndicator = {false}

                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {props.navigation.navigate("ResultsShow")}}>
                            <ResultsDetail result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 15,    
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default withNavigation(ResultsList);