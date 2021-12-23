import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonAdd = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px;
    border-radius: 7px;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(17)}px;
    font-weight: bold;
`;
