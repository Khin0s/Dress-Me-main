import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../css/Estilos';// import styles from '../css/Estilos';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Registro = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.containerRegistro}>
      <View style={styles.headerRegistro}>
        <TouchableOpacity style={styles.backButtonRegistro} onPress={() => navigation.navigate('Iniciosesion')}>
          {/* Icono de flecha para volver */}
          <Text style={styles.backButtonTextRegistro}>←</Text>
        </TouchableOpacity>
        <Image style={styles.imgRegistro} source={require('../imagenes/dressmelogo2.jpg')} />
        <Text style={styles.titleRegistro}>REGISTRO</Text>
      </View>
      <KeyboardAwareScrollView style={styles.formContainerRegistro}>
        <TextInput
          style={styles.inputRegistro}
          placeholder="Correo"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputRegistro}
          placeholder="Nombre"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputRegistro}
          placeholder="Apellido"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.inputRegistro}
          placeholder="Contraseña"
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TextInput
          style={styles.inputRegistro}
          placeholder="Repite la contraseña"
          placeholderTextColor="gray"
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonRegistro} onPress={() => navigation.navigate('Tutorial')}>
          <Text style={styles.buttonTextRegistro}>Crear cuenta</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};


export default Registro;
