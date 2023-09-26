import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//API KEY: 4hxfkQDbLK8Yv7iBTDYqDZQCfA16qyXfHiKnL05lDjA447JiQDDA-_0vQW9oBnLxFq5tDp0c9iGy3ZD-b_HRG7IKbgE0M2ml4KSSOMc0T3UROhM0pkjF8CgIifsSZXYx
//GET https://api.yelp.com/v3/businesses/search