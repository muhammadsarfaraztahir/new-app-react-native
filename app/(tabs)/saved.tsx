import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

const Page = (props: Props) => {
  const [bookmarkNews, setBookmarkNews ] =useState([]);
  const [isLoading, setIsLoading ] =useState(true);

  const fetchBookmark = async() => {
    await AsyncStorage
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