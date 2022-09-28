import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import CustomCamera from './src/CustomCamera';
// import ImagePicker from './src/ImagePicker';
// import Switchh from './src/Switch';
// import Flat from './src/Flat';
import Status from './src/Status';




export default function App() {
 

  return (
    <View style={StyleSheet.containet}>
      {/* <CustomCamera /> */}
      <Status />
      

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


