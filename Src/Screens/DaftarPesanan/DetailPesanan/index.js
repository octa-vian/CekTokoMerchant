import React, { useEffect, useState }from 'react'
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native'
import {Actions} from 'react-native-router-flux';
import Header from '../../../Components/Header';
import { colors } from '../../../Utils';
import CardView from 'react-native-cardview';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Api from '../../../Api';
import List from '../ListDetailPesanan';
import {ProgressDialog} from 'react-native-simple-dialogs';


const DetailPesanan = () => {
    const [anime, setAnime] = useState([]);
    const [Load, setLoading] = useState();
    const listFilm = async () => {
        await Api.get('/Movies/List')
        .then(response => {
            // console.log(response.data);
            const respon = response.data;
            if (respon.Status == 'S') {
                setLoading(false);
            setAnime(respon.Data);
            } else {
            alert(respon.Message);
            setLoading(false);
            }
        })
        .catch(error => {
            console.log(error);
        });
    };
    useEffect(() => {
        setLoading(true);
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
            {/* <Header title="Detail Pesanan"/> */}

            <View style={styles.body1}>
                <View style={styles.bd1}>
                    <Text style={{fontSize:10, color:'black', fontWeight:'bold'}}>No. Pesanan</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>Nama</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>Alamat</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>Waktu Pengiriman</Text>
                </View>
                <View style={styles.bd2}>
                <Text style={{fontSize:10, color:'black', fontWeight:'bold'}}>: P002</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>: Testing1</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>: Jangli dalam no 29J</Text>
                    <Text style={{fontSize:10, color:'black', marginTop:4, fontWeight:'bold'}}>: Kamis 18 Desember 2021, 08.00</Text>
                </View>
            </View>

            <View style={{alignItems:'center'}}>
            <CardView 
            // height={206}
            // width={329}
            backgroundColor="white"
            maxCardElevation={90}
            cardElevation={50}
            radius={4}
            marginRight={23}
            marginLeft={23}
            marginTop={24}>
            
            <View>
            <Text style={{fontSize:14, marginTop:14, marginLeft:24, fontWeight:'bold', color:'#EB2843'}}> 
            Pesanan Baru 
            </Text>
            <View style={{ height:85, width:307, marginLeft:13, marginRight:13, marginTop:20}}>
            <FlatList
                data={anime}
                renderItem={renderItem}
                keyExtractor={item => 'anime-' + item.id}
                />
            </View>
            </View>

            <View style={{borderBottomColor: '#D9D9D9',
                    borderBottomWidth: 1,
                    marginTop:8,
                    marginRight:22,
                    marginLeft:22}}>

            </View>
            
            <View style={styles.bodyFooter}>
                <View style={styles.txt1}>
                    <Text style={{fontSize:12, fontWeight:'bold'}}>
                        Total Harga
                    </Text>
                </View>
                <View style={styles.txt2}>
                <Text style={{fontSize:12, fontWeight:'bold'}}>
                        Rp. 12000
                    </Text>
                </View>
            </View>
            </CardView>
            </View>

            <Text style={{marginTop:26, marginLeft:43, fontSize:12, fontWeight:'bold'}}> Catatan Pembeli</Text>

            <View
                style={{
                    borderBottomColor: '#D9D9D9',
                    borderBottomWidth: 1,
                    marginTop:37,
                    marginRight:25,
                    marginLeft:25
                }}
                />
                <View style={styles.bodyBtn}>

                    <View style={styles.btn1}>
                        <CardView
                        radius={20}
                        width={133}
                        height={33}
                        backgroundColor="#CECECE"
                        maxCardElevation={10}
                        cardElevation={10}
                        radius={5}>
                        <TouchableOpacity style={{height:33, width:133, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold', color:'black', fontSize:12}}> TOLAK </Text>
                        </TouchableOpacity>
                        </CardView>
                    </View>
                    <View style={styles.btn2}>
                    <CardView
                        radius={20}
                        width={133}
                        height={33}
                        backgroundColor="#EB2843"
                        maxCardElevation={10}
                        cardElevation={10}
                        radius={5}>
                        <TouchableOpacity style={{height:33, width:133, alignItems:'center', justifyContent:'center'}} onPress={() => Actions.Buatstruk()}>
                            <Text style={{fontWeight:'bold', color:'white', fontSize:12}}> PROSES </Text>
                        </TouchableOpacity>
                        </CardView>
                    </View>

                </View>

                <ProgressDialog 
                visible={Load}
                message={"Sedang mengambil data.."}
                messageStyle={{fontWeight:'bold', fontSize:14, color:'gray'}}>
                    <View style={{ flex:1,backgroundColor:"#00000020", justifyContent:"center",alignItems:"center"}}>
                        <View style={{backgroundColor:"white",padding:10,borderRadius:5, width:"80%", alignItems:"center"}}>
                        <Text style={{alignItems:'center'}}>Loading...</Text>
                        <ActivityIndicator size="large" color="#f35588"/>
                        </View>
                    </View>
                </ProgressDialog>
                
            </View>

    );
};

export default DetailPesanan;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.bglayout
    },
    body1:{
        flexDirection:'row',
        height:104,
    },
    bodyFooter:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:21
    },
    bodyBtn:{
        marginTop:76,
        marginLeft:41,
        marginRight:41,
        marginBottom:40,
        flexDirection:'row'
    
    },
    bd1:{
        height:82,
        width:101,
        marginTop:24,
        marginLeft:41,
        marginRight:27,
    },
    bd2:{
        height:104,
        width:179,
        marginRight:27,
        marginTop:24,
    },
    txt1:{
        marginTop:20,
        marginLeft:24,
        flex:1
        
    },
    txt2:{
        marginTop:20,
        marginLeft:24,
        flex:1,
        alignItems:'center'
    },
    btn1:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:22
    },btn2:{
        alignItems:'center',
        justifyContent:'center'
    }

})
