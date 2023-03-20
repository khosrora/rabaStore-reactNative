import React, { useState } from "react"
import { Image, Text, View, ScrollView, FlatList } from "react-native";
import Products from "../components/Products";
import HomeLayout from "../layout/HomeLayout";


const Home: React.FC<any> = ({ navigation }) => {

    const [images, setimages] = useState([
        'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy/artlogicstorage/sbg/images/view/765ae082ebb6819d44911cd6dd4b87e0j.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqOlqUJPe6qs2Kccw_cWQEOLmCJIprqWZOSYyCTO16XLjB9qunrSwMgeZHLFK4I-3sTQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJUFMfVKL6E56SV67TEzwkv_zwTCWANc_bIP4WpPir_8IQdkYvysp7stti7dul256mY8&usqp=CAU',
    ]);

    return (
        <HomeLayout navigation={navigation}>
            <ScrollView>
                <View style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                    <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 20 }}> Our Fashion APP </Text>
                    <FlatList
                        style={{ marginTop: 20 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={images}
                        renderItem={({ item, index }) => (
                            <Image source={{ uri: item }} /* Use item to set the image source */
                                key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
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
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: "bold", color: "#000" }}> Latest products </Text>
                        <Text> Veiew All </Text>
                    </View>
                    <Products />
                </View>
            </ScrollView>
        </HomeLayout>
    );
}

export default Home;