import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import Api from '../../Api';
import RepoUtil from '../../Helper/RepoUtil';
import {Actions} from 'react-native-router-flux';
import { colors } from '../../Utils';


const win = Dimensions.get('window');
const {width, height} = win;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isProcess, setProcess] = useState(false);
  const [session, setSession] = useState(null);

  const loadSession = async () => {
    const dataRepo = await RepoUtil.GetAsObject('@session');
    console.log(dataRepo);
    setSession(dataRepo);
    if (dataRepo != null) {
      //alert('Anda Sudah Login');
      Actions.Testing();
    }
  };

  const ImgIcon = () =>{
    return(
        <View>
            <View style={{color:'gray', marginTop:21, marginLeft:24}}>
        <Image source = {require('../gambar/logocektoko.png')} style = {{width:45, height:55, resizeMode:'stretch', alignItems:'center'}}></Image>  
        </View>
        </View>
    );
};

  useEffect(() => {
    loadSession();
  }, []);

  //   hit login
  const loginAction = async () => {
    setProcess(true);
    const param = {
      Username: username,
      Password: password,
    };

    await Api.post('Auth/Login', param)
      .then(async response => {
        const respon = response.data;
        setProcess(false);
        if (respon.Status == 'S') {
          const dataRepo = respon.Data;
          RepoUtil.StoreAsObject('@session', dataRepo);
          Actions.Testing();
        } else {
          alert(respon.Message);
        }
      })
      .catch(error => {
        console.log(error);
        setProcess(false);
      });
  };

  return (
    <View style={styles.page}>
    <ImgIcon/>
    <View style={{marginTop:61, alignItems:'center'}}>

    <View style={{alignItems:'center', justifyContent:'center', width:244, height:208}}>
    <Image source = {require('../gambar/gambartoko.png')}/> 
    </View>
  
      <TextInput
        autoCapitalize="none"
        style={styles.form}
        placeholder="Username"
        value={username}
        onChangeText={value => setUsername(value)}
      />

      <View style={styles.container}>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.textBox}
          placeholder="Password"
          value={password}
          secureTextEntry={isSecure}
          onChangeText={value => setPassword(value)}
        />
        {/* Tambah ToucableOpacity */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.touachableButton}
          onPress={() => setSecure(!isSecure)}>
          <Image
            source={
              isSecure
                ? require('../../Assets/Icon/invisible.png')
                : require('../../Assets/Icon/view.png')
            }
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}
      onPress={() => loginAction()}>
        <Text style={{color:'white'}}> Login</Text>
      </TouchableOpacity>

      {/* <View style={styles.btnLogin}>
        <Button
        title="Login"
        onPress={() => loginAction()}
        disabled={isProcess ? true : false}
        />
      </View> */}

      </View>

      {/* Tambah Modal */}
      <Modal animationType="slide" transparent={true} visible={isProcess}>
        <View
          style={{
            height: height,
            backgroundColor: 'rgba(0,0,0, 0.7)',
            alignItems: 'center',
            paddingTop: height * 0.5,
          }}>
          <ActivityIndicator size="large" color="#D2292D" />
        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex:1
  },
  label: {
    marginBottom: 10,
  },
  form: {
    backgroundColor:'white',
            fontSize:14,
            color:'black',
            width:268, 
            height: 37, 
            borderColor:colors.lineborder,
            borderWidth: 1,
            borderRadius:8,
            paddingLeft:10 ,
            marginTop:45
  },

  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },

  btnLogin:{
    justifyContent:'center',
        borderRadius:5,
        alignItems:'center',
        marginTop:29,
        width:133,
        height:33,
        backgroundColor:colors.btnredcolor,
  },

  textBox: {
    alignSelf: 'stretch',
    paddingRight: 45,
    borderWidth: 1,
    paddingVertical: 0,
    backgroundColor:'white',
    fontSize:14,
    color:'black',
    width:268, 
    height: 37, 
    borderColor:colors.lineborder,
    borderWidth: 1,
    borderRadius:8,
    paddingLeft:10 
  },
  touachableButton: {
    position: 'absolute',
    right: 10,
    height: 25,
    width: 25,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:22,

  },
});
