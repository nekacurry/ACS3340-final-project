import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'


function Favorites() {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-star-outline" size={32} />
      <Text>You have no Faves yet!</Text>
    </View>
  );
}

export default Favorites

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

})