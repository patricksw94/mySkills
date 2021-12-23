import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonAdd, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest } : ButtonProps){
    return (
        <ButtonAdd
         activeOpacity={.7}
         {...rest}
         >
         <ButtonText>{title}</ButtonText>
       </ButtonAdd>
    )
}
