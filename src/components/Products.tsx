import { FlatGrid } from 'react-native-super-grid';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import React from 'react';




const Products = () => {

    const [items, setItems] = React.useState([
        { id: 1, uri: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6f%2Fd8%2F6fd840c593c71414d36e9158cd5dbdf97696e33b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D", name: 'TURQUOISE', code: '#1abc9c' },
        { id: 2, uri: "https://img01.ztat.net/article/spp-media-p1/30df7f2e4e2a4e9699c32450cc6e08c6/6e5b7b10b51845e79cffdcdfd2fc0f1a.jpg?imwidth=762", name: 'RA - Sun', code: '$100.00' },
        {
            id: 3, uri: "https://img01.ztat.net/article/spp-media-p1/088eda7700344cb9a9dba8b726bbe34e/ba314707f3ca401a9c544285f040f46e.jpg?imwidth=1800", name: 'RA - Summer', code: '$50.00'
        },
        {
            id: 4, uri: "https://img01.ztat.net/article/spp-media-p1/da6b508d6e213e9e80099570ec10862f/e6c11bc8c2c642e6961bbf53907956db.jpg?imwidth=156", name: 'RA - BlackText', code: '$150.00'
        },
        {
            id: 5, uri: "https://img01.ztat.net/article/spp-media-p1/81e6182f191946a288176d99f8999ceb/26d010ad8a9f436e9055fe21b9eaae27.jpg?imwidth=1800", name: 'RA - Desc', code: '$350.50'
        },
        {
            id: 6, uri: "https://img01.ztat.net/article/spp-media-p1/d23a326001f248a08586090595437d71/5ce41a3b9d044ec89d70baab416763bf.jpg?imwidth=762", name: 'RA - NoBody', code: '$200.00'
        },
    ]);

    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => console.log("test")}>
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.uri }}
                            style={{ width: "100%", height: "65%", resizeMode: 'contain', borderRadius: 10 }}
                        />
                        <View style={{ width: "100%", marginTop : 10 ,display: "flex", justifyContent: "center", alignItems: "center", rowGap: 3 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: "#000" }}> {item.name} </Text>
                            <Text style={{ fontSize: 10 }}> Lorem ipsum dolor sit. </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color: "#000" }}> {item.code} </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        marginBottom: 60
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        height: 230,
        textAlign: 'center'
    },
});

export default Products;