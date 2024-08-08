import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { useNavigation } from '@react-navigation/native';

interface PropsImage {
    img: ImageSourcePropType;
    onPress: () => void; // Nueva prop para la función onPress
}

const HeaderPrincipal = (props: PropsImage) => {
    return (
        <View style={styles.header}>
            <Image style={styles.dressmetitulo2Icon} resizeMode="cover" source={require('../imagenes/dressmetitulo.png')} />
            <TouchableOpacity style={styles.customer} onPress={props.onPress}>
                <Image style={styles.icon} resizeMode="cover" source={props.img}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    customer: {
        height: 51,
        left: 40,
        position: "absolute",
        top: 34,
        width: 54
    },
    dressmetitulo2Icon: {
        height: 80,
        left: 126,
        position: "absolute",
        top: 10,
        width: 249
    },
    header: {
        backgroundColor: "#000",
        flex: 1,
        height: 118,
        width: "100%",
        overflow: "hidden"
    },
    icon: {
        height: "100%",
        width: "100%"
    }
});

export default HeaderPrincipal;
