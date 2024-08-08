  import { StyleSheet, Dimensions} from 'react-native';
  const { height } = Dimensions.get('screen');
  


  const styles = StyleSheet.create({
   //CCS INICIO SESION 
    container: {
      flex: 1,
      backgroundColor: '#E8E8E8',
      // alignItems: 'center',
    },
    img: {
      width: 200,
      height: 150,
      marginTop: height * 0.1, // Espacio superior para centrar el logo
    },
    d2v: {
      width: Dimensions.get("screen").width * 1,
      height: Dimensions.get("screen").height * 0.6,
      top: Dimensions.get("screen").height * 0.3,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    div: {
      width: Dimensions.get("screen").width * 0.9,
      maxHeight: Dimensions.get("screen").height * 0.5,
      top: -height * 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
    },
    input: {
      width: '90%',
      height: 50,
      borderRadius: 25,
      fontSize: 20,
      paddingHorizontal: 10,
      marginBottom: 10,
      marginTop: 20,
      color: 'black',
      backgroundColor: '#E6E1E1',
    },
    olvida: {
      color: '#3685CD',
      padding: 5,
    },
    button: {
      marginTop: 10,
      width: '80%',
      height: 50,
      borderRadius: 25,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 20,
      color: 'white',
    },
    Registraqui: {
      color: '#3685CD',
    },
    nocuenta: {
      color: 'black',
    },
    containerCuenta: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems:'center'
    },
    // VISTA REGISTRO ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    containerRegistro: {
      flex: 1,
      backgroundColor: '#E8E8E8',
      alignItems: 'center',
    },
    headerRegistro: {
      width: '100%',
      height: height * 0.30,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingTop: 40, // Ajusta según sea necesario para espacio del icono
    },
    backButtonRegistro: {
      position: 'absolute',
      top: 40,
      left: 20,
    },
    backButtonTextRegistro: {
      color: 'white',
      fontSize: 24,
    },
    imgRegistro: {
      width: 150,
      height: 100,
      marginBottom: 10,
    },
    titleRegistro: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    },
    formContainerRegistro: {
      width: '90%',
      marginTop: height * 0.08,
      fontFamily:'montserrat',
      fontWeight: 'bold',
      backgroundColor: '#E8E8E8',
    },
    inputRegistro: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      fontSize: 16,
      paddingHorizontal: 20,
      marginBottom: 20,
      backgroundColor: 'white',
      color: 'black',
    },
    buttonRegistro: {
      width: '100%',
      height: 50,
      borderRadius: 25,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    buttonTextRegistro: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },

    //VISTA PRINCIPAL--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    closetLayout: {//posicion de los botones
      width: Dimensions.get("screen").width * 0.9,
      borderRadius: 15,
      position: "absolute",
      overflow: "hidden"
    },
    closet1Typo: {//posicion de los textos
      textAlign: "center",
      fontFamily: "OpenSans-Bold",
      fontWeight: "700",
      position: "absolute"
    },
    // dressmetitulo2Icon: {
    // 	top: 19,
    // 	left: 126,
    // 	width: 249,
    // 	height: 80,
    // 	position: "absolute"
    // },
    // customer: {
    // 	left: 40,
    // 	top: 34,
    // 	width: 54,
    // 	height: 51,
    // 	position: "absolute"
    // },
    header: {
      // top: 0,
      backgroundColor: "#000",
      height: Dimensions.get("screen").height * 0.13,
    },
    closet21: { //icono de closet
      top: Dimensions.get("screen").height * 0.05,
      width: Dimensions.get("screen").width * 0.4,
      height: Dimensions.get("screen").height * 0.2,
      left: Dimensions.get("screen").width * 0.45,
      position: "absolute"
    },
    closet1: {//color del texto "closet"
      top: Dimensions.get("screen").height * 0.13,
      left: Dimensions.get("screen").width * 0.15,
      color: "#d9d9d9",
      lineHeight: 26,
      fontSize: 25,
      textAlign: "center",
      fontFamily: "OpenSans-Bold",
      fontWeight: "700"
    },
    closet: {//boton de closet
      top: Dimensions.get("screen").height * 0.22,
      backgroundColor: "#545454",
      height: Dimensions.get("screen").height * 0.28,
      left: Dimensions.get("screen").width * 0.05,
      width: Dimensions.get("screen").width * 0.9,
      borderRadius: 15
    },
    favoritos1: {//texto de favoritos
      top: Dimensions.get("screen").height * 0.06,
      color: "#a6a6a6",
      lineHeight: 26,
      fontSize: 25,
      textAlign: "center",
      fontFamily: "OpenSans-Bold",
      fontWeight: "700",
      left: Dimensions.get("screen").width * 0.45
    },
    favoritoscorazon1Icon: {//icono de favoritos
      top: Dimensions.get("screen").height * 0.03,
      left: Dimensions.get("screen").width * 0.15,
      width: Dimensions.get("screen").width * 0.16,
      height: Dimensions.get("screen").height * 0.08,
      position: "absolute"
    },
    favoritos: {//boton de favoritos
      top: Dimensions.get("screen").height*0.05,
      left: Dimensions.get("screen").width*0.05,
      backgroundColor: "#737373",
      height: Dimensions.get("screen").height*0.14,
      width: Dimensions.get("screen").width * 0.9,
    },
    sugerenciasDeOutfit1: {//texto de sugerencias de outfit
      top: Dimensions.get("screen").height * 0.08,
      fontSize: 22,
      lineHeight: 22,
      color: "#545454",
      left: Dimensions.get("screen").width * 0.45,
    },
    gancho1Icon: {//icono de sugerencias de outfit
      // top: Dimensions.get("screen").height * 0,
      left: Dimensions.get("screen").width * 0.05,
      width: Dimensions.get("screen").width * 0.37,
      height: Dimensions.get("screen").height * 0.2,
      position: "absolute"
    },
    sugerenciasDeOutfit: {//boton sugerencias de outfit
      top: Dimensions.get("screen").height * 0.53,
      backgroundColor: "#d9d9d9",
      height: Dimensions.get("screen").height * 0.18,
      left: Dimensions.get("screen").width * 0.05,
      width: Dimensions.get("screen").width * 0.9,
      borderRadius: 15
    },
    vistaPrincipalContenedor: {//contenedor de los botones
      top: Dimensions.get('screen').width*0,
      height: Dimensions.get("screen").height * 0.74,
      backgroundColor: "white",
      // left: 0
    },
    vistaPrincipal: {//todo el contenedor de todo
      flex: 1,
      height: Dimensions.get("screen").height*1,
      // overflow: "hidden",
      width: Dimensions.get("screen").width*1,
      backgroundColor: "white"
    },
    // icon: {
    // 	height: "100%",
    // 	width: "100%"
    // },
    // camara1: {
    // 	position: "absolute",
    // 	left: Dimensions.get('screen').width * 0.42,
    // 	top: Dimensions.get('screen').height * 0,
    // 	width: 62,
    // 	height: 60
    // },
    camera: {
      top: Dimensions.get('screen').height * 0,
      backgroundColor: "#e8e8e8",
      height: Dimensions.get('screen').height * 0.09,
      width: Dimensions.get('screen').width*1,
      // left: 0,
      // position: "absolute",
      // overflow: "hidden"
    },

    //VISTA PROFILE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    iconPosition: {//icono de dressme
      top: Dimensions.get('screen').height * 0.02,
    left: Dimensions.get('screen').width * 0.16,
      position: "absolute"
  },
  // buttonGroupPosition: {//input de correo
  // 		width: Dimensions.get('screen').width * 0.8,
  // 		left: Dimensions.get('screen').width * 0.1,
  // 		position: "absolute"
  // },
  // valueTypo: {
  // 		lineHeight: 16,
  // 		textAlign: "left",
  // 		fontFamily: "Inter-Regular",
  // 		fontSize: 16
  // },
  inputPosition: { //demas inputs
      // backgroundColor: "black",
      width: Dimensions.get('screen').width * 0.80,
    height: Dimensions.get('screen').height * 0.08,
      left: Dimensions.get('screen').width * 0.09,
      position: "absolute"
  },
  buttonFlexBox: {//boton de editar perfil
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
  },
  dressmelogo23Icon: {//contenedor dressme logo
      // left: Dimensions.get('screen').width * 0,
      width: Dimensions.get('screen').width * 0.7,
      height: Dimensions.get('screen').height * 0.2,
  },
  multiplicationIcon: {//icono de x
      left: Dimensions.get('screen').width * 0.82,
    top: Dimensions.get('screen').height * 0.02,
      width: Dimensions.get('screen').width * 0.1,
      height: Dimensions.get('screen').height * 0.05,
  },
  headerProfile: {//contenedor de header background
      // top:0,
      // left: 0,
      // borderRadius: 11,
      width: Dimensions.get('screen').width*1,
      height: Dimensions.get('screen').height * 0.25,
      backgroundColor: "#000",
      position: "absolute",
      overflow: "hidden"
  },
  customerIcon: {//icono de la persona
      top: Dimensions.get('screen').height * 0.26,
      left: Dimensions.get('screen').width * 0.36,
      width: Dimensions.get('screen').width * 0.3,
      height: Dimensions.get('screen').height * 0.11,
      position: "absolute"
  },
  description: {//titulos de los input
      lineHeight: 22,
      color: "#3685cd",
      textAlign: "left",
      fontFamily: "Inter-Regular",
      fontSize: 16,
      alignSelf: "stretch"
  },
  value: {
      color: "#e8e8e8",
      flex: 1
  },
  inputProfile: {
      borderColor: "#000",
      borderWidth: 2,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginTop: 8,
      alignItems: "center",
      flexDirection: "row",
      borderStyle: "solid",
      borderRadius: 10,
      alignSelf: "stretch",
      overflow: "hidden"
  },
  inputCorreoRegistro: {//input de correo
      top: Dimensions.get('screen').height * 0.03
  },
  inputNombre: {//input de nombre
  top: Dimensions.get('screen').height * 0.13
  },
  inputApellido: {//input de apellido
  top: Dimensions.get('screen').height * 0.23
  },
  inputContrasea: {//input de contraseña
  top: Dimensions.get('screen').height * 0.33
  },
  ingresar: {//texto de boton de editar perfil
      color: "#f5f5f5"
  },
  buttonProfile: {//boton de editar perfil
      borderColor: "#2c2c2c",
      borderWidth: 1,
      padding: 12,
      borderStyle: "solid",
      borderRadius: 50,
      justifyContent: "center",
      backgroundColor: "#000",
      overflow: "hidden",
      flex: 1
  },
  buttonGroup: {//contenedor de editar perfil
      top: Dimensions.get('screen').height * 0.48,
      // paddingHorizontal: 4,
      // paddingVertical: 34,
      width: Dimensions.get('screen').width * 0.9,
      left: Dimensions.get('screen').width * 0.05,
      position: "absolute"
  },
  registroDeUsuario: {//container de todo input y boton
      top: Dimensions.get('screen').height * 0.35,
      left: Dimensions.get('screen').width * 0.015,
      width: Dimensions.get('screen').width * 1,
      height: Dimensions.get('screen').height*0.6,
      position: "absolute",
      overflow: "hidden"
  },
  perfil: {
      backgroundColor: "#fff",
      width: Dimensions.get('screen').width * 1,
      height: Dimensions.get('screen').height * 1,
      overflow: "hidden",
      flex: 1
  },
  //VISTA FAVORITOS ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  cameraPosition: {
    width: Dimensions.get('screen').width*1,
    left: Dimensions.get('screen').width*0,
    position: "absolute"
},
favoritoLayout: {
    height: Dimensions.get('screen').height*0.29,
    //width: Dimensions.get('screen').width*0,
    top: Dimensions.get('screen').height*0.32,
    position: "absolute"
},
iconLayout: {
    height: "100%",
    width: "100%"
},
favoritoBorder: {
    borderWidth: 1,
    borderColor: "#3685cd",
    borderStyle: "solid",
    borderRadius: 15,
    // left: Dimensions.get('screen').width*0,
    // right: "5.52%",
    width: Dimensions.get('screen').width*0.4,
    position: "absolute",
    overflow: "hidden"
},
favorito11FlexBox: {
    textAlign: "center",
    color: "#000",
    position: "absolute"
},
favorito12FlexBox: {
textAlign: "center",
color: "#000",
position: "absolute",
textShadowColor: "#6BBEF9", // Establece el color de la sombra a azul
textShadowOffset: { width: 0, height: 0 },
textShadowRadius: 5 // Ajusta según la apariencia deseada del borde
},
favoritoPosition: {
    top: Dimensions.get('screen').height*0,
    height: Dimensions.get('screen').height*0.29,
    //width: 145,
    position: "absolute"
},
header2Position: {
    width: Dimensions.get('screen').width*1,
    left: 0,
    position: "absolute",
    overflow: "hidden"
},
camara1: {
    left: Dimensions.get('screen').width*0.42,// posicion del logo centrado
    width: 62,
    height: 60,
    top: Dimensions.get('screen').height * 0.01,
    position: "absolute"
},
camera: {
    top: Dimensions.get('screen').height * 0.875,// div footer
    backgroundColor: "#e8e8e8",
    //height: Dimensions.get('screen').height * 1,
    overflow: "hidden"
},
favorito1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden"
},
favorito11: {
    left: Dimensions.get('screen').height * 0.047,
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "OpenSans-Regular",
    top: 6
},
tituloFavorito: {
    height: "11.51%",
    top: "2.78%",
    bottom: "85.71%"
  
},
outfitGuardadoFavorito: {
    height: "78.97%",
    //top: "17.86%",
    bottom: "3.17%"
},
favorito4: {
    left: Dimensions.get('screen').height * 0.24
},
favorito3: {
    left: Dimensions.get('screen').height * 0.04
},
favorito2: {
    left: Dimensions.get('screen').height * 0.24
},
favorito16: {
    left: Dimensions.get('screen').height * 0.04
},
contenedorFavoritos: {
    top: Dimensions.get('screen').width*0.5,
    // height: Dimensions.get('screen').height*0, 	
  // alignItems:'center',
    //backgroundColor: "blue"
},
tusFavoritos: {
    top: Dimensions.get('screen').height * 0.01,
    left: Dimensions.get('screen').width*0.28 ,
    fontSize: 25,		
    lineHeight: 25,
    fontFamily: "Fredoka One"
},
tituloFavoritos: {
    top: Dimensions.get('screen').height * 0.15,
    height: Dimensions.get('screen').height * 0.035,
    backgroundColor: "#fff"
},
//dressmetitulo3Icon: {
  //top: 1,
  //left: 126,
  //width: 249,
  //height: 80,
  //position: "absolute"
