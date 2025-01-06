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

    const getNews = async (category: string = '') => {
        try {
          let categoryString = '';
          if( category.length !== 0 ){
            categoryString = `&category=${category}`
          }
          const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=10${categoryString}`;
          const response = await axios.get(URL);
    
          if (response && response.data) {
            setNews(response.data.results);
            setIsLoading(false);
          }
        } catch (err: any) {
          console.log("Error Message: ", err.message);
        }
      };
      
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