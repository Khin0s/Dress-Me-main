import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from '../css/Estilos';


const CamaraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [flash, setFlash] = useState('off');
  const [currentDevice, setCurrentDevice] = useState('back');
  const devices = useCameraDevices();
  const camera = useRef(null);
  const navigation = useNavigation();
  const device = currentDevice === 'back' ? devices.back : devices.front;

  const takePhoto = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto({
          flash: flash,
        });
        console.log('Photo Info:', photo);
        setIsActive(false); // Detener la cámara después de tomar la foto
        navigation.navigate('PhotoPreview', { photoUri: photo.path }); // Navegar a la previsualización
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log('Camera permission:', permission);
      setHasPermission(permission === 'authorized');
    };
    requestPermission();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setIsActive(true);
      return () => setIsActive(false);
    }, [])
  );

  const handleExit = () => {
    setIsActive(false); // Detener la cámara antes de salir
    navigation.navigate('Principal'); // Redirigir a la pantalla 'Principal'
  };

  const toggleFlash = () => {
    setFlash((prevFlash) => {
      if (prevFlash === 'off') return 'on';
      if (prevFlash === 'on') return 'auto';
      return 'off';
    });
  };

  const switchCamera = () => {
    setCurrentDevice((prevDevice) => (prevDevice === 'back' ? 'front' : 'back'));
  };

  if (hasPermission === null) return <Text>Cargando...</Text>;
  if (hasPermission === false) return <Text>Sin permisos de camara</Text>;
  if (device == null) return <Text>No se encuentra la camara</Text>;

  return (
    <View style={styles.Camarapagecontainer}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        ref={camera}
        photo={true}
      />
      <Pressable
        onPress={takePhoto}
        style={styles.captureButton}
      >
        <Text style={styles.buttonTextCamera}></Text>
      </Pressable>
      <View style={styles.controlContainer}>
        <TouchableOpacity onPress={switchCamera} style={styles.controlButton}>
          <Image source={require('../imagenes/271724.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlash} style={styles.controlButton}>
          <Text style={styles.controlText}>Flash: {flash === 'off' ? 'Off' : flash === 'on' ? 'On' : 'Auto'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.exitButton}
        onPress={handleExit}
      >
        <Text style={styles.exitButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CamaraPage;