//},
//homePage: {
    //left: 39,
    //top: 33,
    //width: 54,
    //height: 51,
    //position: "absolute"
//},
//header2: {
    //top: 0,
    //backgroundColor: "#000",
    //height: 118
//},
favoritosContainer: {
    flex: Dimensions.get('screen').height * 1,
    height: Dimensions.get('screen').height * 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff"
},
camerafavoritos: {
top: Dimensions.get('screen').height * 0.74,
backgroundColor: "#e8e8e8",
//height: 72,
//width: Dimensions.get('screen').width*1,
//left: 0,
position: "absolute",
overflow: "hidden"
},

//VISTA CLOSET ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

cameraPosition: {
  width: Dimensions.get('screen').width * 1,
  left: 0,
  position: "absolute"
},
camera1Position: {
  left: "0%",
  bottom: "0%",
  right: "0%",
  top: "0%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  width: "100%"
},
header3Position: {
  top: 0,
  width: Dimensions.get('screen').width * 1,
  left: 0,
  position: "absolute"
},
headerCloset: {
  backgroundColor: "#000",
  height: Dimensions.get('screen').height * 0.130,
  top: 0,
  width: Dimensions.get('screen').width * 1,
  left: 0,
  position: "absolute",
  overflow: "hidden"
},
labelTypo: {
  marginTop: 4,
  fontSize: 13,
  textAlign: "center",
  fontFamily: "Source Sans Pro"
},
camera: {
  top: Dimensions.get('screen').height * 0.875,// div footer
  backgroundColor: "#e8e8e8",
  overflow: "hidden"
},
todo: {
  top: 237,
  left: Dimensions.get('screen').width * 0.3,
  fontSize: 50,
  textAlign: "center",
  fontFamily: "Source Sans Pro",
  color: "#000",
  position: "absolute"
},
icon1: {
  width: 24,
  height: 24,
  overflow: "hidden"
},
label: {
  color: "#6bbef9"
},
sectionIcon: {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 0,
  paddingVertical: 12,
  flex: 1
},
label1: {
  color: "#000",
  marginTop: 4,
  fontSize: 13
},
label2: {
  color: "#2b2b2b"
},
bottomNavigation: {
  borderStyle: "solid",
  borderColor: "#dbdbdb",
  borderTopWidth: 1,
  flexDirection: "row",
  paddingHorizontal: 4,
  paddingVertical: 0,
  backgroundColor: "#fff",
  top: 0
},
contenedorClosetTodo: {
  top: Dimensions.get('screen').height * 0.13,
  height: Dimensions.get('screen').height * 0.861,
  overflow: "hidden"
},
closetContainer: {
  height: Dimensions.get('screen').height * 0.8,
  overflow: "hidden",
  width: "100%",
  flex: 1,
  backgroundColor: "#fff"
},
//VISTA SUGERENCIA ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

