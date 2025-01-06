import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {}

const Page = (props: Props) => {
    return (
        <View style={styles.container} >
          
        </View>
    )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    userInfo:{
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10,
    },
    welcomeText:{
       fontSize: 12,
       fontWeight: '700',
       color:Colors.darkGrey,
    },
    userName:{
        fontWeight: '700',
        fontSize: 14,
        color: Colors.black
    },

})