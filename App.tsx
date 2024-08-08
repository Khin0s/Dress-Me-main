import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Iniciosesion from './js/iniciosesion'
import Registro from './js/Registro';
import Principal from './js/Principal';
import Closet from './js/Closet';
import Favoritos from './js/Favoritos';
import Sugerencias from './js/Sugerencias';
import CamaraPage from './js/CamaraPage';
import PhotoPreview from './js/PhotoPreview';
import Profile from './js/Profile';
import AgregarPrenda from './js/AgregarPrenda';
import EditarPerfil from './js/EditarProfile';
import { TransitionPresets } from '@react-navigation/stack';
import Tutorial from './js/Tutorial';
import NuevoOutfit from './js/NuevoOutfit';

// import CameraScreen from './js/CameraScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // Animación de deslizamiento
      }}
      >
        <Stack.Screen name="Iniciosesion" component={Iniciosesion} options={{ headerShown: false }} />
        <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
        <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Stack.Screen name="Closet" component={Closet} options={{ headerShown: false }} />
        <Stack.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }} />
        <Stack.Screen name="Sugerencias" component={Sugerencias} options={{ headerShown: false }} />
        <Stack.Screen name="CamaraPage" component={CamaraPage} options={{ headerShown: false }} />
        <Stack.Screen name="PhotoPreview" component={PhotoPreview} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="AgregarPrenda" component={AgregarPrenda} options={{ headerShown: false }} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }} />
        <Stack.Screen name="Tutorial" component={Tutorial} options={{ headerShown: false }} />
        <Stack.Screen name="NuevoOutfit" component={NuevoOutfit} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;