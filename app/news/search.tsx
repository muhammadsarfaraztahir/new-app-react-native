import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'

type Props = {}

const Page = (props: Props) => {
    const {} = useLocalSearchParams();
    return (
        <View style={styles.container} >
          <Text>Page</Text>
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

})