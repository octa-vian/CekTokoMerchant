import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import Api from '../../Api';
import Header from '../../Components/Header';
import List from '../../Components/List';

const Home = () => {
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
    <View style={styles.page}>
      <Header title="Home" />
      <Text style={styles.title}>Daftar Anime</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={anime}
          renderItem={renderItem}
          keyExtractor={item => 'anime-' + item.id}
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

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
