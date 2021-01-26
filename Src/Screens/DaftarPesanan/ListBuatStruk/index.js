import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListBuatStruk = () => {
    return (
        <View>
            <View style={styles.headerTittle}>
                    <Text style={styles.txt1}> Shampo Sunslik</Text>
                    <Text style={styles.txt2}> 2Box </Text>
                    <Text style={styles.txt3}> Rp. 12000 </Text>
                    <TouchableOpacity style={styles.txt4} widht={30} height={30} onPress={alert}>
                    <Image source = {require('../../../Assets/Icon/hapus.png')} style={{height:30,width:30,}}></Image>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

export default ListBuatStruk;

const styles = StyleSheet.create({

    headerTittle:{
        height:37,
        flexDirection:'row',
        alignItems:'center',
    },
    txt1:{
        flex:1.4,
        fontSize:10,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',

    },
    txt2:{
        flex:1.2,
        fontSize:10,
        color:'black',
        textAlign:'center',
        fontWeight:'bold',
    },
    txt3:{
        flex:1,
        fontSize:10,
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
    },
    txt4:{
        flex:0.4,
        textAlign:'center',
        justifyContent:'center',
        marginRight:18
    },

});
