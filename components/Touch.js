import React from "react";
import { TouchableHighlight, Text, StyleSheet, Image, View } from "react-native";

function Touch({ title, img, showDetails }) {
  return (
    <TouchableHighlight
      style={styles.touch}
      onPress={() => showDetails()}
      underlayColor="#ffffff"
    >
      <View style={styles.view}>
        <Image 
          style={styles.img}
          source={{uri: `${img}`}}
        />
        <Text style={styles.text}>{title}</Text>
        {/* <Text>{stars}</Text> */}
      </View>
    </TouchableHighlight>
  )
}

export default Touch

const styles = StyleSheet.create({
  touch: {
    padding: 20
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
    
  },
  img: {
    width: 208,
    height: 248,
  },
  view: {
    alignItems: "center"
  }
})