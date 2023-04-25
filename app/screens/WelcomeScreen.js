import React from 'react';
import {View, StyleSheet, ImageBackground, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';

const blurRadiusValue = Platform.OS === 'android'? 0.7 : 5.5;

function WelcomeScreen({navigation}) {
    return (
        <AppScreen>
            <ImageBackground 
                source={require("../assets/Background-Image.jpeg")}
                style={styles.background}
                blurRadius={blurRadiusValue}>
                
                <View style={styles.welcomeContainer}>
                    <MaterialCommunityIcons
                        name="library"
                        size={60}
                        color={AppColors.primaryColor}/>
                    <AppText> Welcome to BookWorm</AppText>
                </View>


                <View style={styles.buttonsContainer}>
                    <AppButton title="Login" onPress={ () => navigation.navigate("Login")}/>
                    <AppButton title="Register" color="secondaryColor" onPress={ () => navigation.navigate("Register")}/>
                </View>
            </ImageBackground>
        </AppScreen>

    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }, 
    buttonsContainer:{
        marginTop: 350,
        marginEnd:10,
        flexDirection:'column',
        justifyContent: 'space-between',
        height: 150,
        alignSelf: 'flex-end',
        width: '50%'
        
    }
})
export default WelcomeScreen;