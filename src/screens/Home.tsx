import { Text, View } from "react-native";
import HomeLayout from "../layout/HomeLayout";




const Home = () => {
    return (
        <HomeLayout>
            <View style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 10 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                <Text style={{ fontSize: 13, fontWeight: "500" , marginLeft: 20 }}> Our Fashion APP </Text>
            </View>
        </HomeLayout>
    );
}

export default Home;