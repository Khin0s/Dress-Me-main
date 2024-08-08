import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../css/Estilos';

const PhotoPreview = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { photoUri } = route.params;

  const goToNextSection = () => {
    navigation.navigate('AgregarPrenda', {photoUri}); // Reemplaza 'NextSection' con el nombre de la pantalla siguiente
  };

  const goBackToCamera = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.PhotoContainer}>
      <Image source={{ uri: `file://${photoUri}` }} style={styles.photo} />
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={goBackToCamera} style={styles.arrowButton}>
          <Text style={styles.arrowText}>⬅️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextSection} style={styles.arrowButton}>
          <Text style={styles.arrowText}>➡️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default PhotoPreview;
