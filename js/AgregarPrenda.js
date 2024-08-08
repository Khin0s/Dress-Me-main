import * as React from "react";
import {Image, StyleSheet, Pressable, View, Text, Dimensions} from "react-native";
import HeaderPrincipal from "../componentes/HeaderPrincipal";
//import CameraFotter from "../componentes/Camera";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../css/Estilos";

const AgregarPrenda = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { photoUri } = route.params || {};

    return (
        
            <View>
			<View style={styles.headerAprenda}>
                <HeaderPrincipal 
                    img={require("../imagenes/home.jpg")}
                    onPress={() => { navigation.navigate('Principal') }}
                />
            </View>
			<KeyboardAwareScrollView contentContainerStyle={styles.scrollViewContent}>

            <View style={styles.agregarPrendaContainer}>
                <View style={styles.imagenDePrenda}>
                    {photoUri ? (
                        <Image style={styles.image12} resizeMode="contain" source={{ uri: `file://${photoUri}` }} />
                    ) : (
                        <Text style={styles.noImageText}>No image</Text>
                    )}
                </View>

                <View>
                <Text style={styles.Nota}>{`*NOTA:
EL NOMBRE DEBE SER ACORDE A LA PRENDA, IGUAL EL TIPO DEBE ESPECIFICAR SI LA PRENDA ES PARA LA PARTE SUPERIOR COMO CAMISETA O CHAQUETA ETC, O SI ES PARA LA PARTE SUPERIOR COMO PANTALÓN, SUDADERA, ETC...`}</Text>
                </View>

                <View style={styles.formNombrePrenda}>
                    <View style={styles.inputColor}>
                        <View style={styles.inputNombrePrenda}>
                            <Text style={[styles.label, styles.labelTypoPrenda]}>color</Text>
                            <View style={styles.textboxBorder}>
                                <Text style={[styles.textFieldData, styles.textTypo]}>{`(0%,0%,0%) black`}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.inputCodigoVestimenta, styles.inputPositionPrenda]}>
                        <View style={styles.inputNombrePrenda1}>
                            <Text style={[styles.label, styles.labelTypoPrenda]}>Codigo vestimenta</Text>
                            <View style={[styles.textbox1, styles.textboxBorder]}>
                                <Text style={[styles.textFieldData1, styles.textTypo]}>Casual, formal, semiformal , etc..</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.inputTipoPrenda, styles.inputPositionPrenda]}>
                        <View style={styles.inputNombrePrenda}>
                            <Text style={[styles.label2, styles.labelTypoPrenda]}>Tipo</Text>
                            <View style={styles.textboxBorder}>
                                <Text style={[styles.textFieldData1, styles.textTypo]}>Parte superior, inferior</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.inputNombrePrenda3, styles.inputPositionPrenda]}>
                        <View style={styles.inputNombrePrenda}>
                            <Text style={[styles.label, styles.labelTypoPrenda]}>nombre</Text>
                            <View style={styles.textboxBorder}>
                                <Text style={[styles.textFieldData1, styles.textTypo]}>Selecciona el nombre de tu prenda</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.botonesAE}>
                    <Pressable>
                        <Image style={styles.plus} source={require("../imagenes/Plus.png")} onPress={()=>{}}/>
                    </Pressable>

                    <Pressable>
                        <Image style={styles.cancel} source={require("../imagenes/Cancel.png")} onPress={()=>{}}/>
                    </Pressable>

                </View>
            </View>

            
        </KeyboardAwareScrollView>

		</View>
    );
};


export default AgregarPrenda;
