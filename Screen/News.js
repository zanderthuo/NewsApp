import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button,FlatList } from 'react-native'
import NewsCard from '../Components/NewsCard';
import newAPI from '../apis/News'

const News = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(() =>{
        getNewsFromAPI()
    }, [])

    // const newsResponse = async() => {
    //     const response =await newAPI.get('top-headlines?country=us&apiKey=2f491277be994c829b3d779758102496')
    //     console.log(response.data)
    // }

    function getNewsFromAPI(){
        newAPI.get('top-headlines?country=us&apiKey=2f491277be994c829b3d779758102496')
            .then(async function(response){
                setNews(response.data)
                // console.log(news)
            })
            .catch(function(error){
                console.log(error)
            })
    }

    if (!news) {
        return null
    }

    return (
        <View>
            <FlatList data = {news.articles}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem = {({item}) => {
                return <NewsCard item={item} />
            }} />
        </View>
    )
}

export default News