import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const yourLibraryItem = ({ item }) => (
<View style={styles.your_library_item}>
<Image
    style={styles.singer_pic}
    source={{uri: item.singer_pic}}
    />
<Text style={styles.singer_name}>{item.singer_name}</Text>
<Text style={styles.tag}>{item.tag}</Text>
</View>
  );

const YourLibrary = ({ item }) => (
<FlatList
    style={styles.your_library}
    data={item}
    renderItem={yourLibraryItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default YourLibrary;

const styles = StyleSheet.create({
    'singer_pic': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 5,
        'borderRadius': 50,
        'marginLeft': 5
    },
    'singer_name': {
        'color': '#050505',
        'fontSize': 20,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'tag': {
        'color': '#8a8585',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});