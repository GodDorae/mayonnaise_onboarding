import React, {useState} from 'react';
import styled from 'styled-components/native';
import Wrapper from '../../../components/common/Wrapper';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import Agreement from '../../../components/agreement/Agreement';
import NextButton from '../../../components/common/NextButton';
import OnboardingHeader from '../../../components/common/OnboardingHeader';

interface Props {
  navigation: IntroStackNavigationProps<'CheckboxForAgreement'>;
  route: RouteProp<IntroStackParamList, 'CheckboxForAgreement'>;
}

const AgreementContainer = styled.View`
  flex: 5;
`;

const CheckboxForAgreement = ({navigation}: Props) => {
  const [agreementCheck, setAgreementCheck] = useState<string[]>([]);
  const [obligationCheck, setObligationCheck] = useState<string[]>([]);
  const [optionCheck, setOptionCheck] = useState<string[]>([]);
  const buttonProps = {
    isActive: obligationCheck.length === 5 ? true : false,
    text: '동의하고 가입하기',
    onPress: () => {
      navigation.navigate('Nickname');
    },
    disablePossibility: true,
  };

  return (
    <Wrapper>
      <OnboardingHeader text="서비스 이용 약관" goback={navigation.goBack} />
      <AgreementContainer>
        <Agreement
          agreementCheck={agreementCheck}
          setAgreementCheck={setAgreementCheck}
          obligationCheck={obligationCheck}
          setObligationCheck={setObligationCheck}
          optionCheck={optionCheck}
          setOptionCheck={setOptionCheck}
          navigate={navigation.navigate}
        />
      </AgreementContainer>
      <NextButton buttonProps={buttonProps} />
    </Wrapper>
  );
};

export default CheckboxForAgreement;
