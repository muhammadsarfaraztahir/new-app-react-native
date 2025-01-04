import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
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
           <View>
            <AntDesign name='checkcircle' size={14} color={}/>
           </View>
        </View>
    )
}

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    label:{
        fontSize: 14,
        color: Colors.tint,
    },
})