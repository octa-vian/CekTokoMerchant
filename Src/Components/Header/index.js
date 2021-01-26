import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors} from '../../Utils'
import {Actions} from 'react-native-router-flux';

const Header = ({title}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress = {() => Actions.MainHome()}>
      <Image source={require('../../Assets/Icon/back.png')} style={styles.img} /> 
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    marginTop:20,
    height:73,
    fontSize:14,
    alignItems:'center',
    paddingLeft:26,
    flexDirection:'row',
    width:375,
    backgroundColor: colors.bgPrimary,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  img:{
    height:14,
    width:20,
    marginRight:26
  }
});
