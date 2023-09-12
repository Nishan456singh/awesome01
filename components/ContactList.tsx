import { Image, ScrollView, StyleSheet, Text,View } from "react-native";
import React from "react";


export default function ContactList(){
    const contacts =[
        {uid:1,
        name: 'Nishan Singh',
        status: 'chill mode on',
        imageUrl: 'https://instagram.fyvr2-1.fna.fbcdn.net/v/t51.2885-19/343293621_177915708486755_5495429004958274123_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fyvr2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_Z5tipUFAO0AX8iw1o9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCAIOsuqZ-6Sz3Hd3pQ9q8DKvmHpnBQED4eyMC4tfIQGw&oe=64FAE909&_nc_sid=8b3546'
        },
        {uid:2,
            name: 'Hitesh Choudary',
            status: 'Teacher',
        imageUrl: 'https://images.pexels.com/photos/13847652/pexels-photo-13847652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {uid:3,
                name: 'Sarbloh Vibes',
                status: 'Panth Maharaj Ke',
            imageUrl: 'https://i.pinimg.com/originals/59/0f/1b/590f1b43af1fdea7a8bdb5dd6cd30df8.jpg'
                },
                {uid:1,
                    name: 'Nishan Singh',
                    status: 'chill mode on',
                    imageUrl: 'https://instagram.fyvr2-1.fna.fbcdn.net/v/t51.2885-19/343293621_177915708486755_5495429004958274123_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fyvr2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_Z5tipUFAO0AX8iw1o9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCAIOsuqZ-6Sz3Hd3pQ9q8DKvmHpnBQED4eyMC4tfIQGw&oe=64FAE909&_nc_sid=8b3546'
                    },
                    {uid:2,
                        name: 'Hitesh Choudary',
                        status: 'Teacher',
                    imageUrl: 'https://images.pexels.com/photos/13847652/pexels-photo-13847652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        },
                        {uid:3,
                            name: 'Sarbloh Vibes',
                            status: 'Panth Maharaj Ke',
                        imageUrl: 'https://i.pinimg.com/originals/59/0f/1b/590f1b43af1fdea7a8bdb5dd6cd30df8.jpg'
                            },
                            {uid:1,
                                name: 'Nishan Singh',
                                status: 'chill mode on',
                                imageUrl: 'https://instagram.fyvr2-1.fna.fbcdn.net/v/t51.2885-19/343293621_177915708486755_5495429004958274123_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fyvr2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_Z5tipUFAO0AX8iw1o9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCAIOsuqZ-6Sz3Hd3pQ9q8DKvmHpnBQED4eyMC4tfIQGw&oe=64FAE909&_nc_sid=8b3546'
                                },
                                {uid:2,
                                    name: 'Hitesh Choudary',
                                    status: 'Teacher',
                                imageUrl: 'https://images.pexels.com/photos/13847652/pexels-photo-13847652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                    },
                                    {uid:3,
                                        name: 'Sarbloh Vibes',
                                        status: 'Panth Maharaj Ke',
                                    imageUrl: 'https://i.pinimg.com/originals/59/0f/1b/590f1b43af1fdea7a8bdb5dd6cd30df8.jpg'
                                        },
            ];
    return(
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({uid, name, status, imageUrl})  =>  (
                   <View key={uid} style={styles.userCard}>
                     <Image
                     source={{
                        uri: imageUrl
                     }}
                     style={styles.userImage}
                     />
                     <View>
                     <Text style={styles.userName}>{name}</Text>
                     <Text style={styles.userStatus}>{status}</Text>
                     </View>
                   </View> 
                ))}
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container:{
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage:{
        width:60,
        height: 60,
        borderRadius: 60/2,
        marginRight:14


    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'

    },
    userStatus:{
        fontSize: 13,
        color:'#FFF'
    }
})