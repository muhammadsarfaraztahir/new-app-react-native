// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { Stack } from 'expo-router';

// type Props = {}

// const Page = (props: Props) => {
//   const [bookmarkNews, setBookmarkNews ] =useState([]);
//   const [isLoading, setIsLoading ] =useState(true);

//   useEffect(() => {
//     fetchBookmark();
//   }, []);

//   const fetchBookmark = async() => {
//     await AsyncStorage.getItem('bookmark').then(async(token) => {
//       const res =JSON.parse(token);
//       if ( res ) {
//         console.log('Bookmark res: ', res);
//         let query_string = res.join(',');
//         console.log("query_string: ", query_string);
        
//         const response = await axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${query_string}`);
//         setBookmarkNews(response.data.results);
//         setIsLoading(false);
//       } else {
//         setBookmarkNews([]);
//         setIsLoading(false);
//       }
//     })
//   }
//   return (
//     <>
//     <Stack.Screen options={{
//       headerShown: true,
//     }} /> 
//     <View style={styles.container}>
//       {isLoading ? (

//       ) : (
        
//       )}
//     </View>
//     </>
//   )
// }

// export default Page

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// })

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Link, Stack } from "expo-router";
import Loading from "@/components/Loading";
import { FlatList } from "react-native-gesture-handler";
import { NewsItem } from "@/components/NewsList";
import { useIsFocused } from "@react-navigation/native";

type Props = {};

const Page = (props: Props) => {
  const [bookmarkNews, setBookmarkNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused =useIsFocused();

  useEffect(() => {
    fetchBookmark();
  }, [isFocused]);

  const fetchBookmark = async () => {
    await AsyncStorage.getItem("bookmark").then(async (token) => {
      const res = JSON.parse(token);
      setIsLoading(true);
      if (res) {
        console.log("Bookmark res: ", res);
        let query_string = res.join(",");
        console.log("query_string: ", query_string);

        const response = await axios.get(
          `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${query_string}`
        );
        setBookmarkNews(response.data.results);
        setIsLoading(false);
      } else {
        setBookmarkNews([]);
        setIsLoading(false);
      }
    });
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <View style={styles.container}>
        {isLoading ? (
          <Loading size={"large"} />
        ) : (
          <FlatList
            data={bookmarkNews}
            keyExtractor={(_, index) => `list_item${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ index, item }) => {
              return (
                <Link href={`/new/${item.article_id}`} asChild key={index}>
                  <TouchableOpacity>
                    <NewsItem item={item} />
                  </TouchableOpacity>
                </Link>
              );
            }}
          />
        )}
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});