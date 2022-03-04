import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Touch from './Touch';


export default function Favorites({ navigation }) {
  const favList = useSelector(state => state.favList)

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>My Faves</Text> */}
      <FlatList
        data={favList}
        renderItem={({ item, index }) => {
          return (
            <Touch 
              title={item.name}
              img={item.img}
              showDetails={() => navigation.navigate("Details", {item})}
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
    alignItems: 'center',
    width: "100%" 
  },

})