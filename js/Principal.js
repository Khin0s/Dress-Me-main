import * as React from "react";
import { Image, Pressable, View, Text} from "react-native";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
import CameraFotter from "../componentes/Camera";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';
import styles from "../css/Estilos";//import styles from "../css/Estilos";

const VistaPrincipal = () => {
	const navigation = useNavigation();

	return (
		<Animatable.View animation={"fadeIn"} style={styles.vistaPrincipal}>
			<View style={styles.header}>
				<HeaderPrincipal 
					img={require("../imagenes/Profile.png")} 
					onPress={() => { navigation.navigate('Profile')}} 
				/>
			</View>
			<View style={[styles.vistaPrincipalContenedor, styles.headerPosition]}>
				<Pressable style={[styles.closet, styles.closetLayout]} onPress={()=>{ navigation.navigate('Closet')}}>
					<Image style={styles.closet21} resizeMode="cover" source={require('../imagenes/closet.png')} />
					<Text style={[styles.closet1, styles.closet1Typo]}>CLOSET</Text>
				</Pressable>
				<Pressable style={[styles.favoritos, styles.closetLayout]} onPress={()=>{navigation.navigate('Favoritos')}}>
					<Text style={[styles.favoritos1, styles.closet1Typo]}>FAVORITOS</Text>
					<Image style={styles.favoritoscorazon1Icon} resizeMode="cover" source={require('../imagenes/favoritoscorazon.png')} />
				</Pressable>
				<Pressable style={[styles.sugerenciasDeOutfit, styles.closetLayout]} onPress={()=>{navigation.navigate('Sugerencias')}}>
					<Text style={[styles.sugerenciasDeOutfit1, styles.closet1Typo]}>{'SUGERENCIAS \nDE OUTFIT'}</Text>
					<Image style={styles.gancho1Icon} resizeMode="cover" source={require('../imagenes/gancho.png')} />
				</Pressable>
			</View>
			<CameraFotter/>
		</Animatable.View>
	);
};


	

export default VistaPrincipal;
