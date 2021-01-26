import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Api from '../../Api';
import Header from '../../Components/Header';
import List from '../../Screens/DaftarPesanan/ListMenungguPesanan';
import {colors} from '../../Utils/color';
import {ProgressDialog} from 'react-native-simple-dialogs';

const MenungguKonfirmasi = () => {
    const [anime, setAnime] = useState([]);
    const [load, setLoading] = useState(false);
    const listFilm = async () => {
        await Api.get('/Movies/List')
        .then(response => {
            // console.log(response.data);
            const respon = response.data;
            if (respon.Status == 'S') {
            setAnime(respon.Data);
            setLoading(false)
            } else {
            alert(respon.Message);
            setLoading(false)
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
        <View style={styles.page}> 
            <Text style={{fontWeight:'bold', fontSize:16}}> Menunggu Konfirmasi</Text>

        <View style={{flex: 1, marginTop:17}}>
        <FlatList
          data={anime}
          renderItem={renderItem}
          keyExtractor={item => 'anime-' + item.id}
        />

      <ProgressDialog 
            visible= {load}
            message={"Sedang mengambil Data.."}
            messageStyle={{fontWeight:'bold', color:'black', fontSize:16}}
            />
        {/* <ScrollView>
          {anime.map((item, index) => {
            return (
              <List
                key={'anime-' + index}
                title={item.judul}
                rating={item.rating}
                image={item.poster}
              />
            );
          })}
        </ScrollView> */}
      </View>
        </View>
    )
}

export default MenungguKonfirmasi

const styles = StyleSheet.create({
    page: {
      flex: 1,
      alignItems:'center',
        paddingTop:20,
        backgroundColor:colors.bglayout
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
