import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/SimpleLineIcons";


const ProductLayout: React.FC<any> = ({ children }) => {
    return (
        <>
            {children}
            <View style={styles.parent}>
                <View style={styles.details}>
                    <View style={styles.totalPice}>
                        <Text>Total Price</Text>
                        <Text style={{color : "#000" , fontSize : 20 , fontWeight : "bold"}}>$ 198.00</Text>
                    </View>
                    <TouchableOpacity style={styles.Btn}>
                        <Icon
                            name="handbag"
                            size={20}
                            color="#FFFFFF"
                        />
                        <Text style={{ color: "#FFFFFF" }}> Add To Cart </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    parent: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 0,
        backgroundColor: "#FFFFFF",
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "98%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
    },
    Btn: {
        width: "60%",
        backgroundColor: "#000",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    totalPice: {
        width: "30%",
        padding: 5, 
        textAlign : "center"
    }
})

export default ProductLayout;