import React, {useEffect, useState} from 'react';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import Wrapper from '../../../components/common/Wrapper';
import OnboardingHeader from '../../../components/common/OnboardingHeader';
import NextButton from '../../../components/common/NextButton';
import {
  HeaderDescription,
  HeaderDescriptionContainer,
  RegionContainer,
} from './styles/RegionPreferenceStyles';
import {preferRegion} from '../../../data/data';
import PreferenceButton from '../../../components/common/PreferenceButton';

interface Props {
  navigation: IntroStackNavigationProps<'RegionPreference'>;
  route: RouteProp<IntroStackParamList, 'RegionPreference'>;
}

const RegionPreference = ({navigation}: Props) => {
  const [region, setRegion] = useState({
    Gangnam: false,
    Seolleung: false,
    Samsung: false,
    Yeoksam: false,
    Nonhyeon: false,
  });
  const [isSelected, setIsSelected] = useState(false);

  const nextButtonProps = {
    isActive: isSelected ? true : false,
    text: '다음',
    onPress: () => {
      navigation.navigate('ObjPreference');
    },
    disablePossibility: true,
  };

  useEffect(() => {
    if (
      !region.Gangnam &&
      !region.Seolleung &&
      !region.Samsung &&
      !region.Yeoksam &&
      !region.Nonhyeon
    ) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [
    region.Gangnam,
    region.Nonhyeon,
    region.Samsung,
    region.Seolleung,
    region.Yeoksam,
  ]);

  return (
    <Wrapper>
      <OnboardingHeader text="지역 설정" goback={navigation.goBack} />
      <HeaderDescriptionContainer>
        <HeaderDescription>
          Workus는 특정 지하철역 (강남, 역삼, 선릉, 삼성, 논현)
        </HeaderDescription>
        <HeaderDescription>
          주변의 워크 스페이스 정보를 우선 제공합니다.
        </HeaderDescription>
        <HeaderDescription>
          추후 더 멋지고 다양한 정보가 제공될 예정입니다!
        </HeaderDescription>
      </HeaderDescriptionContainer>
      <RegionContainer>
        {preferRegion.map(regionItem => (
          <PreferenceButton
            buttonProps={{isActive: region[`${regionItem.value}`] ? true : false}}
          />;
        ))}
      </RegionContainer>
      <NextButton buttonProps={nextButtonProps} />
    </Wrapper>
  );
};

export default RegionPreference;
