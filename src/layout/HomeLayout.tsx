import React from "react";
import { StyleSheet, Text, TouchableOpacity, View , Image } from "react-native";

import Icon from "react-native-vector-icons/AntDesign"


const HomeLayout: React.FC<any> = ({ dark, children, navigation }) => {
    return (
        <>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, backgroundColor: dark ? "#000" : "#FFFFFF" }}>
                <Icon
                    name="bars"
                    size={30}
                    color={`${dark ? "#EDEDED" : "#323232"}`}
                    onPress={() => navigation.navigate('Categories')}
                />
                <Image
                    source={{ uri: 'https://img.freepik.com/free-icon/man_318-860789.jpg' }}
                    style={{ width: 30, height: 30, borderRadius: 100 / 2 }}
                />
            </View>
            {children}
            <View style={[styles.navigationBottom, dark ? styles.navigationBottomBackground : null]}>
                <View style={styles.child}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={styles.home}>
                            <Icon
                                name="home"
                                size={20}
                                color="#FFFF"
                                style={{ backgroundColor: "#000", padding: 5, borderRadius: 100 / 2, zIndex: 2 }}
                            />
                            <Text style={{ backgroundColor: dark ? "#323232" : "#EDEDED", paddingBottom: 3, paddingTop: 3, paddingRight: 10, paddingLeft: 10, borderTopRightRadius: 20, borderBottomRightRadius: 20, marginLeft: -10 }}> Home </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
                        <Icon
                            name="shoppingcart"
                            size={20}
                            color={`${dark ? "#EDEDED" : "#323232"}`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Icon
                            name="bells"
                            size={20}
                            color={`${dark ? "#EDEDED" : "#323232"}`}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Icon
                            name="user"
                            size={20}
                            color={`${dark ? "#EDEDED" : "#323232"}`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    navigationBottom: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: 10,
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    navigationBottomBackground: {
        backgroundColor: "#000",
    },
    child: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    home: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default HomeLayout;