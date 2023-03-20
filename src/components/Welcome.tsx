import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch } from "react-redux";
import { welcomePageAction } from "../redux/global/action";

type PagesType = {
    id: number,
    image: string | any,
    title: string,
    short_desc: string,
    desc: string,
}

const pages: PagesType[] = [
    {
        id: 1,
        image: require('../assets/images/28849id_026_medium.jpg'),
        title: "20% Discount",
        short_desc: "New Arrival Product",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae, non neque laboriosam deserunt expedita porro nihil mollitia error vel."
    },
    {
        id: 2,
        image: require('../assets/images/courtesy-of-the-criterion-collection_wide-418434567657ba2f344a67f86ebc234c2930d875.jpg'),
        title: "Take Advantage",
        short_desc: "Of The Offer Shopping",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae, non neque laboriosam deserunt expedita porro nihil mollitia error vel."
    },
    {
        id: 3,
        image: require('../assets/images/la-noired.jpg'),
        title: "All Types Offers",
        short_desc: "Within Your Reach",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis recusandae, non neque laboriosam deserunt expedita porro nihil mollitia error vel."
    },
]


const Welcome = () => {

    const dispatch: any = useDispatch();

    const [page, setPage] = useState<number>(1);

    const handleNextPage = () => {
        if (page === 3) dispatch(welcomePageAction(false))
        else setPage(page + 1)

    }

    return (
        <>
            {
                pages.map((i: PagesType) => {
                    if (i.id === page) {
                        return <View key={i.id} style={styles.parent}>
                            <View style={styles.Image}>
                                <Image style={{ height: "100%", width: "100%" }} source={i.image} />
                            </View>
                            <View style={styles.descs}>
                                <Text style={{ fontSize: 25, fontWeight: "bold", color: "#2D2727" }}> {i.title} </Text>
                                <Text style={{ fontSize: 35, fontWeight: "bold", color: "#2D2727", marginTop: 5 }}> {i.short_desc} </Text>
                                <Text style={{ marginTop: 5, lineHeight: 30 }}>
                                    {i.desc}
                                </Text>
                            </View>
                            <View style={styles.next}>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', alignItems: "center", columnGap: 10 }}>
                                    <TouchableOpacity onPress={() => setPage(1)} style={{ padding: 3, borderRadius: 100 / 2, backgroundColor: "#2D2727" }}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setPage(2)} style={{ padding: 3, borderRadius: 100 / 2, backgroundColor: "#2D2727" }}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => setPage(3)} style={{ padding: 3, borderRadius: 100 / 2, backgroundColor: "#2D2727" }}></TouchableOpacity>
                                </View>
                                {
                                    page === 3 ?
                                        <TouchableHighlight
                                            onPress={() => handleNextPage()}
                                            style={{ backgroundColor: "#000", padding: 10, borderRadius: 100 / 2, display: "flex", justifyContent: "center", alignContent: "center" }}
                                        >
                                            <Icon
                                                name="home"
                                                size={30}
                                                color="white"
                                            />
                                        </TouchableHighlight>
                                        :
                                        <TouchableHighlight
                                            onPress={() => handleNextPage()}
                                            style={{ backgroundColor: "#000", padding: 10, borderRadius: 100 / 2, display: "flex", justifyContent: "center", alignContent: "center" }}
                                        >
                                            <Icon
                                                name="arrowright"
                                                size={30}
                                                color="white"
                                            />
                                        </TouchableHighlight>
                                }
                            </View>
                        </View>
                    }
                })
            }
        </>
    );
}

const styles = StyleSheet.create({
    parent: {
        height: "100%",
        padding: 20,
        backgroundColor: "#FFFFFF",
    },
    Image: {
        flex: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        overflow: "hidden"
    },
    descs: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 30
    },
    next: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: 50,
        padding: 10
    }
})


export default Welcome;