import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../css/Estilos';


const Iniciosesion = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <Image style={styles.img} source={require('../imagenes/dressmelogo1.png')} />
      <View style={styles.d2v}>
        <View style={styles.div}>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.olvida}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Principal')}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Registro')} style={styles.containerCuenta}>
            <Text style={styles.nocuenta}>¿No tienes cuenta?</Text>
            <Text style={styles.Registraqui}> Regístrate aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};



export default Iniciosesion;
