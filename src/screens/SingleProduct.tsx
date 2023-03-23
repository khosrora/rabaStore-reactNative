import React from "react";
import { FlatList, Image, View, Dimensions, TouchableOpacity, ScrollView, StyleSheet, Text } from "react-native";
import ProductLayout from "../layout/ProductLayout";

import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get('screen')



const SingleProduct: React.FC<any> = ({ navigation }) => {

    const { global }: any = useSelector(state => state);
    const dark = global.dark;

    const [images, setImages] = React.useState<string[]>(
        [
            'https://lavogueco.com/wp-content/uploads/2021/09/IMG_3885.webp',
            'https://lavogueco.com/wp-content/uploads/2021/09/IMG_3888.webp',
        ]
    )

    const [sizes, setSizes] = React.useState<{ id: number, size: string }[]>(
        [
            {
                id: 1,
                size: "SM"
            },
            {
                id: 2,
                size: "MD"
            },
            {
                id: 3,
                size: "L"
            },
            {
                id: 4,
                size: "XL"
            },
            {
                id: 5,
                size: "XXL"
            },
        ]
    )

    const [colors, setColors] = React.useState<{ id: number, color: string }[]>(
        [
            {
                id: 1,
                color: "#000"
            },
            {
                id: 2,
                color: "#BBD6B8"
            },
            {
                id: 3,
                color: "#FE6244"
            },
            {
                id: 4,
                color: "#FFD966"
            }
        ]
    )

    return (
        <ProductLayout dark={dark}>
            <View style={{ backgroundColor: dark ? "#000" : "#FFFFFF", width: "100%", position: "relative", flex: 1 }}>
                <FlatList
                    style={{ width: "100%" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment="center"
                    data={images}
                    renderItem={({ item, index }) => (
                        <View style={{ backgroundColor: "#EDEDED", width }}>
                            <Image
                                source={{ uri: item }}
                                key={index}
                                style={{
                                    height: 400,
                                    borderWidth: 2,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                    )}
                />
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
            <View style={{ flex: 1, backgroundColor: dark ? "#000" : "#FFFFFF", marginTop: -100, borderTopEndRadius: 40, borderTopStartRadius: 40, overflow: 'hidden', padding: 10 }}>
                <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 25, padding: 10 }}>
                        <View style={{ width: "60%" }}>
                            <Text style={{ fontSize: 20, color: dark ? "#EDEDED" : "#000", fontWeight: "bold" }}> Roller Rabbit </Text>
                            <Text style={{ fontSize: 12, fontWeight: "normal", marginTop: 5 }}> Lorem ipsum dolor sit amet. </Text>
                            <Text style={{ fontSize: 12, fontWeight: "normal", marginTop: 5 }}> ( 325 Review ) </Text>
                        </View>
                        <View style={[styles.counter, dark ? styles.counterColor : null]}>
                            <TouchableOpacity>
                                <Icon
                                    name="minus"
                                    size={15}
                                    color={dark ? "#EDEDED" : "#000"}
                                />
                            </TouchableOpacity>
                            <Text style={{ color: dark ? "#EDEDED" : "#000" }}> 1 </Text>
                            <TouchableOpacity>
                                <Icon
                                    name="plus"
                                    size={15}
                                    color={dark ? "#EDEDED" : "#000"}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
                        <View style={{ width: "80%" }}>
                            <View>
                                <Text style={{ fontSize: 20, color: dark ? "#EDEDED" : "#000", fontWeight: "bold" }}> Size </Text>
                                <FlatList
                                    style={{ width: "100%" }}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    pagingEnabled
                                    snapToAlignment="center"
                                    data={sizes}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity key={item.id}>
                                            <View style={styles.sizeParent}>
                                                <Text style={{ fontSize: 14, color: "#B2B2B2", fontWeight: "bold" }}> {item.size} </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                        <View style={{ width: "20%" }}>
                            <View style={[styles.colorsParent, dark ? styles.counterColor : null]}>
                                <FlatList
                                    style={{ marginLeft: "auto", marginRight: "auto" }}
                                    showsHorizontalScrollIndicator={false}
                                    snapToAlignment="center"
                                    data={colors}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity key={item.id}>
                                            <View style={{ backgroundColor: `${item.color}`, borderWidth: 1, marginTop: 10, borderColor: `${item.color}`, width: 18, height: 18, borderRadius: 100 / 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}> Description </Text>
                        <Text style={{ lineHeight: 25, marginBottom: 65 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa veniam provident excepturi, aliquid doloremque corporis numquam, optio reiciendis voluptatem veritatis. Rem nulla repellendus excepturi consectetur magni inventore sequi, iure nisi ipsum, quae neque aperiam enim debitis maiores fugiat natus. Itaque minima eius dolore sit adipisci laboriosam, temporibus tempore suscipit aperiam quibusdam quos doloribus molestiae odio ducimus libero commodi. Harum, perspiciatis voluptates vitae voluptas quod nostrum placeat, distinctio officiis, facilis expedita tempora sequi obcaecati veritatis qui? Porro qui quisquam debitis, quos illo impedit et! Magnam eaque ducimus ratione reprehenderit, distinctio labore perspiciatis quaerat natus ut unde qui, laudantium, nam asperiores.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, perspiciatis. Asperiores autem excepturi dolore dicta laboriosam doloribus vitae repellendus vero quis eaque corrupti iure, illum, et nihil! Repudiandae id, harum vero enim veniam ipsa molestiae possimus, itaque iure accusamus porro aut fugit sit corrupti! Aspernatur dolorum maiores libero minus, quis, blanditiis, illo nulla exercitationem tenetur eaque quod asperiores recusandae quibusdam cum! Nemo velit tenetur expedita totam at corporis ex dolore quod molestias natus ab magni doloribus rerum, aut sint labore nulla repudiandae omnis harum pariatur tempore facere quidem itaque. Accusantium itaque impedit enim earum ea tempore eveniet, id nesciunt rerum.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ProductLayout>
    );
}

const styles = StyleSheet.create({
    backIcon: { backgroundColor: "#000", padding: 5, borderRadius: 100 / 2, display: "flex", justifyContent: "center", alignContent: "center", position: 'absolute', left: 5, top: 10 },
    counter: { flexDirection: "row", justifyContent: 'space-between', alignItems: "center", backgroundColor: "#EDEDED", padding: 10, width: "40%", borderRadius: 20, paddingLeft: 10, paddingRight: 10 },
    counterColor: { backgroundColor: "#323232" },
    sizeParent: { borderWidth: 1, marginTop: 5, borderColor: "#B2B2B2", width: 38, height: 38, borderRadius: 100 / 2, marginLeft: 10, display: "flex", justifyContent: "center", alignItems: "center" },
    colorsParent: { backgroundColor: "#FFFFFF", elevation: 5, borderRadius: 20, width: "70%", marginLeft: 'auto', marginRight: "auto", padding: 15, height: 150 },
})

export default SingleProduct;