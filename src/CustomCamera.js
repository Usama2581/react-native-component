import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function CustomCamera() {
    const [type, setType] = useState(CameraType.back)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [photoUrl, setPhotoUrl] = useState()
    const [useCamera, setUseCamera] = useState(false)
    const [showImage, setShowImage] = useState(false)
    const [showStory, setShowStory] = useState(false)
    const ref = useRef(null)

    if (!permission) {
        return <Text>No Permission</Text>
    }


    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    const takePicture = async () => {
        console.log('takePicture chala -->')
        const photo = await ref.current.takePictureAsync()
        // console.log('photo', photo)
        setPhotoUrl(photo.uri)
    }

    const showCamera = () => {
        setUseCamera(true)
        setShowStory(false)
        setShowImage(false)
    }
    const showImg = () => {
        setShowImage(true)
        setShowStory(false)
        setUseCamera(false)
    }
    const showStatus = () => {
        setShowImage(false)
        setShowStory(true)
        setUseCamera(false)
    }

    const backFromCamera = () => {
        setUseCamera(false)
    }

    const backFromImage = () => {
        setShowImage(false)
    }
    const backFromStory = () => {
        setShowStory(false)
    }
    return (
        <View style={styles.container}>
             <Button title='Show Image' onPress={showImg} ></Button>
            <Button onPress={showCamera} title=' On Camera'></Button>
            <Button title='show story' onPress={showStatus} ></Button>
            {
                useCamera ?
                    <Camera style={styles.camera} type={type} ref={ref}>
                        <View style={styles.buttonContainer1}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={toggleCameraType}>
                                <Text style={styles.text}>Flip Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={takePicture}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: 'https://icon-library.com/images/capture-icon/capture-icon-7.jpg',
                                    }} />
                            </TouchableOpacity>
                            <Button title='Back' onPress={backFromCamera} ></Button>
                        </View>
                    </Camera>
                    :
                    <View styles={styles.buttonContainer2}>

                    </View>
            }
            {
                showImage ? <View>
                    <Image source={{ uri: photoUrl }} style={styles.photo}></Image>
                    <Button title='Back' onPress={backFromImage} ></Button>
                </View>
                    :
                    <View></View>
            }
            {
                showStory ? <View>
                    <Text>Story</Text>
                    <Button title='Back' onPress={backFromStory} ></Button>
                </View>
                    : <View>
                    </View>

            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray'
    },
    camera: {
        flex: 1,
    },
    buttonContainer1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginTop: 164,
    },
    buttonContainer2: {
        flexDirection: 'row',
        marginTop: -164,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'crimson',
    },
    image: {
        width: 60,
        height: 60
    },
    photoUrl: {
        flex: 1
    },
    btn: {
        position: 'relative',
        top: '-100%'
    },
    photo: {
        width: '100%',
        height: '100%'
    }
});