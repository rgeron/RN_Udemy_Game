import {
    Text,
    View,
    StyleSheet,
    Platform,
} from 'react-native';


function Title ({ children }){

    return <Text style={styles.title}>{children}</Text>
}
   

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize:24,
        // fontWeight: 'bold', // not needed anymore
        color: "white",
        textAlign: 'center',
        borderWidth: Platform.select({ios: 5 , android: 2}),
        borderColor : "white",
        padding: 12,
        marginBottom: 20, ///added myself
        marginTop: 50,

        maxWidth: '80%',
        minWidth: 300

    },
});