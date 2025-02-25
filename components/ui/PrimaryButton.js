import {
    Text,
    View,
    Pressable,
    StyleSheet

} from 'react-native';

import Colors from '../../constants/colors'


function PrimaryButton({children, onPress}){

    function pressHandler() {
        onPress();
    }

    return (
    
    <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer ] : styles.buttonInnerContainer} /// pressed is a boolean
        onPress={onPress} 
        android_ripple={{color:Colors.primary600}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View> 

    
)
}
   


export default PrimaryButton;

const styles = StyleSheet.create({

    buttonOuterContainer: {
        borderRadius: 28,
        margin:4,
        overflow:"hidden"

    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical:8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    buttonText: {
        color:"white",
        textAlign:'center',
    },

    pressed: {
        opacity:0.75 /// 25% transparent 75% opaque
    },

});