import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Pressable, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
import CameraFotter from "../componentes/Camera";
import styles from "../css/Estilos";

const Closet = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState("TODOS");
    const showCamiseta = () => {
        setTitle('Camiseta');
    };
    const showChaqueta = () => {
        setTitle('Chaqueta/Saco');
    };
    const showPantalon = () => {
        setTitle('Pantalón/Short');
    };
    const showFalda = () => {
        setTitle('Falda');
    };
    return (
        <View style={styles.closetContainer}>
            <View style={styles.headerCloset}>
                <HeaderPrincipal
                    img={require("../imagenes/home.jpg")}
                    onPress={() => { navigation.navigate('Principal') }}
                />
            </View>
            <View style={[styles.contenedorClosetTodo, styles.cameraPosition]}>
                <Text style={styles.todo}>{title}</Text>
                <View style={[styles.bottomNavigation, styles.header3Position]}>
                    <Pressable style={styles.sectionIcon} onPress={showCamiseta}>
                        <Image style={styles.icon1} resizeMode="cover" source={require('../imagenes/T-Shirt.png')} />
                        <Text style={[styles.label1, styles.labelTypo]}>Camiseta</Text>
                    </Pressable>
                    <Pressable style={styles.sectionIcon} onPress={showChaqueta}>
                        <Image style={styles.icon1} resizeMode="cover" source={require('../imagenes/jacket.png')} />
                        <Text style={[styles.label2, styles.labelTypo]}>Chaqueta/Saco</Text>
                    </Pressable>
                    <Pressable style={styles.sectionIcon} onPress={showPantalon}>
                        <Image style={styles.icon1} resizeMode="cover" source={require('../imagenes/Trousers.png')} />
                        <Text style={[styles.label2, styles.labelTypo]}>Pantalón/Short</Text>
                    </Pressable>
                    <Pressable style={styles.sectionIcon} onPress={showFalda}>
                        <Image style={styles.icon1} resizeMode="cover" source={require('../imagenes/Skirt.png')} />
                        <Text style={[styles.label2, styles.labelTypo]}>Falda</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.cameraContainer}>
                <CameraFotter styles={styles} />
            </View>
        </View>
    );
};


export default Closet;
