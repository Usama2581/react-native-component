import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

export default function Flat() {

  const names = [
    {
      name: 'Burger O Clock',
      src: require('../assets/burger.jpg')
    },
    {
      name: 'Mehran Ice-cream',
      src: require('../assets/mehran.jpg')
    },
    {
      name: 'Pizza point',
      src: require('../assets/pizza.jpg')
    },
    {
      name: 'Pizza point',
      src: require('../assets/veg.png')
    },
    {
      name: 'Pizza point',
      src: require('../assets/cheese.jpg')
    },

  ]


  return (
    <View style={styles.container}>
      {/* <FlatList
      horizontal
      // numColumns={2}
        data={names}
        renderItem={({ item }) => {
          return (
            <View style={styles.flat}>
              <Image source={item.src} style={styles.img} ></Image>
              <Text style={styles.txt}>{item.name}</Text>
            </View>
          )
        }}
      /> */}
      <FlatList
       data={names}
        renderItem={({ item }) => {
          return (
            <View style={styles.flat}>
              <Image source={item.src} style={styles.img} ></Image>
              <Text>{item.name}</Text>
            </View>
          )
        }}
        horizontal
          />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  flat: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40
  },
  img: {
    width: 250,
    height: 200
  },
  txt: {
    fontSize: 16
  }
})