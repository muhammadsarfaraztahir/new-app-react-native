import Loading from '@/components/Loading'
import { NewsDataType } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

type Props = {}

const Page = (props: Props) => {
    const { query, category, country } = useLocalSearchParams<{
        query: string;
        category: string;
        country: string;
    }>();

    const [news, setNews] = useState<NewsDataType[]>([]);
      const [isLoading, setIsLoading] = useState(true);

    const getNews = async () => {
        try {
          let categoryString = '';
          let countryString = '';
          let queryString = '';
          if( category){
            categoryString = `&category=${category}`
          }
          if( country){
            countryString = `&country=${country}`
          }
          if( query){
            queryString = `&q=${query}`
          }

          const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&language=en&image=1&removeduplicate=1&size=10${categoryString}${countryString}${queryString}`;
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
        <>
        <Stack.Screen options={{
            headerLeft: () => (
               <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='arrow-back' size={22}/>
               </TouchableOpacity> 
            ),
            title: 'Search'
        }} />
        <View style={styles.container} >
           {isLoading ? (
            <Loading size={'large'}/> 
           ) : (
            <FlatList data={news} keyExtractor={(_, index) => `list_item${index}`} showsVerticalScrollIndicator={false} renderItem={({})=> {}} /> 
           )}
        </View>
        </>

    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})