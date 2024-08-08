import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {Image, StyleSheet, View, Text, Dimensions, Touchable} from "react-native";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
//import styles from "../css/Estilos";


const { width, height } = Dimensions.get("window");

const EditarPerfil = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.editarPerfil}>
            <View style={styles.headerEditarperfil}>
                <HeaderPrincipal 
                    img={require("../imagenes/home.jpg")}
                    onPress={() => { navigation.navigate('Principal')}}
                />
            </View>
            <Animatable.View animation={"zoomInUp"} style={styles.formularioEditarPerfil}>
                <Text style={styles.editarPerfil1}>EDITAR PERFIL</Text>
                <View style={styles.registroDeUsuario}>
                    <View style={styles.inputCorreoRegistro}>
                        <View style={styles.inputEprofile}>
                            <TextInput 
                                placeholder="Correo Electronico"
                                placeholderTextColor="#a9a9a9"
                                style={styles.valueProfile}
                            />
                        </View>
                    </View>
                    <View style={styles.inputNombre}>
                        <View style={styles.inputEprofile}>
                            <TextInput 
                                placeholder="Nombre"
                                placeholderTextColor="#a9a9a9"
                                style={styles.valueProfile}/>
                        </View>
                    </View>
                    <View style={styles.inputApellido}>
                        <View style={styles.inputEprofile}>
                            <TextInput
                                placeholder="Apellido"
                                placeholderTextColor="#a9a9a9"
                                style={styles.valueProfile}/>
                        </View>
                    </View>
                    <View style={styles.inputContrasea}>
                        <View style={styles.inputEprofile}>
                            <TextInput
                                placeholder="Contraseña" 
                                placeholderTextColor="#a9a9a9"
                                style={styles.valueProfile}/>
                        </View>
                    </View>
                    <View style={styles.inputConfirmarContrasea}>
                        <View style={styles.inputEprofile}>
                            <TextInput
                                placeholder="Confirmar Contraseña" 
                                placeholderTextColor="#a9a9a9"
                                style={styles.valueProfile}/>
                        </View>
                    </View>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.buttonEd} onPress={()=>{navigation.navigate('Principal')}}>
                            <Text style={styles.ingresar}>Actualizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>   
        </View>
    );
};

const styles = StyleSheet.create({
    valueTypo: {
        textAlign: "left",
        fontFamily: "Inter-Regular",
        lineHeight: 16,
        fontSize: 16,
        color: "#000",
    },
    headerEditarperfil: {
        backgroundColor: "#000",
        height: Dimensions.get("screen").height * 0.15,
        width: Dimensions.get("screen").width*1,
        position: "absolute",
        overflow: "hidden"
    },
    editarPerfil1: {
        top: Dimensions.get("screen").height * 0.03,
        left: Dimensions.get("screen").width * 0.24,
        color: "#000",
		fontSize:35,
        // width: width * 0.32,
        // height: height * 0.02,
        textShadowColor: "rgba(0, 0, 0, 0.25)",
        textShadowOffset: {
            width: 0,
            height: height * 0.005
        },
        textShadowRadius: 4,
        position: "absolute"
    },
    valueProfile: {
        color: "#000",
        flex: 1
    },
    inputEprofile: {
        alignSelf: "stretch",
        backgroundColor: "#fff",
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.01,
        minWidth: Dimensions.get("screen").width * 0.64,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 1,
        overflow: "hidden"
    },
    inputCorreoRegistro: {
        top: Dimensions.get("screen").height * 0.07,
        width: Dimensions.get("screen").width * 0.73,
        left: width * 0.08,
        position: "absolute"
    },
    inputNombre: {
        top: Dimensions.get("screen").height *  0.17,
        width: Dimensions.get("screen").width * 0.73,
        left: width * 0.08,
        position: "absolute"
    },
    inputApellido: {
        top: Dimensions.get("screen").height *  0.27,
        width: Dimensions.get("screen").width * 0.73,
        left: width * 0.08,
        position: "absolute"
    },
    inputContrasea: {
        top: Dimensions.get("screen").height *  0.37,
        width:Dimensions.get("screen").width * 0.73,
        left: width * 0.08,
        position: "absolute"
    },
    inputConfirmarContrasea: {
        top: Dimensions.get("screen").height *  0.47,
        width: Dimensions.get("screen").width * 0.73,
        left: Dimensions.get('screen').width * 0.08,
        position: "absolute"
    },
    ingresar: {
        color: "#f5f5f5",
        fontFamily: "Inter-Regular",
        lineHeight: 16,
        fontSize: 16,
    },
    // Boton de editar perfil
        buttonEd: {
        borderStyle: "solid",
        borderColor: "#2c2c2c",
        borderWidth: 1,
        padding: height * 0.015,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: "#000",
        overflow: "hidden",
        flex: 1,
        alignItems: "center",
        flexDirection: "row"
    },
    buttonGroup: {
        top: Dimensions.get("window").height * 0.57,
        paddingHorizontal: width * 0.01,
        paddingVertical: height * 0.04,
        width: width * 0.73,
        left: width * 0.08,
        position: "absolute",
        justifyContent: "center"
    },
    registroDeUsuario: {
        top: height * 0.04,
        left: width * 0.06,
        width: width * 0.88,
        height: height * 0.7,
        position: "absolute",
        overflow: "hidden"
    },
    formularioEditarPerfil: {
        top: height * 0.15,
        height: height * 0.76,
        //width: width,
        left: 0,
        backgroundColor: "#fff"
    },
    editarPerfil: {
        height: height,
        overflow: "hidden",
        //width: width,
        flex: 1,
        backgroundColor: "#fff"
    }
});

export default EditarPerfil;
