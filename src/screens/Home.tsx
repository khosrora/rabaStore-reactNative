import { useState } from "react"
import { Image, Text, View, ScrollView, FlatList } from "react-native";
import HomeLayout from "../layout/HomeLayout";


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-1455711e29d72',
        title: 'Third Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd962-145571e29d72',
        title: 'Third Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    },
    {
        id: '58694da0f-3da1-4271f-bd96-145571e29d72',
        title: 'Third Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    },
    {
        id: '58694aa0f-3da1-4271f-bd96-145571e29d72',
        title: 'Third Item',
        uri: "https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg"
    }
]


const Home = () => {

    const [images, setimages] = useState([
        'https://artlogic-res.cloudinary.com/w_2400,h_2400,c_limit,f_auto,fl_lossy/artlogicstorage/sbg/images/view/765ae082ebb6819d44911cd6dd4b87e0j.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqOlqUJPe6qs2Kccw_cWQEOLmCJIprqWZOSYyCTO16XLjB9qunrSwMgeZHLFK4I-3sTQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJUFMfVKL6E56SV67TEzwkv_zwTCWANc_bIP4WpPir_8IQdkYvysp7stti7dul256mY8&usqp=CAU',
    ]);

    return (
        <HomeLayout>
            <View style={{ backgroundColor: "#FFFFFF", flex: 1, padding: 10 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 20 }}> Our Fashion APP </Text>


                <FlatList
                    style={{ marginTop: 20 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    renderItem={({ item, index }) => (
                        <Image source={{ uri: item }} /* Use item to set the image source */
                            key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
                            style={{
                                width: 300,
                                height: 200,
                                borderWidth: 2,
                                resizeMode: 'contain',
                                margin: 5,
                                borderRadius: 10
                            }}
                        />
                    )}
                />
            </View>
        </HomeLayout>
    );
}

export default Home;