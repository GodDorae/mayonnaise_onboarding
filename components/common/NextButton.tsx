import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const Button = styled.Pressable`
  width: ${Dimensions.get('window').width - 40}px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ActiveButton = styled(Button)`
  background-color: #ffcf54;
`;

const InactiveButton = styled(Button)`
  background-color: #e4e6eb;
`;

const ButtonText = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 15px;
  font-weight: bold;
`;

const ActiveButtonText = styled(ButtonText)`
  color: black;
`;

const InactiveButtonText = styled(ButtonText)`
  color: white;
`;

type INextButtonProps = {
  buttonProps: {
    isActive: boolean;
    text: string;
    onPress: () => void;
    disablePossibility: boolean;
  };
};

const NextButton = (props: INextButtonProps) => {
  const {isActive, text, onPress, disablePossibility} = props.buttonProps;

  return (
    <ButtonContainer>
      {isActive ? (
        disablePossibility ? (
          <ActiveButton onPress={onPress} disabled={!isActive ? true : false}>
            <ActiveButtonText>{text}</ActiveButtonText>
          </ActiveButton>
        ) : (
          <ActiveButton onPress={onPress}>
            <ActiveButtonText>{text}</ActiveButtonText>
          </ActiveButton>
        )
      ) : disablePossibility ? (
        <InactiveButton onPress={onPress} disabled={!isActive ? true : false}>
          <InactiveButtonText>{text}</InactiveButtonText>
        </InactiveButton>
      ) : (
        <InactiveButton onPress={onPress}>
          <InactiveButtonText>{text}</InactiveButtonText>
        </InactiveButton>
      )}
    </ButtonContainer>
  );
};

export default NextButton;