sugerenciaDeOutfit: {
  backgroundColor: "#fff",
  height: Dimensions.get('screen').height,
  overflow: "hidden",
  width: "100%",
  flex: 1
},
codigosDeVestimentaPosition: {
  width: Dimensions.get('screen').width,
  left: 0,
  position: "absolute",
  overflow: "hidden",
  alignItems: "center", // Centra las opciones horizontalmente
},
generarOutfitBg: {
  backgroundColor: "#737373",
  borderRadius: 10,
  position: "absolute",
  overflow: "hidden"
},
textFlexBox: {
  textAlign: "center",
  color: "#fff",
},
item0FlexBox: {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  marginBottom: 10,
},
selectedOption: {
  backgroundColor: "black", // Cambia el fondo a negro cuando está seleccionado
},
sugerenciaDeOutfit1Typo: {
  fontFamily: "Fredoka One",
  lineHeight: 23,
  fontSize: 23
},
seleccioneSuCodigoClr: {
  color: "#000",
  textAlign: "center",
  position: "absolute"
},
icon: {
  height: "100%",
  width: "100%"
},
camara1: {
  left: Dimensions.get('screen').width * 0.42,
  top: Dimensions.get('screen').height * 0.01,
  width: 62,
  height: 60,
  position: "absolute"
},
camera: {
  top: Dimensions.get('screen').height * 0.875,
  backgroundColor: "#e8e8e8",
  height: 72,
  width: Dimensions.get('screen').width,
  left: 0,
  position: "absolute",
  overflow: "hidden"
},
text: {
  fontSize: 100,
  textAlign: "center",
  height: Dimensions.get('screen').height * 0.5,
  top: Dimensions.get('screen').width * -0.06
},
generarOutfit: {
  top: Dimensions.get('screen').height * 0.53,
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height * 0.1
},
controllerIcon: {
  width: 24,
  height: 24,
  backgroundColor: 'white'
},
labelSugerencia: {
  fontSize: 16,
  lineHeight: 24,
  textAlign: "left",
  marginLeft: 8,
  color: "#fff",
  fontFamily: "Jost-Regular",
  flex: 1
},
radioWrapper: {
  borderRadius: 8,
  flexDirection: "row",
  padding: 8,
  backgroundColor: "#737373", // Fondo del recuadro negro
},
checkboxGroup: {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  marginTop: 40,
},
codigosDeVestimenta1: {
  top: 9,
  left: 17,
  width: 320,
  height: 28,
  textAlign: "center",
  color: "#fff",
  position: "absolute"
},
formularioDeCodigoDeVestim: {
  left: 0,
  width: Dimensions.get('screen').width,
  height: 386,
},
codigosDeVestimenta: {
  top: Dimensions.get('screen').height * 0.23,
  height: Dimensions.get('screen').height,
},
seleccioneSuCodigo: {
  top: 39,
  fontSize: 10,
  lineHeight: 10,
  fontFamily: "OpenSans-Regular",
  width: 373,
  height: 20
},
sugerenciaDeOutfit1: {
  top: 7,
  left: Dimensions.get('screen').height * 0.035,
  width: Dimensions.get('screen').height * 0.4,
  height: 22,
  fontFamily: "Fredoka One",
  lineHeight: 23,
  fontSize: 23
},
tituloSugerenciaDeOutfit: {
  top: 119,
  height: 59
},
dressmetitulo3Icon: {
  top: 19,
  left: 126,
  width: 249,
  height: 80,
  position: "absolute"
},
homePage: {
  left: 39,
  top: 33,
  width: 54,
  height: 51,
  position: "absolute"
},
header2: {
  backgroundColor: "#000",
  height: 118,
  top: 0,
  width: 375,
  left: 0,
  position: "absolute",
  overflow: "hidden"
},
headerSusgerencias: {
  backgroundColor: "#000",
  height: Dimensions.get('screen').height * 0.13,
  top: 0,
  width: Dimensions.get('screen').width,
  left: 0,
  position: "absolute",
  overflow: "hidden"
},
// VISTA TUTORIAL-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
tutorialBg: {
  backgroundColor: "#fff",
  overflow: "hidden"
},
headerTutorialLayout: {//dimensiones header
  height: Dimensions.get('screen').height*0.15,
  position: "absolute",
  overflow: "hidden"
},
tutorialLayout: {
  width: Dimensions.get('screen').width*1,
},
alTomarLaClr: {
  color: "#000",
  textAlign: "center"
},
tenEnCuentaTypo: {
  fontFamily: "OpenSans-Bold",
  color: "#000",
  textAlign: "center",
  fontWeight: "700"
},
siguientePosition: {
  left: Dimensions.get('screen').width*0.05,
  position: "absolute"
},
image11Position: {
  height: Dimensions.get('screen').height*0.13,
  position: "absolute"
},
registraTusPrendas: {
  top: Dimensions.get('screen').height*0.03,
  left: Dimensions.get('screen').width*0.19,
  fontSize: 45,
  lineHeight: 46,
  fontFamily: "Montserrat-Bold",
  fontWeight: "700",
  color: "#fff",
  position: "absolute",
  textAlign: "center"
},
headerTutorial: {
  width: Dimensions.get('screen').width*1,
  backgroundColor: "#000",
  height: Dimensions.get('screen').height*0.15,
},
alTomarLa: {
  top: Dimensions.get('screen').height*0.44,
  left: Dimensions.get('screen').width*0.17,
  lineHeight: 26,
  fontWeight: "300",
  fontFamily: "OpenSans-Light",
  width: Dimensions.get('screen').width*0.68,
  height: Dimensions.get('screen').height*0.2,
  fontSize: 20,
  position: "absolute"
},
lucesYSombras: {
  top: Dimensions.get('screen').height*0.39,
  left: Dimensions.get('screen').width*0.36,
  lineHeight: 20,
  width: Dimensions.get('screen').width*0.3,  
  height: Dimensions.get('screen').height*0.1,
  fontSize: 20,
  position: "absolute"
},
containerTutorialChild: {
  top: Dimensions.get('screen').height*0.36,
  left: Dimensions.get('screen').width*0.03,  
  width: Dimensions.get('screen').width*0.95,
  height: Dimensions.get('screen').height*0.01,
  position: "absolute"
},
image1Icon: {
  left: Dimensions.get('screen').width*0.05,
  width: Dimensions.get('screen').width*0.4,
},
image11: {
  left: Dimensions.get('screen').width*0.46,
  width: Dimensions.get('screen').width*0.4,
},
checkMarkIconDesignIconBl: {
  top: Dimensions.get('screen').height*0.15,
  left: Dimensions.get('screen').width*0.2,
  width: Dimensions.get('screen').width*0.1,
  height: Dimensions.get('screen').height*0.05,
  position: "absolute"
},
removebgPreview1Icon: {
  top: Dimensions.get('screen').height*0.154,
  left: Dimensions.get('screen').width*0.63,
  width: Dimensions.get('screen').width*0.09,
  height: Dimensions.get('screen').height*0.041,
  position: "absolute"
},
ejemploDeImagen: {
  top: Dimensions.get('screen').height*0.15,
  width: Dimensions.get('screen').width*1,
  height: Dimensions.get('screen').height*0.3,
  overflow: "hidden"
},
contrasteConFondos: {
  top: Dimensions.get('screen').height*0.07,
  left: Dimensions.get('screen').width*0.19,
  fontSize: 14,
  lineHeight: 14,
  width: Dimensions.get('screen').width*0.6,
  height: Dimensions.get('screen').height*0.1,
  position: "absolute"
},
tenEnCuenta: {
  top: Dimensions.get('screen').height*0.02,
  left: Dimensions.get('screen').width*0.20,
  fontSize: 30,
  lineHeight: 31,
  width: Dimensions.get('screen').width*0.6,
  fontFamily: "OpenSans-Bold",
  color: "#000",
  textAlign: "center",
  fontWeight: "700"
},
siguiente: {
  top: Dimensions.get('screen').height*0.016,
  fontSize: 12,
  letterSpacing: 1,
  lineHeight: 16,
  textTransform: "uppercase",
  fontWeight: "600",
  fontFamily: "OpenSans-SemiBold",
  textAlign: "center",
  color: "#fff"
},
boton: {
  top: Dimensions.get('screen').height*0.625,
  left: Dimensions.get('screen').width*0.63,
  borderRadius: 21,
  width: Dimensions.get('screen').width*0.3,
  height: Dimensions.get('screen').height*0.05,
  backgroundColor: "#000",
  position: "absolute",
  overflow: "hidden"
},
agregaTuPrimera: {
  top: Dimensions.get('screen').height*0.57,
  left: Dimensions.get('screen').width*0.05,
  fontSize: 18,
  lineHeight: 18,
  fontFamily: "OpenSans-Regular",
  width: Dimensions.get('screen').width*0.6,
  color: "#000",
  textAlign: "center"
},
mensajeAgregarPrenda: {
  top: Dimensions.get('screen').height*0.57,
  left: Dimensions.get('screen').width*0.05,
  width: Dimensions.get('screen').width*0.6,    
},
containerTutorial: {
  top: Dimensions.get('screen').height*0.15,
  height: Dimensions.get('screen').height*0.73,
  position: "absolute",
  overflow: "hidden",
  backgroundColor: "#D9D9D9"
},
tutorial: {
  flex: 1,
  height: Dimensions.get('screen').height*1,
  overflow: "hidden",
  width: Dimensions.get('screen').width*1,
},
cameraTutorial: {
top: Dimensions.get('screen').height * 0.87,
backgroundColor: "#e8e8e8",
height: Dimensions.get('screen').height * 0.09,
width: Dimensions.get('screen').width*1,
// left: 0,
// position: "absolute",
// overflow: "hidden"
},

