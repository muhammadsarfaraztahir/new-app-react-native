import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {
    label: string;
    checked: boolean;
    
}

const CheckBox = (props: Props) => {
    return (
        <View style={styles.container} >
           
        </View>
    )
}

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})