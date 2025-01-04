import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {
    label: string;
    checked: boolean;
    onPress: () => void;
}

const CheckBox = ({label, checked, onPress}: Props) => {
    return (
        <View style={styles.container} >
           <Text style={styles.label}>{label}</Text>
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