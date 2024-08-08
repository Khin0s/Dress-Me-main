import * as React from "react";
import {Image, StyleSheet, TouchableOpacity, View, Text, Dimensions} from "react-native";
import { useNavigation } from '@react-navigation/native';
import HeaderPrincipal from '../componentes/HeaderPrincipal'
import CameraFotter from "../componentes/Camera";
import styles from "../css/Estilos";

const Favoritos = () => {
    const navigation = useNavigation();
  	return (
    		<View style={styles.favoritosContainer}>
				<View style={[styles.header2, styles.header2Position]}>
				  <HeaderPrincipal img={require("../imagenes/home.jpg")}
				  onPress={() => { navigation.navigate('Principal')}}
				  />
      			</View>
      			<View style={[styles.tituloFavoritos, styles.header2Position]}>
        				<Text style={[styles.tusFavoritos, styles.favorito12FlexBox]}>TUS FAVORITOS</Text>
      			</View>
      			<View style={[styles.contenedorFavoritos, styles.cameraPosition]}>
        				<View style={[styles.favorito4, styles.favoritoLayout]}>
          					<View style={[styles.favorito1, styles.iconLayout]} />
          					<View style={[styles.tituloFavorito, styles.favoritoBorder]}>
            						<Text style={[styles.favorito11, styles.favorito11FlexBox]}>favorito 4</Text>
          					</View>
          					<View style={[styles.outfitGuardadoFavorito, styles.favoritoBorder]} />
        				</View>
        				<View style={[styles.favorito3, styles.favoritoLayout]}>
          					<View style={[styles.favorito1, styles.iconLayout]} />
          					<View style={[styles.tituloFavorito, styles.favoritoBorder]}>
            						<Text style={[styles.favorito11, styles.favorito11FlexBox]}>favorito 3</Text>
          					</View>
          					<View style={[styles.outfitGuardadoFavorito, styles.favoritoBorder]} />
        				</View>
        				<View style={[styles.favorito2, styles.favoritoPosition]}>
          					<View style={[styles.favorito1, styles.iconLayout]} />
          					<View style={[styles.tituloFavorito, styles.favoritoBorder]}>
            						<Text style={[styles.favorito11, styles.favorito11FlexBox]}>favorito 2</Text>
          					</View>
          					<View style={[styles.outfitGuardadoFavorito, styles.favoritoBorder]} />
        				</View>
        				<View style={[styles.favorito16, styles.favoritoPosition]}>
          					<View style={[styles.favorito1, styles.iconLayout]} />
          					<View style={[styles.tituloFavorito, styles.favoritoBorder]}>
            						<Text style={[styles.favorito11, styles.favorito11FlexBox]}>favorito 1</Text>
          					</View>
          					<View style={[styles.outfitGuardadoFavorito, styles.favoritoBorder]} />
        				</View>
      			</View>
      			
				  <CameraFotter/>
				
				
      			
    		</View>);
};



export default Favoritos;