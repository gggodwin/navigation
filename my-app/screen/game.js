
import {Text, View, Button, StyleSheet,Image } from 'react-native';
import React, { useState } from 'react'
import ImagesExample from './image_example'

const GameScreen = ({navigation}) => {
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
      <Text style = {styles.title}>DON BOSCO COLLEGE </Text>
      <Text> </Text>
      <ImagesExample/>
      <Text> </Text>
      <Text style = {styles.des}>Don Bosco College (DBC) – Canlubang is a private Catholic school in Calamba, Laguna. The school started out in 1963 as a seminary that had the mission of producing qualified religious, who will tend to the Don Bosco institutions in the Philippines. Four years later, the seminary opened its first government-recognized degree program: Bachelor of Science in Education. In 1972, it started the Manpower Training Department, now known as the Technical Vocational Education and Training (TVET) Center. In 1994, the college started accepting non-seminarian students; four years later, it opened to high school students.  </Text>
      <button onClick={incrementNum}>Love {num}</button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

    button:{
        backgroundColor: 'pink'
    },  

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

export default GameScreen