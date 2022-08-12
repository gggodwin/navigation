import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScoreScreen from './screen/score';
import GameScreen from './screen/game';
import ImagesExample from './screen/image_example'

const Stack = createNativeStackNavigator();

function DefaultScreen ({ navigation }){
    return (
      <View style={styles.nav}>
        <Text>DB Documentation</Text>
        <Text> </Text>
        <Button style ={styles.bt1} title="About DBC Canlubang"
            onPress={() => navigation.navigate('About Us')} />
        <Text> </Text>
        <Button style ={styles.bt1} title="Picture of Don Bosco"
            onPress={() => navigation.navigate('Don Bosco')} />
      </View>
    );
}


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {DefaultScreen}/>
      <Stack.Screen name = "Don Bosco" component = {ScoreScreen}/>
      <Stack.Screen name = "About Us" component = {GameScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bt1:{
    position: 'absolute',
    marginTop: 20,
    backgroundColor: 'gray',
  },

  nav:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }

});