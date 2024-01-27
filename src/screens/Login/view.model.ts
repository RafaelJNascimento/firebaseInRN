import * as yup from 'yup';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormLogin {
    email: string
    password: string
}

const useLoginViewModel = () => {

    const schema = yup.object().shape({
        email: yup
            .string()
            .required('Your email is required')
            .email('Invalid email'),
        password: yup
            .string()
            .required('Your password is required')
            .min(8, 'The password must contain at least 8 characters'),
    });

    const {
        control,
        handleSubmit,
        formState: { errors },
        resetField,
        clearErrors,
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    }
    );

    const onPressSignIn = ({ email, password }: IFormLogin) => {
        auth().
            signInWithEmailAndPassword(email, password).
            then(() => {
                resetField('email');
                resetField('password');
                Alert.alert(
                    'success',
                    'login completed'
                );
            }).catch((e) => {
                Alert.alert(
                    'Erro',
                    'Check your credentials and try again'
                );
            });
    }

    const onPressSignUp = () => {
        auth().
            createUserWithEmailAndPassword('teste@teste.com', '12345678').
            then(() => {
                Alert.alert('Account', 'Registered successfully');
            });
    }

    const onPressForgotPassword = () => {
        clearErrors();
        Alert.alert('Click', 'Forgot Password?');
    }

    return {
        errors,
        control,
        handleSubmit,
        onPressSignIn,
        onPressSignUp,
        onPressForgotPassword,
    };
}

export default useLoginViewModel;