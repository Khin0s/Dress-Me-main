import * as React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import styles from "../css/Estilos";
const Perfil = () => {
  	const navigation = useNavigation();
	const boton=()=>{
		navigation.navigate('Principal');
	}

  	return (
    		<Animatable.View animation={"bounceInRight"} style={styles.perfil}>
      			<View style={styles.headerProfile}>
        				<Image style={[styles.dressmelogo23Icon, styles.iconPosition]} source={require('../imagenes/dressmelogo2.jpg')}/>
        				<TouchableOpacity onPress={boton} >
						<Image style={styles.multiplicationIcon} source={require("../imagenes/Multiplication.png")}
						 />
						</TouchableOpacity>
      			</View>
      			<Image style={styles.customerIcon} resizeMode="cover" source={require('../imagenes/Customer.png')} />
      			<View style={styles.registroDeUsuario}>
        				<View style={[styles.inputCorreoRegistro, styles.inputPosition]}>
          					<Text style={styles.description}>Correo Electronico</Text>
          					<View style={styles.inputProfile}>
            						<Text style={[styles.value, styles.valueTypo]} 
									
									/>
          					</View>
        				</View>
        				<View style={[styles.inputNombre, styles.inputPosition]}>
          					<Text style={styles.description}>Nombre</Text>
          					<View style={styles.inputProfile}>
            						<Text style={[styles.value, styles.valueTypo]} />
          					</View>
        				</View>
        				<View style={[styles.inputApellido, styles.inputPosition]}>
          					<Text style={styles.description}>Apellido</Text>
          					<View style={styles.inputProfile}>
            						<Text style={[styles.value, styles.valueTypo]} />
          					</View>
        				</View>
        				<View style={[styles.inputContrasea, styles.inputPosition]}>
          					<Text style={styles.description}>Contraseña</Text>
          					<View style={styles.inputProfile}>
            						<Text style={[styles.value, styles.valueTypo]} />
          					</View>
        				</View>
        				<View style={[styles.buttonGroup, styles.buttonFlexBox]}>
          					<TouchableOpacity style={[styles.buttonProfile, styles.buttonFlexBox]} onPress={()=>{navigation.navigate('EditarPerfil')}}>
            						<Text style={[styles.ingresar, styles.valueTypo]}>Editar Perfil</Text>
          					</TouchableOpacity>
        				</View>
      			</View>
    		</Animatable.View>);
};


export default Perfil;
