import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#ddd',
    },
    header: {
        fontSize: 40,
        color: '#aaa',
        padding: 10,
        textShadowOffset: { width: 2, height: 2 },
    }
});