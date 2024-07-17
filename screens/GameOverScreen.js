import {Text, View, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView} from 'react-native'

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';


import {useFonts} from 'expo-font';


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize

    };
    
    return (
        <ScrollView style={styles.screen}>
            <View  style={styles.rootContainer}>

                <Title>GAME OVER</Title>
                
                <View  style={[styles.imageContainer, imageStyle]}>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/success.png')} />

                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
                        
                        <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
                </View>
                

            </View>
        </ScrollView>
    )
}

export default GameOverScreen;


/// const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    screen: {
        flex:1,
    },
    
    rootContainer: {
        flex:1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imageContainer: {
        /// width: deviceWidth < 380 ? 150 : 300,
        /// height: deviceWidth < 380 ? 150 : 300,
        /// borderRadius: deviceWidth < 380 ? 75 : 150, // if it is hald the wxh, it is a circle.
        borderColor: Colors.primary800,
        overflow:"hidden",

    },

    image: {
        width: '100%',
        height: '100%' // refers to the container
    },

    summaryText: {
        fontFamily: "open-sans",
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 24,
        marginTop: 30,

    },

    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,

    }
});