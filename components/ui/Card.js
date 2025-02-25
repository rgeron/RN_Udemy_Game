import {
    Text,
    View,
    StyleSheet,
    Dimensions

} from 'react-native';

import Colors from '../../constants/colors';


function Card ({children}){



    return ( <View style={styles.card}>{children}</View>

    
)
}
   

export default Card;

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    card : {
        alignItems : 'center',
        justifyContent:'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius:8,
        elevation:8, //shadow : the number is the level. Attention, iOS does not understand elevation. It is only for android
        shadowColor:'black', // this is for iOS
        shadowOffset: {width: 0, height:2},
        shadowRadius:6,
        shadowOpacity: 0.25

    },
});