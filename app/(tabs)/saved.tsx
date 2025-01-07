import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Page = (props: Props) => {
  const [bookmarkNews, setBookmarkNews ] =useState([]);
  const [isLoading, setIsLoading ] =useState(true);

  const fetchBookmark = async() => {}
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