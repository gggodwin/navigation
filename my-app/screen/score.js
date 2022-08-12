
import {Text, View, Button, StyleSheet,Image } from 'react-native';
import React, { useState } from 'react'
import ImagesExample1 from './image_example1'

const ScoreScreen = ({navigation}) => {
  const [num, changeNum] = useState(0);

  const incrementNum = () => {
    changeNum(num+1)
  }
  
  const decrementNum = () => {
    if (num-1 < 0){
      alert(`you can't decrease than 0`)
    }else{
      changeNum(num-1)
    }

  }

  return (
    <>
      <View style = {styles.container}>
      <Text style = {styles.title}>John Melchior Bosco</Text>
      <Text> </Text>
      <ImagesExample1/>
      <Text> </Text>
      <Text style = {styles.des}> </Text>
      <button onClick={incrementNum}>Love {num}</button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignContent: 'center',
      justifyContent: 'center',
      position: 'relative',
      alignItems: 'center'
  },

  title:{
    fontSize: 30,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },

  des:{
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignContent: 'center'
  },

  text:{
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
  }
})

export default ScoreScreen;