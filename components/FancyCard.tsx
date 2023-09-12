import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import React from 'react'


export default function FancyCard() {
    return(
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}></View>
            <Image
            source={{
                uri:'https://i.pinimg.com/1200x/e0/39/2c/e0392c349dfb44ee4a1df46c3de6219d.jpg',
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>White Rock Pier </Text>
                <Text style={styles.cardLabel}>White Rock B.C</Text>
                <Text style={styles.cardDescription}>The white rock is the longest pier in canada.
                We have big white colour rock placed there.</Text>
                <Text style={styles.cardFooter}>15 mins away</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    card:{
        width: 300,
        height: 100,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1
        }
    },
    cardImage:{
        width: 380,
        height: 390,
        marginVertical: 12,
        marginHorizontal: 8,
        borderRadius: 8,
        
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardDescription:{
        color: '#5A20CB',
        fontSize: 14,
        marginBottom: 6,
        marginTop: 4,
        flexShrink: 1
    },
    cardFooter:{
        color: '#120E43'

    }
})