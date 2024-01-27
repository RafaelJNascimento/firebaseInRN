import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        width: '98%',
        borderWidth: 2,
        borderRadius: 4,
        alignSelf: 'center',
    },
    label: {
        left: '2%',
        top: '-20%',
        position: 'absolute',
        paddingHorizontal: 4,
        backgroundColor: colors.white,
    },
    input: {
        width: '100%',
        height: '100%',
        paddingVertical: 0,
        paddingHorizontal: 10,
    },
});

export default styles;