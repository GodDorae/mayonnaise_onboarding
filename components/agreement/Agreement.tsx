import React from 'react';
import {View, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {obligations, options} from '../../data/data';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const AllAgreeRow = styled(Row)`
  padding-top: 15px;
  padding-bottom: 30px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: black;
`;

const Group = styled.View`
  flex-direction: row;
`;

type IObligationProps = {
  agreementCheck: string[];
  setAgreementCheck: React.Dispatch<React.SetStateAction<string[]>>;
  obligationCheck: string[];
  setObligationCheck: React.Dispatch<React.SetStateAction<string[]>>;
  optionCheck: string[];
  setOptionCheck: React.Dispatch<React.SetStateAction<string[]>>;
  navigate: any;
};

const Agreement = ({
  agreementCheck,
  setAgreementCheck,
  obligationCheck,
  setObligationCheck,
  optionCheck,
  setOptionCheck,
  navigate,
}: IObligationProps) => {
  return (
    <View>
      <AllAgreeRow>
        <Group>
          <BouncyCheckbox
            size={25}
            fillColor="#FFCF54"
            unfillColor="white"
            disableBuiltInState
            isChecked={agreementCheck.length === 7 ? true : false}
            onPress={(isChecked: boolean) => {
              if (!isChecked && agreementCheck.length === 7) {
                setAgreementCheck(() => []);
                setObligationCheck(() => []);
                setOptionCheck(() => []);
              } else {
                setAgreementCheck([
                  'obligation1',
                  'obligation2',
                  'obligation3',
                  'obligation4',
                  'obligation5',
                  'option1',
                  'option2',
                ]);
                setObligationCheck([
                  'obligation1',
                  'obligation2',
                  'obligation3',
                  'obligation4',
                  'obligation5',
                ]);
                setOptionCheck(['option1', 'option2']);
              }
            }}
          />
          <Text>?????? ?????? (?????? ?????? ??????)</Text>
        </Group>
      </AllAgreeRow>
      {obligations.map(obligation => (
        <Row key={obligation.id}>
          <Group>
            <BouncyCheckbox
              size={25}
              fillColor="#FFCF54"
              unfillColor="white"
              disableBuiltInState
              isChecked={
                obligationCheck.includes(obligation.value) ? true : false
              }
              onPress={(isChecked: boolean) => {
                if (!isChecked && obligationCheck.includes(obligation.value)) {
                  setObligationCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(obligation.value), 1);
                    return newArray;
                  });
                  setAgreementCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(obligation.value), 1);
                    return newArray;
                  });
                } else {
                  setObligationCheck(prev => [...prev, obligation.value]);
                  setAgreementCheck(prev => [...prev, obligation.value]);
                }
              }}
            />
            <Text>{obligation.text}</Text>
          </Group>
          <Pressable
            onPress={() => {
              navigate('AgreementDetail', {
                property: 'obligation',
                number: obligation.id,
                title: obligation.text,
              });
            }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </Row>
      ))}
      {options.map(option => (
        <Row key={option.id}>
          <Group>
            <BouncyCheckbox
              size={25}
              fillColor="#FFCF54"
              unfillColor="white"
              disableBuiltInState
              isChecked={optionCheck.includes(option.value) ? true : false}
              onPress={(isChecked: boolean) => {
                if (!isChecked && optionCheck.includes(option.value)) {
                  setOptionCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(option.value), 1);
                    return newArray;
                  });
                  setAgreementCheck(prev => {
                    const newArray = [...prev];
                    newArray.splice(newArray.indexOf(option.value), 1);
                    return newArray;
                  });
                } else {
                  setOptionCheck(prev => [...prev, option.value]);
                  setAgreementCheck(prev => [...prev, option.value]);
                }
              }}
            />
            <Text>{option.text}</Text>
          </Group>
          <Pressable
            onPress={() => {
              navigate('AgreementDetail', {
                property: 'option',
                number: option.id,
                title: option.text,
              });
            }}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Pressable>
        </Row>
      ))}
    </View>
  );
};

export default Agreement;
