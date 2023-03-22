import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import HomeLayout from "../layout/HomeLayout";

type ProductType = {
    id: number,
    uri: string,
    title: string,
    desc: string,
    price: number,
}


const Basket: React.FC<any> = ({ navigation }) => {

    const [cards, setCards] = useState<ProductType[]>([
        {
            id: 1, uri: 'https://img01.ztat.net/article/spp-media-p1/30df7f2e4e2a4e9699c32450cc6e08c6/6e5b7b10b51845e79cffdcdfd2fc0f1a.jpg?imwidth=762', title: "Roller Rabbit", desc: "Lorem ipsum dolor sit", price: 198.00
        },
        {
            id: 2, uri: 'https://img01.ztat.net/article/spp-media-p1/088eda7700344cb9a9dba8b726bbe34e/ba314707f3ca401a9c544285f040f46e.jpg?imwidth=1800', title: "Axel Arigato", desc: "Lorem ipsum dolor sit", price: 40.00
        },
        {
            id: 3, uri: 'https://img01.ztat.net/article/spp-media-p1/da6b508d6e213e9e80099570ec10862f/e6c11bc8c2c642e6961bbf53907956db.jpg?imwidth=156', title: "Herschel Supply Co.", desc: "Lorem ipsum dolor sit", price: 245.00
        },
    ])

    return (
        <HomeLayout navigation={navigation}>
            <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }} >
                <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={styles.backIcon}
                        >
                            <Icon
                                name="arrowleft"
                                size={25}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10, rowGap: 10 }}>

                        {
                            cards.map((i: ProductType) =>
                                <View key={i.id} style={styles.parentCard}>
                                    <View style={{ width: "30%" }}>
                                        <Image
                                            source={{ uri: i.uri }}
                                            style={{ width: "100%", height: 100, resizeMode: "contain", borderRadius: 15 }}
                                        />
                                    </View>
                                    <View style={{ width: "70%", height: "100%", marginLeft: 5 }}>
                                        <View style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around" }}>
                                            <View >
                                                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}> {i.title} </Text>
                                                <Text style={{ fontSize: 10, fontWeight: "normal", marginLeft: 3 }}> {i.desc}  </Text>
                                            </View>
                                            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 15, fontWeight: "900", color: "#000" }}> $ {i.price} </Text>
                                                <View style={styles.counter}>
                                                    <TouchableOpacity>
                                                        <Icon
                                                            name="minus"
                                                            size={15}
                                                            color="#000"
                                                        />
                                                    </TouchableOpacity>
                                                    <Text style={{ color: "#000" }}> 1 </Text>
                                                    <TouchableOpacity>
                                                        <Icon
                                                            name="plus"
                                                            size={15}
                                                            color="#000"
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>

                    <View style={{ marginTop: 20, rowGap: 10, borderWidth: 1, borderRadius: 5, padding: 10, borderColor: "#EDEDED" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "100%" }}>
                            <Text style={{ color: "#000" }}> Subtotal: </Text>
                            <Text style={{ color: "#000" }}> $ 483 </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "100%" }}>
                            <Text style={{ color: "#000" }}> Shipping: </Text>
                            <Text style={{ color: "#000" }}> $ 17 </Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: "100%" }}>
                            <Text style={{ color: "#000" }}> Subtotal: </Text>
                            <Text style={{ color: "#000" }}> $ 500 </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={{ padding: 10, backgroundColor: "#000", borderRadius: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: "#FFFFFF" }}> Proceed to Checkout </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </HomeLayout>
    );
}

const styles = StyleSheet.create({
    backIcon: { backgroundColor: "#000", padding: 5, borderRadius: 100 / 2, display: "flex", justifyContent: "center", alignContent: "center", },
    parentCard: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 100,
        padding: 10
    },
    counter: { flexDirection: "row", justifyContent: 'space-between', alignItems: "center", backgroundColor: "#EDEDED", padding: 10, width: "40%", borderRadius: 20, paddingLeft: 10, paddingRight: 10 },
})

export default Basket;