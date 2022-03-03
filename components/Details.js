import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addFav } from "../actions/Fav";

function Details({ navigation, route }) {
  const { item } = route.params
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <TouchableHighlight 
          style={styles.back}
          color="black"
          title="Back"
          onPress={() => navigation.goBack()} >
            <Text>Back</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            title="⭐️"
            onPress={() => dispatch(addFav(item))}
          >
            <Text>⭐️</Text>
          </TouchableHighlight>
      </View>

      <ScrollView contentContainerStyle={styles.ScrollView}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Text>
          {item.element}
        </Text>
        <Text>
          {item.weapon}
        </Text>
      </ScrollView>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
  back: {
    padding: 5,
  }

})

export default Details