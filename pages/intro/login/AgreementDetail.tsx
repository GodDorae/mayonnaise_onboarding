import React from 'react';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import agreementSelectLogic from '../../../components/agreement/agreementSelectLogic';
import Wrapper from '../../../components/common/Wrapper';
import OnboardingHeader from '../../../components/common/OnboardingHeader';
import {
  AgreementContainer,
  AgreementText,
  ViewContainer,
} from './styles/AgreementDetailStyles';

interface Props {
  navigation: IntroStackNavigationProps<'AgreementDetail'>;
  route: RouteProp<IntroStackParamList, 'AgreementDetail'>;
}

const AgreementDetail = ({navigation, route}: Props) => {
  const {property, number, title} = route.params;
  const agreements = agreementSelectLogic(property, number);

  return (
    <Wrapper>
      <OnboardingHeader text={title} goback={navigation.goBack} />
      <ViewContainer>
        {agreements.map((agreement, index) => (
          <AgreementContainer key={index}>
            <AgreementText>제 {index + 1}항</AgreementText>
            <AgreementText>{agreement}</AgreementText>
          </AgreementContainer>
        ))}
      </ViewContainer>
    </Wrapper>
  );
};

export default AgreementDetail;
