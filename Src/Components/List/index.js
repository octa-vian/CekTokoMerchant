import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';

const List = ({title, image, rating}) => {
  return (
    <CardView 
        cardElevation={4}
        maxCardElevation={12}
        radius={10}
        height={103}
        width={324}
        backgroundColor={'#ffffff'}
        justifyContent={'center'}
        marginTop={17}
        marginLeft={25}
        marginRight={25}>
    <TouchableOpacity style={{ height:100}} onPress={() => Actions.Detailpesanan()}>
    <View style={{alignItems:'flex-end', marginTop:6, marginRight:22}}>
    <Text style={{fontSize:9}}> 20 Des 2021, 18.00 </Text>
    </View>
    
    <View style={styles.page}>
      <View style={styles.page2}>
        <View style={styles.title1}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>No. Pesanan</Text>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Pengiriman</Text>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Jam</Text>
        </View>
        <View style={styles.title2}>
        <Text style={{fontSize:12, fontWeight:'bold'}}>  : P002</Text>
        <Text style={{fontSize:12, fontWeight:'bold'}}>  : 28 Desember 2021</Text>
        <Text style={{fontSize:12, fontWeight:'bold'}}>  : 08.00-19.00</Text>
        </View>
      </View>
      {/* <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>{rating}</Text> */}
      {/* <Image source={{uri: image}} style={styles.poster} /> */}
    </View>
    </TouchableOpacity>
    </CardView>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 21,
    paddingVertical: 13,
    marginBottom: 10,
    flex: 1,
  },
  page2:{
    flexDirection:'row'
  },
  title: {
    fontSize: 12,
    color: 'black',
    fontWeight:'bold'
  },
  title1:{
    height:48,
    width:80
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
});
