import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {NetworkInfo} from 'react-native-network-info';
import Loader from './Loader';
import Toast from 'react-native-simple-toast';
const Login = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [loader, setLoader] = useState(false);

  const loginApiCall = () => {
    if (mobile == '') {
      return;
    } else if (mobile.length < 10) {
      return;
    } else {
      console.log('Number(mobile)', Number(mobile));
      setLoader(true);
      axios
        .post(
          'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetUserLogin',
          {
            Mobile: 3456789872,
            // 3456789872,
            // Number(mobile),
            Current_Dt: '2022-01-06 06:35:47.597',
            Crtd_Usr: 1,
            Crtd_Ip_Addr: '197.347.456.4',
          },
        )
        .then(response => {
          if (response.status) {
            setLoader(false);
console.log('Otp response',response.data.ResponseObj.UsersObj.map((data)=> data.OTP_Cd)[0])
            if (response.data.ResponseObj.UsersObj.map((data)=> data.OTP_Cd)[0] != undefined) {
                  navigation.navigate('Otp', {mobileNo: Number(mobile) , Otp:
                    response.data.ResponseObj.UsersObj.map((data)=> data.OTP_Cd)[0]
                  });
            }else{
              Toast.show(response.data.ResponseObj.UsersObj.map((data)=> data.Error_Desc)[0]);
            }
          }
        });
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        // <ScrollView style = {{backgroundColor:'red'}}>

        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
          <Image
            source={{uri: Platform.OS == 'ios' ? 'Login.png' : '@mipmap/login'}}
            style={{
              width: 300,
              height: 300,
              resizeMode: Platform.OS == 'ios' ? 'repeat' : 'cover',
              marginTop: 50,
            }}
          />

          <LinearGradient
            style={{
              flex: 1,
              backgroundColor: '#9edefa',
              alignItems: 'center',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: '50%',
              position:'absolute',
              bottom:0
            }}
            colors={['rgb(168,202,243)', 'rgb(217,240,248)']}
            useAngle={true}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                top: 20,
                color: 'rgb(21,21,21)',
              }}>
              Login to{'\n'}Continue!
            </Text>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 30,
                color: 'rgb(69,69,69)',
              }}>
              We have sent you an SMS with a code
            </Text>
            {/* <ScrollView> */}
            <TextInput
              style={styles.textField}
              placeholder={'Please enter mobile number'}
              maxLength={10}
              underlineColorAndroid="transparent"
              onChangeText={val => setMobile(val)}
              keyboardType="numeric"
              placeholderTextColor="rgb(69,69,69)"
              color={'rgb(69,69,69)'}
            />
            {/* </ScrollView> */}
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={loginApiCall}
              underlayColor="#fff">
              <Text style={styles.loginText}>Next-></Text>
            </TouchableOpacity>
            {/* </View>
             */}
          </LinearGradient>
        </View>
        // </ScrollView>

     )}
    </>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
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
    fontWeight: '700',
    fontSize: 18,
  },
});
export default Login;
