import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import RepoUtil from '../../Helper/RepoUtil';

const Profile = () => {
  const [session, setSession] = useState(null);

  const loadSession = async () => {
    const dataRepo = await RepoUtil.GetAsObject('@session');
    setSession(dataRepo);
    console.log('data repo', session);
    if (dataRepo != null) {
      // alert('Anda Sudah Login');
    }
  };

  useEffect(() => {
    loadSession();
  }, []);

  const confirmLogout = () => {
    Alert.alert(
      'Perhatian',
      'Apakah Anda Yakin Akan Logout ?',
      [
        {
          text: 'Batal',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: async () => {
            await RepoUtil.RemoveValue('@session');

            Actions.login();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.page}>
      <Text>{session ? session.user.Nama : '-'}</Text>
      <Button title="Logout" color="red" onPress={() => confirmLogout()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
