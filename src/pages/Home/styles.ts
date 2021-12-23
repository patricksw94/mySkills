import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.text_dark};
    padding: 30px 70px;
`;

export const TitleText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    margin: 10px;
`;

export const Greetings = styled.Text`
    color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(18)}px;
    margin-top: 30px;
    border-radius: 7px;
 
`;

export const TitleSkills = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(24)}px;
    font-weight: bold;
    margin: 20px 5px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

   /* butão input padding: Platform.OS === 'ios' ? 15 : 10;  */