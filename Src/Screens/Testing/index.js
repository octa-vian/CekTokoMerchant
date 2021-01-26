import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'

const Testing = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <TouchableOpacity onPress={() => Actions.Profile()} style={{backgroundColor:'red'}}>
            <Text> Hai Kevin </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Testing