//VISTA PHOTOPREVIEW----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PhotoContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
},
photo: {
  width: '90%',
  height: '80%',
  resizeMode: 'contain',
},
navigationContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '80%',
  marginTop: 20,
},
arrowButton: {
  backgroundColor: 'white',
  padding: 15,
  borderRadius: 5,
},
arrowText: {
  fontSize: 24,
  fontWeight: 'bold',
},

//VISTA CAMARA PAGE--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Camarapagecontainer: {
  flex: 1,
  backgroundColor: 'black'
},
captureButton: {
  position: 'absolute',
  bottom: 25,
  width: Dimensions.get("screen").width * 0.2,
  height: Dimensions.get("screen").width * 0.2,
  backgroundColor: 'transparent',
  borderColor: 'white',
  borderWidth: 7,
  borderRadius: Dimensions.get("screen").width * 0.1,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center'
},
buttonTextcamera: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center'
},
controlContainer: {
  position: 'absolute',
  bottom: 100,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
controlButton: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center'
},
controlText: {
  color: 'black',
  fontWeight: 'bold'
},
exitButton: {
  position: 'absolute',
  top: Dimensions.get('screen').height * 0.02,
  left: Dimensions.get('screen').width * 0.05,
  alignSelf: 'center',
  backgroundColor: 'white',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 50,
},
exitButtonText: {
  color: 'black',
  fontWeight: 'bold',
},

