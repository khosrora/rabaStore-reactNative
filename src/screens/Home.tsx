import React, { useState } from "react"
import { Image, Text, View, ScrollView, FlatList, TouchableOpacity, TextInput } from "react-native";
import Products, { dataType } from "../components/Products";
import HomeLayout from "../layout/HomeLayout";

import Icon from "react-native-vector-icons/FontAwesome"

let productsData: dataType[] = [
    {
        id: 1, uri: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6f%2Fd8%2F6fd840c593c71414d36e9158cd5dbdf97696e33b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D", name: 'RA - TURQUOISE', price: 50.00
    },
    {
        id: 2, uri: "https://img01.ztat.net/article/spp-media-p1/30df7f2e4e2a4e9699c32450cc6e08c6/6e5b7b10b51845e79cffdcdfd2fc0f1a.jpg?imwidth=762", name: 'RA - Sun', price: 100.00
    },
    {
        id: 3, uri: "https://img01.ztat.net/article/spp-media-p1/088eda7700344cb9a9dba8b726bbe34e/ba314707f3ca401a9c544285f040f46e.jpg?imwidth=1800", name: 'RA - Summer', price: 50.00
    },
    {
        id: 4, uri: "https://img01.ztat.net/article/spp-media-p1/da6b508d6e213e9e80099570ec10862f/e6c11bc8c2c642e6961bbf53907956db.jpg?imwidth=156", name: 'RA - BlackText', price: 150.00
    },
    {
        id: 5, uri: "https://img01.ztat.net/article/spp-media-p1/81e6182f191946a288176d99f8999ceb/26d010ad8a9f436e9055fe21b9eaae27.jpg?imwidth=1800", name: 'RA - Desc', price: 350.50
    },
    {
        id: 6, uri: "https://img01.ztat.net/article/spp-media-p1/d23a326001f248a08586090595437d71/5ce41a3b9d044ec89d70baab416763bf.jpg?imwidth=762", name: 'RA - NoBody', price: 200.00
    },
]


const Home: React.FC<any> = ({ navigation }) => {

    const [images, setimages] = useState([
        'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy/artlogicstorage/sbg/images/view/765ae082ebb6819d44911cd6dd4b87e0j.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqOlqUJPe6qs2Kccw_cWQEOLmCJIprqWZOSYyCTO16XLjB9qunrSwMgeZHLFK4I-3sTQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJUFMfVKL6E56SV67TEzwkv_zwTCWANc_bIP4WpPir_8IQdkYvysp7stti7dul256mY8&usqp=CAU',
    ]);

    const [categories, setCategories] = useState([
        { id: 1, name: "Bags" },
        { id: 2, name: "T shert" },
        { id: 3, name: "Jeans" },
        { id: 4, name: "Jackets" },
        { id: 5, name: "Shoes" },
        { id: 6, name: "Dresses" },
    ])

    return (
        <HomeLayout navigation={navigation}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                    <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 20 }}> Our Fashion APP </Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                        <TouchableOpacity style={{ width: "100%" }}>
                            <View style={{ backgroundColor: "#EDEDED", padding: 20, width: "100%", borderRadius: 30, display: "flex", flexDirection: 'row', justifyContent: "flex-start", alignItems: "center" }}>
                                <Icon
                                    name="search"
                                    size={15}
                                    color="#000"
                                />
                                <Text> Search </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ marginTop: 20 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={images}
                        renderItem={({ item, index }) => (
                            <Image
                                source={{ uri: item }}
                                key={index}
                                style={{
                                    width: 300,
                                    height: 200,
                                    borderWidth: 2,
                                    resizeMode: 'contain',
                                    margin: 5,
                                    borderRadius: 10
                                }}
                            />
                        )}
                    />
                    <FlatList
                        style={{ marginTop: 20, marginBottom: 20 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index}>
                                <View style={{ borderWidth: 1, borderColor: "#EDEDED", borderRadius: 20, padding: 5, marginLeft: 10 }}>
                                    <Text style={{ color: "#000", fontWeight: "bold" }}> {item.name} </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: "bold", color: "#000" }}> Latest products </Text>
                        <Text> Veiew All </Text>
                    </View>
                    <Products data={productsData} navigation={navigation} />
                </View>
            </ScrollView>
        </HomeLayout>
    );
}

export default Home;