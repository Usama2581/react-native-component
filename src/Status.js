import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Status () {
  const [image, setImage] = useState([])
  const [pickImg, setPickImg] = useState(true)


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setPickImg(false)
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />
      {
        pickImg ? 
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        :
        <Button title='hello'></Button>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  img: 
    { width: 200, height: 200 }
  
})