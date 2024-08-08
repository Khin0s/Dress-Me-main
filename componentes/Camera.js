import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Dimensions, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Camera } from "react-native-vision-camera";

const CameraFotter = ({ styles: customStyles = {} }) => {
	const navegar = useNavigation();

	const handleCamara = async () => {
		try {
		  const permission = await Camera.requestCameraPermission();
		  console.log('Camera permission:', permission);
	
		  if (permission === 'authorized') {
			navegar.navigate('CamaraPage');
		  } else {
			Alert.alert('Permission Denied', 'Camera permission denied. Please enable it in settings.');
		  }
		} catch (error) {
		  console.error('Error requesting camera permission:', error);
		  Alert.alert('Permission Error', 'There was an error requesting camera permission.');
		}
	  };

	return (
		<View style={[styles.camera, customStyles.camera]}>
			<TouchableOpacity style={[styles.camara1, customStyles.camara1]} onPress={handleCamara}>
				<Image style={[styles.icon, customStyles.icon]} resizeMode="cover" source={require('../imagenes/camara.png')} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	icon: {
		height: "100%",
		width: "100%"
	},
	camara1: {
		position: "absolute",
		left: Dimensions.get('screen').width * 0.42,
		top: Dimensions.get('screen').height * 0.01,
		width: 62,
		height: 60
	},
	camera: {
		top: Dimensions.get('screen').height * 0.1,
		backgroundColor: "#e8e8e8",
		height: 72,
		width: Dimensions.get('screen').width,
		left: 0,
		position: "absolute",
		overflow: "hidden"
	}
});

export default CameraFotter;
