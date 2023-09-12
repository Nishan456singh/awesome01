import { StyleSheet, Text, View } from "react-native";
import React from "react";


export default function FlatCards() {
    return (
        <View>
            <Text style = {styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Yellow</Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 28,
    },
    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width: 110,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#383CC1'
    },
    cardThree:{
        backgroundColor: '#F7CD2E'
    }
})