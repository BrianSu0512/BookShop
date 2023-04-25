import React from 'react';
import {  FlatList, StyleSheet, View} from 'react-native';


import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import DataManager from '../config/DataManager';

const getBooks = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getBooks(user);
    
}

function MyBooksScreen(props) {
    const bookList = getBooks();
    console.log("Line 20",bookList);

    return (
        <AppScreen style={styles.container}>

            <FlatList 
                data={bookList}
                keyExtractor = {book => book.bookid.toString()}
                renderItem = {({item}) => 
                        <AppCard
                            title={item.title}
                            subtitle={item.subtitle}
                            image={item.image}
                            category={item.category}
                        />}
                />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        flex:1,
        marginTop:0,

    },
})

export default MyBooksScreen;