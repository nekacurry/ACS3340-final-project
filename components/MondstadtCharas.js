import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import data from '../characters.json'
import Touch from './Touch';


export default function MondstadtCharas({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={data.filter(chara => chara.city.includes("Mondstadt"))}
        renderItem={({ item, index }) => {

          return (
            <Touch 
              title={item.name}
              img={item.img}
              // stars={item.rarity}
              showDetails={() => navigation.navigate("Details", { item })}
            />
          )
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  list: {
    flex: 1,
    width: "100%"
  }

})