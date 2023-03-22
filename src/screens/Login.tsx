import React from "react";
import { Button, GestureResponderEvent, Text, TextInput, TouchableOpacity, View } from "react-native";
import HomeLayout from "../layout/HomeLayout"
import * as Yup from 'yup';
import {
    Formik,
} from 'formik';

interface MyFormValues {
    email: string;
    phoneNumber: string
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
});

const Login: React.FC<any> = ({ navigation }) => {
    const initialValues: MyFormValues = { email: "", phoneNumber: "" };
    return (
        <HomeLayout navigation={navigation}>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    console.log({ values });
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10, display: "flex", justifyContent: "center", alignItems: 'center', rowGap: 50 }}>
                        <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}> Welcome </Text>
                            <Text style={{ fontSize: 15 }}> Please login to continue our app </Text>
                        </View>
                        <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                            <Text style={{ fontSize: 10, fontWeight: "normal", color: "#000" }}> Email </Text>
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="youremail@email.com"
                                style={{ borderBottomWidth: 1, borderBottomColor: "#EDEDED", padding: 0, width: "100%" }}
                            />
                            {errors.email && touched.email ? (
                                <Text style={{ color: "#E21818", fontSize: 10 }} >{errors.email}</Text>
                            ) : null}
                        </View>
                        <View style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto", marginRight: "auto" }}>
                            <Text style={{ fontSize: 10, fontWeight: "normal", color: "#000" }}> Password </Text>
                            <TextInput
                                onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber}
                                placeholder="09*********"
                                style={{ borderBottomWidth: 1, borderBottomColor: "#EDEDED", padding: 0, width: "100%" }}
                            />
                            {errors.phoneNumber && touched.phoneNumber ? (
                                <Text style={{ color: "#E21818", fontSize: 10 }} >{errors.phoneNumber}</Text>
                            ) : null}
                        </View>
                        <TouchableOpacity onPress={handleSubmit as unknown as (e: GestureResponderEvent) => void} style={{ width: "80%" }}>
                            <View style={{ backgroundColor: "#000", padding: 10, width: "100%", borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: "#FFFFFF" }}> Submit </Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, marginTop: 5 }}>
                            Lorem ipsum dolor sit  consectetur adipisicing elit. Minus, odit.
                        </Text>
                    </View>
                )}
            </Formik>
        </HomeLayout>
    );
}

export default Login;