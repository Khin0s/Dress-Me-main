import * as React from "react";
import {Image, StyleSheet, Pressable, View, Dimensions} from "react-native";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const NuevoOutfit = () => {
  	const navigation = useNavigation();
  	return (
    		<View style={styles.nuevoOutfit}>
      			<View style={styles.header}>
        <HeaderPrincipal 
          img={require("../imagenes/home.jpg")}
          onPress={() => { navigation.navigate('Principal')}}
        />
      </View>
      			<View style={[styles.outfitGenerado, styles.cameraLayout]}>
                    <TouchableOpacity>
        				<Image style={[styles.checkMarkIcon, styles.iconLayout]} source={require('../imagenes/Check.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
        				<Image style={[styles.refreshIcon, styles.iconLayout]} source={require('../imagenes/regenerate.png')} />
                        </TouchableOpacity>
        				<View style={styles.favorito1}>
          					<View style={[styles.favorito11, styles.iconLayout1]} />
          					<View style={[styles.tituloFavorito, styles.favoritoBorder]} />
          					<View style={[styles.outfitFavorito, styles.favoritoBorder]} />
        				</View>
      			</View>
      			{/* <View style={styles.cameraContainer}>
        <CameraFotter styles={styles} />
      </View> */}
    		</View>);
};

const styles = StyleSheet.create({
  	cameraLayout: {
    		width: 375,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	iconLayout: {//iconos de check y regenerate
    		height: 90,
    		width: 90,
    		top: 535,
    		position: "absolute"
  	},
  	iconLayout1: {
    		height: "100%",
    		width: "100%"
  	},
  	favoritoBorder: {
    		borderWidth: 1,
    		borderColor: "#3685cd",
    		borderStyle: "solid",
    		borderRadius: 15,
    		left: "6.9%",
    		right: "5.53%",
    		width: "87.57%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	dressmetitulo3Icon: {
    		top: 19,
    		left: 126,
    		width: 249,
    		height: 80,
    		position: "absolute"
  	},
  	homePage: {
    		left: 39,
    		top: 33,
    		width: 54,
    		height: 51,
    		position: "absolute"
  	},
  	header3: {
    		top: 0,
    		left: 0,
    		backgroundColor: "#000",
    		height: 118
  	},
  	checkMarkIcon: {
    		left: 81
  	},
  	refreshIcon: {
    		left: 216
  	},
  	favorito11: {
    		top: "0%",
    		right: "0%",
    		bottom: "0%",
    		left: "0%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	tituloFavorito: {
    		height: "11.51%",
    		top: "2.78%",
    		bottom: "85.71%"
  	},
  	outfitFavorito: {
    		height: "78.98%",
    		top: "17.86%",
    		bottom: "3.17%"
  	},
  	favorito1: {
    		top: 32,
    		left: 37,
    		width: 301,
    		height: 489,
    		position: "absolute"
  	},
  	outfitGenerado: {
    		marginLeft: -187.5,
    		top: 119,
    		left: "50%",
    		height: 621
  	},
  	camara1: {
        left: Dimensions.get('screen').width * 0.42,
        top: Dimensions.get('screen').height * 0.01,
        width: 62,
        height: 60,
        position: "absolute"
      },
      camera: {
        top: Dimensions.get('screen').height * 0.875,
        backgroundColor: "#e8e8e8",
        height: 72,
        width: Dimensions.get('screen').width,
        left: 0,
        position: "absolute",
        overflow: "hidden"
      },
  	nuevoOutfit: {
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 812,
    		overflow: "hidden",
    		width: "100%"
  	},
      header: {
        backgroundColor: "#000",
        height: Dimensions.get('screen').height * 0.13,
        top: 0,
        width: Dimensions.get('screen').width,
        left: 0,
        position: "absolute",
        overflow: "hidden"
      },
});

export default NuevoOutfit;
