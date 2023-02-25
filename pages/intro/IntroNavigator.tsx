import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './login/OnBoarding';
import CheckboxForAgreement from './login/CheckboxForAgreement';
import AgreementDetail from './login/AgreementDetail';
import Nickname from './login/Nickname';
import RegionPreference from './login/RegionPreference';
// import ObjPreference from './login/ObjPreference';
// import WorkspacePreference from './login/WorkspacePreference';
import {IntroStackParamList} from '../../types/introScreenPropsType';

const IntroStack = createNativeStackNavigator<IntroStackParamList>();

const IntroNavigator = () => {
  return (
    <IntroStack.Navigator>
      <IntroStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <IntroStack.Screen
        name="CheckboxForAgreement"
        component={CheckboxForAgreement}
        options={{headerShown: false}}
      />
      <IntroStack.Screen
        name="AgreementDetail"
        component={AgreementDetail}
        options={{headerShown: false}}
      />
      <IntroStack.Screen
        name="Nickname"
        component={Nickname}
        options={{headerShown: false}}
      />
      <IntroStack.Screen
        name="RegionPreference"
        component={RegionPreference}
        options={{headerShown: false}}
      />
      {/* <IntroStack.Screen
        name="ObjPreference"
        component={ObjPreference}
        options={{headerShown: false}}
      />
      <IntroStack.Screen
        name="WorkspacePreference"
        component={WorkspacePreference}
        options={{headerShown: false}}
      /> */}
    </IntroStack.Navigator>
  );
};

export default IntroNavigator;
