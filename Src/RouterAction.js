import React, {useEffect, useState} from 'react';
import {
StyleSheet,
View,
Text,
Image,
Button,
Alert,
Dimensions} from 'react-native';
import {Scene, Router, Tabs, ActionConst, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RepoUtil from './Helper/RepoUtil';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SwitchButton } from './Button';
import { colors } from './Utils';
import CardView from 'react-native-cardview';
import {Card} from 'react-native-card-view';

const { height } = Dimensions.get('window');
 
const box_count = 3;
const box_height = height / box_count;


const RouterAction = () => {
//   const iconHome = () => <Icon color="#f53d3d" name="home" size={25} />;
//   const iconAdmin = () => <Icon color="#f53d3d" name="atom" size={25} />;
//   const iconProfile = () => <Icon color="#f53d3d" name="user-md" size={25} />;

  return (
    <View style={{backgroundColor:'red'}}>

        <TouchableOpacity onPress ={() => Actions.Profile()} style={{height:24, width:24, alignItems:'center', marginTop:19, marginRight:17, marginBottom:10}}>
        {/* <Image source = {require('./Assets/Icon/notif.png')} style={{height:24, width:24, alignItems:'center'}}/> */}
        <Text style={{height:20, color:'white', width:300, fontSize:18}}> Heiiii </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress ={() => Actions.Profile()} style={{alignItems:'center', height:24, width:24, justifyContent:'center', marginTop:19, marginBottom:10, marginRight:35 }}>
        <Image source = {require('./Assets/Icon/setting.png')} style={{height:24, width:24, alignItems:'center'}}>
        </Image>
         </TouchableOpacity>
        

      </View>
  );
};

export default RouterAction;

const styles = StyleSheet.create({
    
  Container:{
    
    marginTop:20,
    backgroundColor:colors.bglayout
  },

  ContainerBody:{
    
  },

  Header:{
    height:50,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    backgroundColor:colors.bgPrimary
  },
  Body:{
    height:180,
  }, 
  bodyColom:{
    flexDirection:'column',
    height:140,
    backgroundColor:colors.bgPrimary
  }, 
  bodyRow:{
    flexDirection:'row',
    height:140
  },
  body1:{
    width:130,
  },
  body2:{
    width:180,
    
  },
  body3:{
    width:40,
  },
  bd:{
    width:20,
    alignItems:'center'
  },
  bd1:{
    width:20,
    alignItems:'center',
  },
  bodyRow2:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:colors.bgPrimary,
    paddingRight:24,
    height:40
  },
  rowBodyCard:{
    flexDirection:'row',
    alignItems:'center'
  }

});
