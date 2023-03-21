import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import HomeLayout from "../layout/HomeLayout";

import Icon from "react-native-vector-icons/AntDesign"
import IconFontAwesome from "react-native-vector-icons/FontAwesome"

type ulListType = {
    id: number,
    icon: string,
    title: string
}

const List: ulListType[] = [
    { id: 1, icon: "archive", title: "Personal Details" },
    { id: 2, icon: "shopping-bag", title: "My Order" },
    { id: 3, icon: "heart", title: "My Favorits" },
    { id: 4, icon: "file", title: "Privacy Policy" },
]

const Profile: React.FC<any> = ({ navigation }) => {
    return (
        <HomeLayout navigation={navigation}>
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
                    <View style={{ position: "relative", elevation: 10 }}>
                        <Image
                            source={{ uri: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg' }}
                            style={{ width: 100, height: 100, borderRadius: 20 }}
                        />
                        <View style={{ position: "absolute", right: -10, bottom: -10, backgroundColor: "#FFFFFF", elevation: 10, padding: 8, borderRadius: 10 }}>
                            <Icon
                                name="camerao"
                                size={20}
                                color="#000"
                            />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold", color: "#000" }}> Upload Image </Text>
                </View>
                <View style={styles.parentBox}>
                    {
                        List.map((i: ulListType) =>
                            <TouchableOpacity key={i.id}>
                                <View style={styles.box}>
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                        <IconFontAwesome
                                            style={styles.icon}
                                            name={i.icon}
                                            size={20}
                                            color="#000"
                                        />
                                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000", marginLeft: 5 }}>{i.title}</Text>
                                    </View>
                                    <IconFontAwesome
                                        name="chevron-right"
                                        size={15}
                                        color="#000"
                                    />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        </HomeLayout >
    );
}


const styles = StyleSheet.create({
    parentBox: {
        width: '90%',
        padding: 5,
        borderWidth: 1,
        borderColor: "#EDEDED",
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: 'auto',
        display: "flex",
        rowGap: 10
    },
    box: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
    },
    icon: {
        backgroundColor: "#EDEDED",
        padding: 12,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Profile;