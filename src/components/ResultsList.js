import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ResultsList = (props) => {
    return(
        <View>
            <Text style={styles.title}>Hello {props.headerText}</Text>
            <Text>Results: {props.results.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default ResultsList;