import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CardView from 'react-native-cardview'
import { colors } from '../../../Utils'

const PreviewStruk = () => {
    return (
        <View style={styles.container}>
            <ScrollView>

            <View style={{alignItems:'center', marginTop:31, marginBottom:12}}>
                <CardView
                cardElevation={10}
                maxCardElevation={12}
                radius={5}
               
                width={351}
                backgroundColor={'#ffffff'}>

                    <Text style={{marginTop:14, marginLeft:24, fontSize:12, fontWeight:'bold', color:colors.btnActif}}> Struk Yang akan dikonfirmasi pembeli</Text>
                    <View>

                    </View>
                <View
                style={{
                    borderBottomColor: '#D9D9D9',
                    borderBottomWidth: 1,
                    marginTop:39,
                    marginRight:25,
                    marginLeft:25,
                }}></View>

                <View style={{flexDirection:'row', marginTop:12, marginBottom:16}}>
                    <Text style={{fontSize:12, fontWeight:'bold', marginLeft:31, marginRight:143}}> Total Harga </Text>
                    <Text style={{fontSize:12, fontWeight:'bold'}}> Rp. 20.000 </Text>
                </View>

                </CardView>
            </View>

            <View style={{alignItems:'center', marginTop:20, marginBottom:12}}>
                <CardView
                cardElevation={10}
                maxCardElevation={12}
                radius={5}
                height={96}
                width={351}
                backgroundColor={'#ffffff'}>

                <Text style={{marginTop:14, marginLeft:24, fontSize:12, fontWeight:'bold', color:colors.btnActif}}> Produk rekomendasi Penjual</Text>

                <View style={{marginTop:20, marginBottom:16}}>

                </View>

                </CardView>
            </View>

            <Text style={{fontSize:12, fontWeight:'bold', marginLeft:27, marginTop:34}}> Catatan Dari Penjual </Text>

            <View
                style={{
                    borderBottomColor: '#D9D9D9',
                    borderBottomWidth: 1,
                    marginTop:39,
                    marginRight:25,
                    marginLeft:25,
                    marginBottom:60
                }}>
                    <Text style={{marginBottom:2, fontSize:12}}> Tambah Cabe </Text>
                </View>

                <View style={{alignItems:"center", marginBottom:59}}>
                <TouchableOpacity style={{ height:41, width:351, alignItems:'center', justifyContent:'center'}}>
                <CardView
                cardElevation={10}
                maxCardElevation={12}
                radius={5}
                height={41}
                width={351}
                backgroundColor={colors.btnActif}
                justifyContent={'center'}
                alignItems={'center'}>

                    
                        <Text style={{color:'white', fontSize:16}}> Kirim Struk </Text>

                </CardView>
                </TouchableOpacity>
                </View>

                </ScrollView>
        </View>
    )
}

export default PreviewStruk

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.bglayout
    },

})
