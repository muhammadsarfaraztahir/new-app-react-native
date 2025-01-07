import Loading from '@/components/Loading'
import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, Stack, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Props = {}

const NewsDetails = (props: Props) => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [news, setNews] = useState<NewsDataType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [bookmark, setBookmark] = useState(false);

    useEffect(() => (
        getNews();
      ))
const getNews = async () => {
    try {
        const URL = `https://newsdata.io/api/1/news?apikey=${process.env.EXPO_PUBLIC_API_KEY}&id=${id}`;
        const response = await axios.get(URL);

        if (response && response.data) {
            setNews(response.data.results);
            setIsLoading(false);
        }
    } catch (err: any) {
        console.log("Error Message: ", err.message);
    }
};

const saveBookmark = async(newsId: string) => {
    setBookmark(true);
    await AsyncStorage.getItem("bookmark").then((token) => {
        const res = JSON.parse(token);
        if (res !== null) {
            let data = res.find((value: string) => value === newsId);
            if (data == null) {
                res.push(newsId);
                AsyncStorage.setItem("bookmark", JSON.stringify(res));
                alert("News Saved");
            }
        } else {
            let bookmark = [];
            bookmark.push(newsId);
            AsyncStorage.setItem("bookmark", JSON.stringify(bookmark))
            alert("News Saved");
        }
    });
};

const removeBookmark = async(newsId: string) => {
    setBookmark(false);
    await AsyncStorage.getItem("bookmark").then((token) => {
      const res =JSON.parse(token);  
      return res.filter 

    })
}

return (
    <>
        <Stack.Screen options={{
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name='arrow-back' size={22} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => saveBookmark(news[0].article_id)}>
                    <Ionicons name={bookmark ? "heart" :'heart-outline'} size={22}  color={bookmark ? 'red' : Colors.black}/>
                </TouchableOpacity>
            ),
            title: "",
        }}
        />
        {isLoading ? (
            <Loading size={'large'} />
        ) : (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.container} >
                <Text style={styles.title}>{news[0].title}</Text>
                <View style={styles.newsInfoWrapper}>
                    <Text style={styles.newsInfo}>{Moment(news[0].pubDate).format('MMMM DD, hh:mm a')}</Text>
                    <Text style={styles.newsInfo}>{news[0].source_name}</Text>
                </View>
                <Image source={{ uri: news[0].image_url }} style={styles.newsImg} />
                {news[0].content ? (
                    <Text style={styles.newContent}>{news[0].content}</Text>
                ) : (
                    <Text style={styles.newContent}>{news[0].description}</Text>
                )}
            </ScrollView>
        )}
    </>
)
}

export default NewsDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginVertical: 10,
        letterSpacing: 0.6,
    },
    newsImg: {
        width: '100%',
        height: 300,
        marginBottom: 20,
        borderRadius: 10,

    },
    newsInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    newsInfo: {
        fontSize: 12,
        color: Colors.darkGrey,
    },
    newContent: {
        fontSize: 14,
        color: '#555',
        letterSpacing: 0.8,
        lineHeight: 22,

    },
})