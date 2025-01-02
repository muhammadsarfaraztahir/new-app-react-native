import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ActivityIndicator  } from 'react-native'

type Props = {}

const Loading = (props: Props) => {
    return (
        <View style={styles.container} >
            <ActivityIndicator {...props}/>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    },
    
})