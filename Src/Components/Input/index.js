import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../Utils'

const Input = ({label, type, value, onChangeText, isSecure}) => {
  const Label=()=>{
    if(type === 'label'){
      return (<Text style={styles.label}>{label}</Text>)
    }
    return <></>
  }

  return (
    <View>
      <Label/>
      <View style={styles.wrapper}>
        <TextInput style={styles.input} placeholder={label} value={value} onChangeText={onChangeText} secureTextEntry={isSecure}/>
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  wrapper:{
    borderRadius:8,
    borderWidth:1,
    borderColor:colors.lineborder,
    paddingHorizontal:12,
    // paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    flex:1,
    paddingLeft:6,
    height:42
  },
  label:{
    fontSize:16,
    color:colors.lineborder,
    marginBottom:6,
  }
})