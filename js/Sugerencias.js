import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";
import HeaderPrincipal from '../componentes/HeaderPrincipal'
import CameraFotter from "../componentes/Camera";
import { useNavigation } from "@react-navigation/native";
import styles from "../css/Estilos";

const SugerenciaDeOutfit = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(""); // Estado para almacenar la opción seleccionada

  // Función para manejar la selección de una opción
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.sugerenciaDeOutfit}>
      <View style={styles.headerSusgerencias}>
        <HeaderPrincipal 
          img={require("../imagenes/home.jpg")}
          onPress={() => { navigation.navigate('Principal')}}
        />
      </View>
      <View style={[styles.codigosDeVestimenta, styles.codigosDeVestimentaPosition]}>
        <TouchableOpacity style={[styles.generarOutfit, styles.generarOutfitBg]} onPress={()=>{navigation.navigate('NuevoOutfit')}}>
          <Text style={[styles.text, styles.textFlexBox]}>+</Text>
        </TouchableOpacity>
        <View style={[styles.formularioDeCodigoDeVestim, styles.generarOutfitBg]}>
          <View style={styles.checkboxGroup}>
            <TouchableOpacity
              style={[styles.item0FlexBox, selectedOption === "CASUAL" && styles.selectedOption]}
              onPress={() => handleSelectOption("CASUAL")}
            >
              <View style={[styles.radioWrapper, selectedOption === "CASUAL" && styles.selectedOption]}>
                <Image style={styles.controllerIcon} resizeMode="cover" source={require("../imagenes/all.png")} />
                <Text style={styles.labelSugerencia}>CASUAL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item0FlexBox, selectedOption === "FORMAL" && styles.selectedOption]}
              onPress={() => handleSelectOption("FORMAL")}
            >
              <View style={[styles.radioWrapper, selectedOption === "FORMAL" && styles.selectedOption]}>
                <Image style={styles.controllerIcon} resizeMode="cover" source={require("../imagenes/all.png")} />
                <Text style={styles.labelSugerencia}>FORMAL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item0FlexBox, selectedOption === "DEPORTIVO" && styles.selectedOption]}
              onPress={() => handleSelectOption("DEPORTIVO")}
            >
              <View style={[styles.radioWrapper, selectedOption === "DEPORTIVO" && styles.selectedOption]}>
                <Image style={styles.controllerIcon} resizeMode="cover" source={require("../imagenes/all.png")} />
                <Text style={styles.labelSugerencia}>DEPORTIVO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={[styles.codigosDeVestimenta1, styles.sugerenciaDeOutfit1Typo]}>CODIGOS DE VESTIMENTA</Text>
        </View>
      </View>
      <View style={[styles.tituloSugerenciaDeOutfit, styles.codigosDeVestimentaPosition]}>
        <Text style={[styles.seleccioneSuCodigo, styles.seleccioneSuCodigoClr]}>SELECCIONE SU CODIGO DE VESTIMENTA PARA GENERAR  EL OUTFIT</Text>
        <Text style={[styles.sugerenciaDeOutfit1, styles.seleccioneSuCodigoClr]}>SUGERENCIA DE OUTFIT</Text>
      </View>
      <View style={styles.cameraContainer}>
        <CameraFotter styles={styles} />
      </View>
    </View>
  );
};



export default SugerenciaDeOutfit;