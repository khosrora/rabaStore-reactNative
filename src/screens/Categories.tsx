import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import HomeLayout from "../layout/HomeLayout";
import Icon from "react-native-vector-icons/AntDesign"
import { useSelector } from "react-redux";

type DataType = {
    id: number,
    title: string,
    count: number
}

const data: DataType[] = [
    { id: 1, title: "Bags", count: 233 },
    { id: 2, title: "T Shert", count: 500 },
    { id: 3, title: "Shoes", count: 100 },
]

const Categories: React.FC<any> = ({ navigation }) => {

    const { global }: any = useSelector(state => state);
    const dark = global.dark;

    return (
        <HomeLayout dark={dark} navigation={navigation}>
            <ScrollView style={[styles.parent, dark ? styles.parentColor : null]}>
                {
                    data.map((i: DataType) =>
                        <TouchableOpacity onPress={() => navigation.navigate("ProductsCategories")} key={i.id}>
                            <View style={{ backgroundColor: dark ? "#323232" : "#000", padding: 15, borderRadius: 30, marginTop: 10 }}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <View>
                                        <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>{i.title}</Text>
                                    </View>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <Text style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "bold", marginRight: 10 }}>{i.count} Products</Text>
                                        <Icon
                                            name="caretright"
                                            size={20}
                                            color="#FFFFFF"
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </HomeLayout>
    );
}


const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    parentColor: {
        backgroundColor: '#000',
    }
})

export default Categories;