import React from "react";

import HomeLayout from "../layout/HomeLayout";
import Products, { dataType } from "../components/Products";
import { ScrollView, Text, View } from "react-native";


let productsData: dataType[] = [
    {
        id: 1, uri: "https://m.media-amazon.com/images/I/41yfd7q8y+L._AC_.jpg", name: 'RA - TURQUOISE', price: 50.00
    },
    {
        id: 2, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media-library-service-media/a16a90bd-0cad-4392-97ad-4e150ec4c698.__UX300_V1___.jpg", name: 'RA - Sun', price: 100.00
    },
    {
        id: 3, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1D14QmF9RoNjkBUEWX0-WdgDind1r1CVfsAUdTwASe6iTX9W0--8GaZdiZndfqn6PWlc&usqp=CAU", name: 'RA - Summer', price: 50.00
    },
    {
        id: 4, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71T4wLvlwLL._AC_UF1000,1000_QL80_.jpg", name: 'RA - BlackText', price: 150.00
    },
    {
        id: 5, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41TYbfg8DrL.__AC_SR166,182___.jpg", name: 'RA - Desc', price: 350.50
    },
    {
        id: 6, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41mKqnAD1pL._QL92_SH45_SS200_.jpg", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 7, uri: "https://m.media-amazon.com/images/I/41bGvneE83L._AC_SY580_.jpg", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 8, uri: "https://m.media-amazon.com/images/I/51Cd6ZPLuvL._SS200_.jpg", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 9, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81DMA+T-yxL._AC_SX425_.jpg", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 10, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61EMPXQjjaL.jpg", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 11, uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDyHmEDtS0unZIHPCd7Fhr9AbPsJD-5YZnP6UXvy6cBqIFsE8K8w_3a6TYwZbsj1LpdQ&usqp=CAU", name: 'RA - NoBody', price: 200.00
    },
    {
        id: 12, uri: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81WGjz9LLkL._SX679_.jpg", name: 'RA - NoBody', price: 200.00
    },
]


const ProductsCategories: React.FC<any> = ({ navigation }) => {
    return (
        <HomeLayout navigation={navigation}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: "bold", color: "#000" }}> Bags </Text>
                    </View>
                    <Products data={productsData} navigation={navigation} />
                </View>
            </ScrollView>
        </HomeLayout>
    );
}

export default ProductsCategories;