import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';
import { Actions } from 'react-native-router-flux';
import { colors } from '../../../Utils';
import Api from '../../../Api';
import List from '../ListBuatStruk';

const BuatStruk = () => {

    const [anime, setAnime] = useState([]);
    const listFilm = async () => {
        await Api.get('/Movies/List')
        .then(response => {
            // console.log(response.data);
            const respon = response.data;
            if (respon.Status == 'S') {
            setAnime(respon.Data);
            } else {
            alert(respon.Message);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        listFilm();
    }, []);

    const renderItem = ({item}) => (
        <View>
          {anime.map((value, index) => {
            return (
              <List
                key={'anime-' + value.id}
                title={value.judul}
                rating={value.rating}
                image={value.poster}
              />
            );
          })}
        </View>
      );

    return (
        <View style={styles.container}>
    
            <View>
                <Text style={{fontSize:12, color:'black', marginLeft:35, marginTop:16, marginBottom:16, fontWeight:'bold'}}> Struk yang akan dikonfirmasi pembeli</Text>
            </View>
            <View style={styles.headerTittle}>

                <Text style={styles.txt1}> Nama Produk </Text>
                <Text style={styles.txt2}> Jumlah </Text>
                <Text style={styles.txt3}> Harga </Text>
                <Text style={styles.txt4}> Action </Text> 

            </View>
            <View style={styles.bodyList}>
                <ScrollView>
                <View>

                <FlatList
                data={anime}
                renderItem={renderItem}
                keyExtractor={item => 'anime-' + item.id}
                />

                </View>

                <View style={{alignItems:'center'}}>
                <CardView 
                cardElevation={10}
                maxCardElevation={12}
                radius={5}
                width={351}
                marginTop={20}
                marginBottom={40}
                backgroundColor={'#00000029'}>
                    <View style={{marginTop:12, marginLeft:19, marginBottom:11}}>
                        <Text style={{fontSize:12, fontWeight:'bold', color:'#EB2843'}}> Produk Rekomendasi Penjual </Text>
                    </View>
                <View style={styles.headerTittle}>
                    <Text style={styles.txt1}> Nama Produk </Text>
                    <Text style={styles.txt2}> Jumlah </Text>
                    <Text style={styles.txt3}> Harga </Text>
                    <Text style={styles.txt4}> Action </Text> 
                </View>
                <View style={{marginBottom:10}}>

                </View>
                </CardView>
                </View>
                </ScrollView>
            </View>
            <View style={styles.bodyFooter}>
                <CardView
                cardElevation={10}
                maxCardElevation={12}
                radius={5}
                backgroundColor={'white'}>
                <View style={styles.txtHarga}>
                    <Text style={{fontWeight:'bold', marginRight:131}}> Total Harga</Text>
                    <Text style={{fontWeight:'bold'}}> Rp. 20.000</Text>
                </View>
            <View style={{alignItems:'center', marginBottom:32}}>
            <CardView 
            cardElevation={10}
            maxCardElevation={12}
            radius={5}
            height={38}
            width={324}
            backgroundColor={'#EB2843'}
            justifyContent={'center'}
            alignItems={'center'}>
                <TouchableOpacity style={{height:38, width:324, alignItems:'center', justifyContent:'center'}} onPress={() => Actions.Previewstruk()}>
                    <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}> Lanjutkan </Text>
                </TouchableOpacity>

            </CardView>
            </View>
            </CardView>
            </View>
        </View>
    );
};

export default BuatStruk;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:colors.bglayout
    },
    header:{
        height:50,
    },
    headerTittle:{
        height:37,
        backgroundColor:'black',
        flexDirection:'row',
        alignItems:'center',
    },
    bodyList:{
        height:380,
    },
    bodyFooter:{
        height:108,
    },
    txt1:{
        flex:1.4,
        fontSize:10,
        color:'white',
        textAlign:'center',

    },
    txt2:{
        flex:1.2,
        fontSize:10,
        color:'white',
        textAlign:'center',
    },
    txt3:{
        flex:1,
        fontSize:10,
        color:'white',
        textAlign:'center',
    },
    txt4:{
        flex:0.4,
        fontSize:10,
        color:'white',
        textAlign:'center',
        marginRight:18
    },
    txtHarga:{
        height:21,
        marginTop:11,
        marginLeft:42,
        marginBottom:13,
        flexDirection:'row'
    },
    bodyList1:{
        height:125
    }
})