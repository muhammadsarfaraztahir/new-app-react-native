import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type Props = {}

const Page = (props: Props) => {
  const [bookmarkNews, setBookmarkNews ] =useState([]);
  const [isLoading, setIsLoading ] =useState(true);

  useEffect(() => {
    fetchBookmark();
  }, []);

  const fetchBookmark = async() => {
    await AsyncStorage.getItem('bookmark').then(async(token) => {
      const res =JSON.parse(token);
      if ( res ) {
        console.log('Bookmark res: ', res);
        let query_string = res.join(',');
        console.log("query_string: ", query_string);
        
        const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${query_string}`);
        setBookmarkNews(response.data.results);
        setIsLoading(false);
      } else {
        setBookmarkNews([]);
      }
    })
  }
  return (
    <View style={styles.container}>
      <Text>Saved Screen</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})