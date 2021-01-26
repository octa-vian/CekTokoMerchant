import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';

const ListDetailPesanan = ({title, image, rating}) => {
  return (
    <View style={styles.page2}>
        <View style={styles.tab1}>
            <Text style={{fontSize:12}}>Botol</Text>
        </View>
        <View style={styles.tab2}>
            <Text style={{fontSize:12}}>75 ML</Text>
        </View>
        <View style={styles.tab3}>
            <Text style={{fontSize:12}}>Rp. 1000</Text>
        </View>
    </View>
  );
};

export default ListDetailPesanan;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 21,
    paddingVertical: 13,
    marginBottom: 10,
    flex: 1,
  },
  page2:{
    flexDirection:'row',
    justifyContent:'center',
    width:307,
    height:22
  },
  title: {
    fontSize: 12,
    color: 'black',
    fontWeight:'bold'
  },
  title1:{
    height:48,
    width:71
  },
  title2:{
    height:48,
    width:220,
  },
  rating: {
    fontSize: 17,
    color: 'black',
  },
  poster: {
    width: 30,
    height: 30,
  },
  tab1:{
      flex:1,
      alignItems:'center'
  },
  tab2:{
      flex:1,
      alignItems:'center'
  },
  tab3:{
      flex:1,
      alignItems:'center'
  }
});
