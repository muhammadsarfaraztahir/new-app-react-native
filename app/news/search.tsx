import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

type Props = {}

const Page = (props: Props) => {
    const { query, category, country } = useLocalSearchParams<{
        query: string;
        category: string;
        country: string;
    }>();

    
    return (
        <View style={styles.container} >
            <Text>Search query: {query}</Text>
            <Text>category: {category}</Text>
            <Text>Country: {country}</Text>
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