import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Button, Text, TouchableOpacity } from 'react-native'
// import icon from '../assets/favicon'

function ImagePicker() {
    const [img, setImg] = useState(
        [
            'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
            'https://cdn.pixabay.com/photo/2022/07/10/19/28/mountains-7313638_960_720.jpg'
        ]
    )
    const [imgNum, setImgNum] = useState(0)
    const [noImage, setNoImage] = useState(false)

    

    const inc = () => {
        if (imgNum < img.length - 1) {
            setImgNum(imgNum + 1)
            setTimeout(() => {
                console.log("hello")
            }, 1000)
        }
        else {
            setNoImage(true)
        }
    }

    // console.log("hello")
    setInterval(() => {
        if (imgNum < img.length - 1) {
            setImgNum(imgNum + 1)
        }
        else {
            setNoImage(true)
        }
    }, 6000)
      
    
   
    return (
        <View style={styles.container}>
            {
                noImage ? <View style={styles.container}>
                    <Text>
                        Khatam!!
                    </Text>
                </View> : <View>
                    <TouchableOpacity onPress={inc} style={styles.container}>
                        <Image source={{ uri: img[imgNum] }} style={styles.image} onPress={inc} />
                    </TouchableOpacity>

                </View>


            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 500,
        height: 500
    },
    text: {
        fontSize: 20
    }
});
export default ImagePicker