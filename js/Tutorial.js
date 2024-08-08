import * as React from "react";
import {Text, StyleSheet, View, Image, Pressable, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/Estilos";

const Tutorial = () => {
    const navigation = useNavigation();
  	
  	return (
    		<View style={[styles.tutorial, styles.tutorialBg]}>
      			<View style={[styles.headerTutorial, styles.headerTutorialLayout]}>
        				<Text style={styles.registraTusPrendas}>Registra tus prendas</Text>
      			</View>
      			<View style={[styles.containerTutorial, styles.tutorialLayout]}>
        				<Text style={[styles.alTomarLa, styles.alTomarLaClr]}>Al tomar la foto de tus prendas, ten en cuenta que debes tener una buena iluminción para no distorsionar los tonos</Text>
        				<Text style={[styles.lucesYSombras, styles.tenEnCuentaTypo]}>Luces y sombras</Text>
        				<Image style={styles.containerTutorialChild} resizeMode="cover" source={require('../imagenes/bar.png')} />
        				<View style={[styles.ejemploDeImagen, styles.siguientePosition]}>
          					<Image style={[styles.image1Icon, styles.image11Position]} source={require('../imagenes/camisetafondomal.png')}/>
          					<Image style={[styles.image11, styles.image11Position]} source={require('../imagenes/camisetafondobien.png')} />
          					<Image style={styles.checkMarkIconDesignIconBl} source={require('../imagenes/correcto.png')}/>
          					<Image style={styles.removebgPreview1Icon}  source={require('../imagenes/erroneo.png')}/>
        				</View>
        				<Text style={[styles.contrasteConFondos, styles.tenEnCuentaTypo]}>Contraste con fondos:</Text>
        				<Text style={styles.tenEnCuenta}>Ten en cuenta</Text>
                <Pressable style={styles.boton} onPress={()=>{navigation.navigate('Principal')}}>
                    <Text style={[styles.siguiente, styles.siguientePosition]}>siguiente →</Text>
                </Pressable>
                <View style={[styles.mensajeAgregarPrenda, styles.headerTutorialLayout]}>
                    <Image resizeMode="cover" source={require('../imagenes/nubemensaje.png')} />
                </View>
            </View>
            <View >
                <Image style={styles.cameraTutorial} source={require('../imagenes/CameraFotter.png')} />
			</View>
        </View>);
};


export default Tutorial;