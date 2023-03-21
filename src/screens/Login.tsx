import React from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import HomeLayout from "../layout/HomeLayout"




const Login: React.FC<any> = ({ navigation }) => {
    return (
        <HomeLayout navigation={navigation}>
            <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10, display: "flex", justifyContent: "center", alignItems: 'center', rowGap: 50 }}>
                <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                    <Text style={{ fontSize: 15 }}> Please login to continue our app </Text>
                </View>
                <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ fontSize: 10, fontWeight: "normal", color: "#000" }}> Email </Text>
                    <TextInput
                        placeholder="youremail@email.com"
                        style={{ borderBottomWidth: 1, borderBottomColor: "#EDEDED", padding: 0, width: "100%" }}
                    />
                </View>
                <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                    <Text style={{ fontSize: 10, fontWeight: "normal", color: "#000" }}> Password </Text>
                    <TextInput
                        placeholder="************"
                        style={{ borderBottomWidth: 1, borderBottomColor: "#EDEDED", padding: 0, width: "100%" }}
                    />
                </View>
                <View style={{ width: "80%" }}>
                    <Button
                        onPress={() => console.log("object")}
                        title="Submit"
                        color="#000"
                    />
                    <Text style={{ fontSize: 10, marginTop: 5 }}> Lorem ipsum dolor sit  consectetur adipisicing elit. Minus, odit. </Text>
                </View>
            </View>
        </HomeLayout>
    );
}

export default Login;