import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const Button = styled.Pressable`
  width: ${Dimensions.get('window').width - 40}px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ActiveButton = styled(Button)`
  background-color: #fff9e8;
  border-color: #ffcf54;
`;

const InactiveButton = styled(Button)`
  background-color: #f4f5f7;
`;

const ButtonText = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

type IPreferenceButtonProps = {
  buttonProps: {
    isActive: boolean;
    text: string;
    onPress: () => void;
    disablePossibility: boolean;
  };
};

const PreferenceButton = (props: IPreferenceButtonProps) => {
  const {isActive, text, onPress, disablePossibility} = props.buttonProps;

  return (
    <View>
      {isActive ? (
        disablePossibility ? (
          <ActiveButton onPress={onPress} disabled={!isActive ? true : false}>
            <ButtonText>{text}</ButtonText>
          </ActiveButton>
        ) : (
          <ActiveButton onPress={onPress}>
            <ButtonText>{text}</ButtonText>
          </ActiveButton>
        )
      ) : disablePossibility ? (
        <InactiveButton onPress={onPress} disabled={!isActive ? true : false}>
          <ButtonText>{text}</ButtonText>
        </InactiveButton>
      ) : (
        <InactiveButton onPress={onPress}>
          <ButtonText>{text}</ButtonText>
        </InactiveButton>
      )}
    </View>
  );
};

export default PreferenceButton;
