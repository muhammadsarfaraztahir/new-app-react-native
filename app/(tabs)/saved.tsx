import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

const Page = (props: Props) => {
  const [bookmarkNews, setBookmarkNews ] =useState([]);
  const [isLoading, setIsLoading ] =useState(true);

  useEffect();

  const fetchBookmark = async() => {
    await AsyncStorage.getItem('bookmark').then((token) => {
      const res =JSON.parse(token);
      if ( res ) {
        console.log('Bookmark res: ', res);
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