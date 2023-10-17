import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen"; 




const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);


//API KEY: 4hxfkQDbLK8Yv7iBTDYqDZQCfA16qyXfHiKnL05lDjA447JiQDDA-_0vQW9oBnLxFq5tDp0c9iGy3ZD-b_HRG7IKbgE0M2ml4KSSOMc0T3UROhM0pkjF8CgIifsSZXYx
//GET https://api.yelp.com/v3/businesses/search
//GET https://api.yelp.com/v3/businesses/{id}