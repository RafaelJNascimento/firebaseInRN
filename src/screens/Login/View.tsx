import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';
import { Controller } from 'react-hook-form';

import TextField from '../../global/components/TextFieldComponent';

import styles from './styles';
import useLoginViewModel from './view.model';
import colors from '../../global/assets/colors';

const LoginView: React.FC = () => {

    const {
        errors,
        control,
        handleSubmit,
        onPressSignIn,
        onPressSignUp,
        onPressForgotPassword,
    } = useLoginViewModel();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled>
                <View style={styles.form}>
                    <Text style={styles.title}>
                        Login
                    </Text>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label='Email'
                                color={colors.green_0}
                                value={value}
                                onBlur={onBlur}
                                autoCapitalize='none'
                                onChangeText={onChange}
                                keyboardType='email-address'
                                textContentType='emailAddress'
                            />)}
                    />
                    {errors.email &&
                        <Text style={styles.labelError}>
                            {errors.email.message}
                        </Text>
                    }
                    <View
                        style={{
                            marginBottom: 20
                        }}
                    />
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label='Password'
                                color={colors.green_0}
                                value={value}
                                onBlur={onBlur}
                                secureTextEntry={true}
                                onChangeText={onChange}
                            />)}
                    />
                    {errors.password &&
                        <Text style={styles.labelError}>
                            {errors.password.message}
                        </Text>
                    }
                    <TouchableOpacity
                        onPress={onPressForgotPassword}
                        style={styles.buttonForgotPassword}>
                        <Text
                            style={styles.textButtonForgotPassword}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.wrapperOptions}>
                        <TouchableOpacity
                            onPress={handleSubmit(onPressSignIn)}
                            style={styles.buttonAction}>
                            <Text
                                style={styles.textButtonAction}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressSignUp}
                            style={styles.buttonAction}>
                            <Text
                                style={styles.textButtonAction}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default LoginView;