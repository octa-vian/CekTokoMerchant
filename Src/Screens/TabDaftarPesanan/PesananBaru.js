import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Api from '../../Api';
import Header from '../../Components/Header';
import List from '../../Components/List';
import {colors} from '../../Utils/color';
import { Actions } from 'react-native-router-flux';
import {ProgressDialog} from 'react-native-simple-dialogs';


const PesananBaru = () => {
    const [anime, setAnime] = useState([]);
    const [load, setLoading] = useState(false);
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
            <Text style={{fontWeight:'bold', fontSize:16}}> Pesanan Baru</Text>
        <View style={{flex: 1, marginTop:17}}>
        <FlatList
          data={anime}
          renderItem={renderItem}
          keyExtractor={item => 'anime-' + item.id}
        />
       <ProgressDialog 
       visible= {load}
       message={"Sedang mengambil Data.."}
       messageStyle={{fontWeight:'bold', color:'gray', fontSize:14}}
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
    );
};

export default PesananBaru;

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
