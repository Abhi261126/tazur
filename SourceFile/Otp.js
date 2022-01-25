import React, { useRef,useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Loader from './Loader';

const OTP = ({navigation,route}) => {
  const [loader, setLoader] = useState(false);

  const otpVerify = () => {
    // console.log('route.params ',route.params.Otp)
    // navigation.navigate('Dashboard')
    // if (mobile == '') {
    //   return;
    // } else if (mobile.length < 10) {
    //   return;
    // } else {
    //   navigation.navigate('Otp')
    setLoader(true)
      axios
        .post(
          'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetUserValidate',
          {
            Mobile: Number(route.params.mobileNo),
            Current_Dt: '2022-01-06 06:35:47.597',
            OTP_Cd: route.params.Otp,
          },
        )
        .then(response => {
          console.log('response API',response.status)
          setLoader(false)

          if (response.status) {
              navigation.navigate('Dashboard')
          }
        });
    // }
  };


  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
   <>
    {loader ? (<Loader/>):(
      <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
        <Image
          source={{uri: Platform.OS == 'ios' ? 'Login.png':'@mipmap/undraw_otp'}}
          style={{width: 300, height: 300, resizeMode:Platform.OS == 'ios'? 'repeat' :'cover', marginTop: 50}}
        />
        {/* <View
          style={{
            flex: 1,
            backgroundColor: '#9edefa',
            alignItems: 'center',
            width: '100%',
            borderRadius: 20,
          }}> */}
          <LinearGradient
        style={{
          flex: 1,
          backgroundColor: '#9edefa',
          alignItems: 'center',
          width: '100%',
          // borderRadius: 20,
          position:'absolute',
          bottom:0,
          height: '50%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

        }}
        colors={['rgb(168,202,243)', 'rgb(217,240,248)']}
        useAngle={true}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              top: 20,
              color:'rgb(21,21,21)'

            }}>
            OTP{'\n'}Verification!
          </Text>

          <Text style={{textAlign: 'center', fontSize: 18, paddingTop: 30,color:'rgb(69,69,69)'}}>
            Enter your 4-digit OTP code to continue
          </Text>
          <OTPTextInput ref={e => console.log(e)} 
          tintColor='#fff'
          offTintColor='#000000'
          // OTPTextInput={route.params.Otp}
          defaultValue={route.params.Otp}
          />
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={otpVerify
              // navigation.navigate('Dashboard')
            }
            underlayColor="#fff">
            <Text style={styles.loginText}>Next-></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{top:10}}
            //   onPress={() => navigate('HomeScreen')}
            underlayColor="#fff">
            <Text style={{
    color: 'rgb(6,36,83)',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    bottom: 0,

  }}>Resend OTP</Text>
          </TouchableOpacity>
        {/* </View> */}
        </LinearGradient>
      </View>
    )}
    </>
      // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(6,36,83)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    bottom: 0,

  },
  textField: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#d6e5f8',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    paddingHorizontal: 20,

  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    fontWeight:'700',
    fontSize:18
  },
});
export default OTP;
