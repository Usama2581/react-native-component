import { StyleSheet, Text, SafeAreaView, Switch, StatusBar } from 'react-native'
import React, { useState } from 'react'

export default function Switchh() {

  const [enable, setEnable] = useState(false)
  
  return (
   <SafeAreaView>
    <StatusBar
    backgroundColor='white'
    barStyle='dark-content'
      />
      
      <Switch
        trackColor={{ true: 'black', false: 'gray' }}
        onValueChange={() => setEnable(!enable)}
        value={enable}
        thumbColor="red"  
        />
        
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({})