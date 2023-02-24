import React from 'react';
import { StyleSheet, Text, View,Pressable} from 'react-native';
import {Image} from 'react-native' ; 
import { useFonts } from "expo-font";



export default function FirstScreen() {
  const [loaded] = useFonts({
    samt: require('../assets/fonts/arbfonts-samt-7017.ttf'),

  });
if (!loaded) {
    return null;
}
  const pressHandler=()=>{}
  
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
       <Image source={require('../images/Logo-CQ-vector.png')} style={styles.image} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>فذكر</Text>
      </View>
      <View style={styles.container3}>
       <Image source={require('../images/salat.png')} style={styles.image2} />
      </View>
      <View style={styles.container3}>
        <Pressable  onPress={pressHandler} style={styles.button}>
          <Text style={styles.text1}>{'ابدا معنا'}</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop:10,
    justifyContent: 'center',
  },
  container1: {
    //flex: 1,
    //backgroundColor: '#00000000',
    alignItems: 'center',
    paddingTop:10,
   // justifyContent: 'center',

  },
  container2: {

   // flex: 1,
    //backgroundColor: '#00000000',
    alignItems: 'center',
    paddingTop:10,
   // justifyContent: 'center',
  },
  container3:{
   // backgroundColor: '#00000000',
    alignItems: 'center',
    paddingTop:0,
    justifyContent: 'center',
  },
  text :{
    fontFamily:'samt',
    Weight:400,
    fontSize:60,
    color:'green',
   // backgroundColor: '#00000000',
  },
  image :{
    height : 90,
    width : 90,
   // paddingTop:80,
   // flexDirection:"column",
   // alignContent:'center',
   // resizeMode:'cover',
    marginTop:0,
   // marginEnd:1,
   // marginVertical:500,
  },
  image2 :{
    height : 200,
    width : 200,
   // backgroundColor: '#00000000',
   // paddingTop:80,
   // flexDirection:"column",
   // alignContent:'center',
   // resizeMode:'cover',
    marginTop:0,
   // marginEnd:1,
   // marginVertical:500,
  },
  button:{
    width:200,
    height:75,
    backgroundColor:'#397B55',
    //borderBottomStartRadius:30,
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    
  },
  text1 :{
    //fontFamily:'samt',
    Weight:40,
    fontSize:40,
    color:'#fff',
    //alignItems:'center',
    //alignContent:'center',
    marginHorizontal:30,
   // backgroundColor: '#00000000',
  },

})