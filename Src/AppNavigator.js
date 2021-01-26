import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Scene, Router, Tabs, ActionConst} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from './Screens/Login';
import Home from './Screens/Tabs/Home';
import Admin from './Screens/Tabs/Admin';
import Profile from './Screens/Tabs/Profile';
import Profil from './Screens/Profile';
import Homes from './RouterAction';
import PesananBaru from './Screens/TabDaftarPesanan/PesananBaru';
import MenungguKonfirmasi from './Screens/TabDaftarPesanan/MenungguKonfirmasi';
import SiapDikirim from './Screens/TabDaftarPesanan/SiapDikirim';
import DalamPengiriman from './Screens/TabDaftarPesanan/DalamPengiriman';
import PesananSelesai from './Screens/TabDaftarPesanan/PesananSelesai';
import {colors} from './Utils'
import {DetailPesanan, BuatStruk, PreviewStruk} from './Screens/DaftarPesanan';
import Testing from './Screens/Testing';



const AppNavigator = () => {
  const iconHome = () => <Icon  color="#f53d3d" name="home" size={25} />;
  const iconAdmin = () => <Icon color="#f53d3d" name="atom" size={25} />;
  const iconProfile = () => <Icon color="#f53d3d" name="user-md" size={25} />;
  const iconPesananBaru = () => <Icon color="#f53d3d" name="user" size={25} />;

  const img = () => <Image source ={require('./Assets/Icon/pesananbaruhitam.png')} style={{height:20, width:20}}> </Image>

  return (
    <Router  navigationBarStyle={{ backgroundColor: colors.bgPrimary, height:73, borderBottomColor:"white" }} titleStyle={styles.navTittle} backButtonBarStyle={{color : "#FFF"}}>
      <Scene key="Root" titleStyle={{alignItems:'flex-start'}}>
        <Scene key="login" component={Login} title="Login" hideNavBar />
        <Scene key="Main" component={Home} title="Home" hideNavBar={true} />
        <Scene key="Profile" component={Profile} title="Profile" hideNavBar={true} />
        <Scene key="Home" component={Homes} type={ActionConst.RESET} title="Homes" hideNavBar />
        <Scene key="Detailpesanan" component={DetailPesanan} titleStyle={styles.navTittle} title="Detail Pesanan" backButtonBarStyle={{color:"#FFF"}} hideNavBar={false}/>
        <Scene key="Buatstruk" component={BuatStruk} titleStyle={styles.navTittle} title="Buat Struk" hideNavBar={false}/>
        <Scene key="Previewstruk" component={PreviewStruk} titleStyle={styles.navTittle} title="Preview Struk" hideNavBar={false}/>
        <Scene key="Testing" component={Testing} title="Testing" hideNavBar={true} />
    
        <Tabs
          key="MainHome"
          routeName="tabbar"
          tabBarPosition='top'
          name="Daftar Pesanan"
          labelStyle={{
            fontSize: 6,
            fontWeight:'bold',
      
          }}
          indicatorStyle={{
            backgroundColor:colors.btnActif
          }}
          titleStyle={styles.navTittle}
          //swipeEnabled
          tabBarStyle={styles.tabBar}
          activeTintColor={colors.btnActif}
          inactiveTintColor={colors.bgPrimary}>

          <Scene
            key="PesananBaru"
            component={PesananBaru}
            initial={true}
            icon={iconHome}
            title="Pesanan Baru"
            name="baru"
            hideNavBar={true}
          />
          <Scene
            key="Menunggu"
            component={MenungguKonfirmasi}
            icon={iconAdmin}
            name="menunggu"
            title="Menunggu Konfirmasi"
            hideNavBar={true}
          />
          <Scene
            key="Siap"
            component={SiapDikirim}
            icon={iconProfile}
            name="siapdikirim"
            title="Siap Dikirim"
            hideNavBar={true}
          />
          <Scene
            key="Pesanan"
            component={DalamPengiriman}
            icon={iconPesananBaru}
            name="pesananbaru"
            title="Dalam Pengiriman"
            hideNavBar={true}
          />
           <Scene
            key="Selesai"
            component={PesananSelesai}
            icon={iconPesananBaru}
            name="selesai"
            title="pesanan Selesai"
            hideNavBar={true}
          />
        </Tabs>
      </Scene>
    </Router>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: colors.bglayout,
    fontSize:8,
    opacity: 0.98,
    justifyContent:'space-between'
    },
    fontSize:{
      fontSize:8,
    },
    navTittle:{
      color:'white',
    },
    barButtonTextStyle:{
      color:'#FFFFFF'
    },
    barButtonIconStyle:{
        tintColor:'rgb(255,255,255)'
    },
});
