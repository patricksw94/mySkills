import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonSkill = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.dark};
    padding: 15px;
    border-radius: 50px;
    align-items: center;
    margin: 0 8px;
`;

export const TextSkill = styled.Text`
   color: ${({ theme }) => theme.colors.white};  
   font-size: ${RFValue(22)}px;
    font-weight: bold;
`;
