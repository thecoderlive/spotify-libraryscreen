import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import YourLibrary from './YourLibrary'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<YourLibrary item={item.your_library}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});