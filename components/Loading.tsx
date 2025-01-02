import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {}

const Loading = (props: Props) => {
    return (
        <View style={styles.container} >
            <Text>Loading</Text>
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