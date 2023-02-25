import React, {useState} from 'react';
import {
  IntroStackNavigationProps,
  IntroStackParamList,
} from '../../../types/introScreenPropsType';
import {RouteProp} from '@react-navigation/native';
import Wrapper from '../../../components/common/Wrapper';
import OnboardingHeader from '../../../components/common/OnboardingHeader';
import {TextInput, TextInputContainer} from './styles/NicknameStyles';
import NextButton from '../../../components/common/NextButton';

interface Props {
  navigation: IntroStackNavigationProps<'Nickname'>;
  route: RouteProp<IntroStackParamList, 'Nickname'>;
}

const Nickname = ({navigation}: Props) => {
  const [nickname, setNickname] = useState('');
  const buttonProps = {
    isActive: nickname.length ? true : false,
    text: '다음',
    onPress: () => {
      navigation.navigate('RegionPreference');
    },
    disablePossibility: true,
  };

  return (
    <Wrapper>
      <OnboardingHeader text="닉네임 설정" goback={navigation.goBack} />
      <TextInputContainer>
        <TextInput
          placeholder="10자 이내 닉네임 설정"
          value={nickname}
          onChangeText={setNickname}
        />
      </TextInputContainer>
      <NextButton buttonProps={buttonProps} />
    </Wrapper>
  );
};

export default Nickname;
