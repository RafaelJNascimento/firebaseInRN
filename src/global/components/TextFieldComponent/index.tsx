import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    ViewStyle,
    TextStyle,
    KeyboardTypeOptions,
} from 'react-native';

import styles from './styles';
import colors from '../../assets/colors';
interface TextFieldProps {
    label: string
    value?: string | undefined
    color?: string | undefined
    onBlur?: Function | undefined
    styleLabel?: TextStyle | undefined
    styleInput?: TextStyle | undefined
    autoCorrect?: boolean | undefined
    styleWrapper?: ViewStyle | undefined
    onChangeText?: ((text: string) => void) | undefined
    secureTextEntry?: boolean | undefined
    textContentType?: any,
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
    keyboardType?: KeyboardTypeOptions | undefined
}

const TextField: React.FC<TextFieldProps> = (props) => {

    const {
        label,
        value = undefined,
        color = 'red',
        onBlur = () => { },
        styleLabel = {},
        styleInput = {},
        styleWrapper = {},
        onChangeText = undefined,
        autoCorrect,
        secureTextEntry,
        textContentType,
        autoCapitalize,
        keyboardType,
    } = props;

    const refInput = useRef<TextInput | null>(null);
    const [inFocus, setInFocus] = useState<boolean>(false);

    return (
        <View
            style={[
                styles.wrapper,
                styleWrapper,
                { borderColor: inFocus ? color : colors.grey_2 }
            ]}>
            {
                inFocus
                &&
                <Text style={[
                    styles.label,
                    styleLabel,
                    { color }
                ]}>
                    {label}
                </Text>
            }
            <TextInput
                ref={refInput}
                value={value}
                onChangeText={onChangeText}
                style={[styles.input, styleInput]}
                placeholder={!inFocus ? label : ""}
                onFocus={() => setInFocus(true)}
                onBlur={() => {
                    setInFocus(false);
                    onBlur();
                }}
                autoCorrect={autoCorrect}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                textContentType={textContentType}
            />
        </View>
    );
}

export default TextField;