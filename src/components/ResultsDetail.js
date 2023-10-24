import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ResultsDetail = (props) => {
    return(
        <View style={styles.container}>
            <Image 
            style = {styles.image}
            source = {{uri: props.result.image_url}}
            />
            <Text style={styles.name}>{props.result.name}</Text>
            <Text>{props.result.rating} Stars, {props.result.review_count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginRight: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },    
    image: {
        width: 250,
        height: 250,
        borderRadius: 4,        
    },
    name: {
        fontWeight: "bold"

    },
});

export default ResultsDetail; 