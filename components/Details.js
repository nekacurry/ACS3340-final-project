import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { borderColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
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
          title="Back"
          underlayColor= "#ffffff"
          onPress={() => navigation.goBack()} >
            <Text style={styles.backTxt}>Back</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={styles.fav}
            underlayColor= "#ffffff"
            title="⭐️"
            onPress={() => dispatch(addFav(item))}
          >
            <Text style={styles.favTxt}>⭐️</Text>
          </TouchableHighlight>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.img}
          source={{uri: item.img}}
        />
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.info}>
          Element: {item.element}
        </Text>
        <Text style={styles.info}>
          Weapon Type: {item.weapon}
        </Text>
        <Text style={styles.desc}>
          {item.description}
        </Text>
      </ScrollView>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: "flex",
  },
  back: {
    padding: 20,
  },
  title: {
    fontSize: 36
  },
  img: {
    width: 208,
    height: 248,
  },
  scrollView: {
    alignItems: "center",
    textAlign: "center",
    flexGrow: 1,
    // justifyContent: "center"
  },
  backTxt : {
    fontSize: 20,
    color: "mediumaquamarine"
  },
  fav : {
    padding: 20
  },
  favTxt : {
    fontSize: 30
  },
  info : {
    fontSize: 25
  },
  desc : {
    padding: 15,
    fontSize: 18,
    margin: 10,
    textAlign: "justify",
    borderColor: "tan",
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: "white"
  }

})

export default Details