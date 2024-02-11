import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'



import { Entypo, FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
const wh1 = Dimensions.get('window').width
const wh = Dimensions.get('window').height


export default function Product({ navigation, route }) {
    const [Quantity, setQuantity] = useState(1)
    const [Quantity1, setQuantity1] = useState(1)
    const [Quantity2, setQuantity2] = useState(1)
    var obj = route.params


    return (<>


        <View style={styles.bars}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{ flexDirection: 'row' }}>
                <AntDesign name="arrowleft" size={27} color="black" />
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="search" size={27} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.items}>
            <View style={{}}>
                <View>
                    <Image style={{ height: 70, width: 90, objectFit: 'contain' }} source={obj.logo}></Image>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: '#fff' }}>{obj.title}</Text>
                    <Text style={{ paddingVertical: 10, letterSpacing: 2 }}>
                        <FontAwesome name="star" size={17} color="#FFF" />
                        <FontAwesome name="star" size={17} color="#fff" />
                        <FontAwesome name="star" size={17} color="#fff" />
                        <FontAwesome name="star" size={17} color="#fff" />
                        <FontAwesome name="star-half-empty" size={15} color="#fff" />
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff', letterSpacing: 1 }}>{obj.price}</Text>
                </View>
                <Image style={{ height: 210, width: 390, resizeMode: 'contain', }} source={obj.image}></Image>
            </View>
            <View style={styles.s}>
                <View style={styles.size}>
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: '500', letterSpacing: 1 }}>
                        Size
                    </Text>
                    <View style={styles.item} >
                        <TouchableOpacity onPress={() => { Quantity > 0 ? setQuantity(Quantity - 1) : '' }}>
                            <Feather style={{ height: 30, width: 30, backgroundColor: '#fff', borderRadius: 5, textAlign: 'center', paddingTop: 3 }} name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: '600', fontSize: 15, color: '#fff' }}>{Quantity}</Text>
                        <TouchableOpacity onPress={() => { setQuantity(Quantity + 1) }}>
                            <Feather style={{ height: 30, width: 30, backgroundColor: '#fff', borderRadius: 5, textAlign: 'center', paddingTop: 3 }} name="plus" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-between' }}>

                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >7</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >8</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >9</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >10</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >11</Text></TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffffff', height: 30, width: 50, borderWidth: 2, borderColor: '#808080a3', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 1 }}><Text >12</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20, borderBottomWidth: 2, paddingBottom: 10, borderColor: '#ffffffa3' }}>
                <Text style={{ fontSize: 24, fontWeight: '600', color: '#fff', paddingBottom: 20 }}>Product Details</Text>
                <Text style={{ color: '#fff' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque harum labore aliquam deleniti temporibus quam quae sequi error, neque architecto laborum minima tenetur possimus.
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.circle}>
                        <Image style={{ resizeMode: 'cover', height: 40, width: 40, borderRadius: 20 }} source={require('../img/p1.jpg')}></Image>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Image style={{ resizeMode: 'cover', height: 40, width: 40, borderRadius: 20 }} source={require('../img/p2.jpg')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Image style={{ resizeMode: 'cover', height: 40, width: 40, borderRadius: 20 }} source={require('../img/p1.jpg')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Image style={{ resizeMode: 'cover', height: 40, width: 40, borderRadius: 20 }} source={require('../img/p2.jpg')}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 11, marginTop: 12, paddingHorizontal: 10, color: '#fff' }}>
                    4.73L + people Pinned this
                </Text>
            </View>
        </View>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}></StatusBar>


    </>

    )
}
const styles = StyleSheet.create({
    bars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 5,
        padding: 10
    },
    items: {
        backgroundColor: '#9daf9b',
        paddingHorizontal: 20,
        height: wh / 1.13,
        margin: 20,
        borderRadius: 15,

    },
    rect: {


        flexDirection: 'row',

    },
    item: {
        flexDirection: 'row',


        backgroundColor: '#a5b7a3',
        elevation: 10,
        shadowColor: '#000',
        width: 130,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginLeft: 30,





    },
    size: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circle: {
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 25,
        marginTop: 7
    }
})
