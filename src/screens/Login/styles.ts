import { StyleSheet } from 'react-native';
import colors from '../../global/assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey_0,
    },
    form: {
        height: 370,
        borderRadius: 5,
        marginHorizontal: 25,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 12,
        color: colors.grey_1,
        fontWeight: '600',
    },
    labelError: {
        fontSize: 13,
        marginTop: 5,
        marginLeft: 5,
        color: colors.red_0,
        alignSelf: 'flex-start',
    },
    buttonAction: {
        height: 45,
        width: '100%',
        marginTop: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green_0,
    },
    textButtonAction: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '500',
    },
    wrapperOptions: {
        width: '80%',
        marginTop: 10,
    },
    buttonForgotPassword: {
        padding: 10,
        alignSelf: 'flex-end',
    },
    textButtonForgotPassword: {
        fontSize: 12,
        color: colors.blue_0,
    }
});

export default styles;