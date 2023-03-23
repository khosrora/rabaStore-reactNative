import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';

export type dataType = {
    id: number
    uri: string
    name: string
    price: number
}

type Props = {
    dark: boolean,
    data: dataType[],
    navigation: any
}


const Products: React.FC<Props> = ({ dark, data, navigation }) => {
    const [items, setItems] = React.useState<any[]>(data);

    return (
        <View style={styles.gridView}>
            {
                items.map((item: dataType) =>
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate("SingleProduct")} style={{ width: "47%" }}>
                        <View style={styles.itemContainer}>
                            <Image
                                source={{ uri: item.uri }}
                                style={{ width: "100%", height: "65%", resizeMode: 'contain', borderRadius: 10 }}
                            />
                            <View style={{ width: "100%", marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center", rowGap: 3 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, color: dark ? "#EDEDED" : "#323232" }}> {item.name} </Text>
                                <Text style={{ fontSize: 10 }}> Lorem ipsum dolor sit. </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 14, color: dark ? "#EDEDED" : "#323232" }}> $ {item.price} </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-between",
        marginBottom: 45
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        height: 230,
        textAlign: 'center',
        width: "100%"
    },
});

export default Products;