// VISTA AGREGAR PRENDA----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

scrollViewContent: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
headerAprenda: {
  backgroundColor: "#000",
  height: Dimensions.get('screen').height * 0.130,
  width: Dimensions.get('screen').width,
  overflow: "hidden",
position: "absolute",
zIndex: 1
},
image12: {	
  height: '100%',
  width: '100%',
},
imagenDePrenda: {
  marginTop: Dimensions.get('screen').height * 0.02,
  borderRadius: 9,
  borderColor: "#000",
  borderWidth: 3,
  width: Dimensions.get('screen').width * 0.7,
  height: Dimensions.get('screen').height * 0.57,
  borderStyle: "solid",
  overflow: "hidden",
  justifyContent: 'center',
  alignItems: 'center',
},
agregarPrendaContainer: {
  width: Dimensions.get('screen').width,
  alignItems: 'center',
  marginTop: Dimensions.get('screen').height * 0.2,
},
Nota:{
  color: "#000",
  fontSize: 15,
  top: 10,
  fontFamily: "OpenSans-Regular",
  textAlign: "justify",
  width: Dimensions.get('screen').width * 0.8,

},
formNombrePrenda: {
  width: Dimensions.get('screen').width * 0.8,
  alignItems: 'center',
},
inputColor: {
  marginTop: Dimensions.get('screen').height * 0.05,
  width: '100%',
},
inputNombrePrenda: {
  width: '100%',
},
labelTypoPrenda: {
  fontFamily: "OpenSans-Regular",
  textTransform: "uppercase",
  textAlign: "left",
  color: "#000",
  fontSize: 20,
},
textbox1: {
  flex: 1,
},
textboxBorder: {
  marginTop: 4,
  padding: 8,
  alignItems: "center",
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#a6a6a6",
  backgroundColor: "#545454",
  alignSelf: "stretch",
  borderStyle: "solid",
  borderRadius: 20,
},
textTypo: {
  color: "#fff",
  fontSize: 15,
  fontFamily: "Roboto-Regular",
  flex: 1,
},
inputPositionPrenda: {
  marginTop: Dimensions.get('screen').height * 0.02,
  width: '100%',
},
textFieldData1: {
  textAlign: "center",
},
agregarPrenda: {
  backgroundColor: "#fff",
  width:  Dimensions.get('screen').width*1,
  flex: 1,
},
botonesAE: { 
  flexDirection: "row",
  justifyContent: "space-around",
  width: Dimensions.get('screen').width * 0.8,
  marginTop: 20,
},

plus: {
  width: 75,
  height: 75,
  marginTop: 20,
},
cancel: {
  width: 75,
  height: 75,
  marginTop: 20,
},
// VISTA EDEITAR PROFILE -=-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


});

  export default styles;