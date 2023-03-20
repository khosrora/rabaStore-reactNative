import React from "react";
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";

import Icon from "react-native-vector-icons/AntDesign"


const HomeLayout: React.FC<any> = ({ children }) => {
    return (
        <>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, backgroundColor: "#FFFFFF" }}>
                <Icon
                    name="gift"
                    size={30}
                    color="#000"
                />
                <Image
                    source={{ uri: 'https://img.freepik.com/free-icon/man_318-860789.jpg' }}
                    style={{ width: 30, height: 30, borderRadius: 100 / 2 }}
                />
            </View>
            {children}
            <View style={styles.navigationBottom}>
                <View style={styles.child}>
                    <TouchableHighlight>
                        <View style={styles.home}>
                            <Icon
                                name="home"
                                size={20}
                                color="#FFFF"
                                style={{ backgroundColor: "#000", padding: 5, borderRadius: 100 / 2, zIndex: 2 }}
                            />
                            <Text style={{ backgroundColor: "#EDEDED", paddingBottom: 3, paddingTop: 3, paddingRight: 10, paddingLeft: 10, borderTopRightRadius: 20, borderBottomRightRadius: 20, marginLeft: -10 }}> Home </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => console.log("object")}>
                        <Icon
                            name="shoppingcart"
                            size={20}
                            color="#000"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => console.log("object")}>
                        <Icon
                            name="bells"
                            size={20}
                            color="#000"
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => console.log("object")}>
                        <Icon
                            name="user"
                            size={20}
                            color="#000"
                        />
                    </TouchableHighlight>
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
    child: {
        backgroundColor: "#FFFFFF",
        padding: 5,
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