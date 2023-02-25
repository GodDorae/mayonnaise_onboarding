import React from 'react';
import {
  Button,
  LoginContainer,
  Logo,
  LogoContainer,
  ButtonText,
} from './styles/OnBoardingStyles';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import Wrapper from '../../../components/common/Wrapper';

interface Props {
  navigation: IntroStackNavigationProps<'OnBoarding'>;
  route: RouteProp<IntroStackParamList, 'OnBoarding'>;
}

const Intro = ({navigation}: Props) => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo source={require('../../../assets/workus_logo_white.png')} />
      </LogoContainer>
      <LoginContainer>
        <Button
          onPress={() => {
            navigation.navigate('CheckboxForAgreement');
          }}>
          <ButtonText>카카오로 계속하기</ButtonText>
        </Button>
      </LoginContainer>
    </Wrapper>
  );
};

export default Intro;
