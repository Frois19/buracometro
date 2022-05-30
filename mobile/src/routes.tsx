import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from './components/Header';
import PotholesMap from './pages/PotholesMap';
import PotholeCancel from './pages/CreatePothole/PotholeCancel';
import PotholeConfirmation from './pages/CreatePothole/PotholeConfirmation';
import PotholeData from './pages/CreatePothole/PotholeData';
import SelectMapPosition from './pages/CreatePothole/SelectMapPosition';
import Tutorial from './pages/CreatePothole/Tutorial';
import PotholeDetails from './pages/PotholeDetails';
import Presentation from './pages/Presentation';
import Welcome from './pages/Welcome';



const {Navigator, Screen} = createStackNavigator();


export default function Routes(){

  return(

   <NavigationContainer>

     <Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor: '#f2f3f5'}}}>

       <Screen name="Welcome" component={Welcome}/>

       <Screen name="Presentation" component={Presentation}/>
    
       <Screen name="PotholesMap" component={PotholesMap}/>

       <Screen name="PotholeDetails" component={PotholeDetails} options={{ headerShown: true, header: () => <Header showCancel={false} title="Buracometro"/>}}/>

       <Screen name="SelectMapPosition" component={SelectMapPosition} options={{ headerShown: true, header: () => <Header title="Selecione no mapa"/>}}/>

       <Screen name="PotholeData" component={PotholeData} options={{ headerShown: true, header: () => <Header title="Informe os dados"/>}}/>

       <Screen name="PotholeConfirmation" component={PotholeConfirmation}/>

       <Screen name="PotholeCancel" component={PotholeCancel}/>

       <Screen name="Tutorial" component={Tutorial}/>
    
     </Navigator>

   </NavigationContainer>

  )

}