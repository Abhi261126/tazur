import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [nationalId, setNationalId] = useState('');

  const signUP = () => {
    if (mobile == '') {
      return;
    } else if (mobile.length < 10) {
      return;
    } else {
      // console.log('Number(mobile)',Number(mobile))
      // navigation.navigate('Otp',{mobileNo : Number(mobile)})

      axios
        .post(
          'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/CreateUpdateUsers',
          {
            Mode: 'C',
            Name: name,
            Dob: dob,
            Gender: gender,
            Mobile: Number(mobile),
            Email: email,
            ContentType: 'image/png',
            Profile_Images: '',
            Address1: 'Gurgaon',
            Address2: '',
            Address3: '',
            Country: 'INDIA',
            PINZIP: '122001',
            National_Id: nationalId,
            Crtd_Usr: 1,
            Crtd_Dt: '2022-01-06T06:30:47.597Z',
            Crtd_Ip_Addr: '197.373.26.365',
          },
        )
        .then(response => {
          console.log('response API', response.status);
          if (response.status) {
            navigation.navigate('Otp');
          }
        });
    }
  };

  const onChangeText = (enterString) => {
    console.log(`onChangeText: ${enterString}`);
    setErrorHandle(false);
    if (enterString.trim().length > 0) {
      if (/^-?\d+$/.test(enterString)) {
        setInputVal(enterString);
      } else {
        showMessage({
          message:
            'Please enter a valid phone number. Area code is not required.',
          type: 'danger',
        });
      }
    } else {
      setInputVal(enterString.trim());
    }
  };

// Email validation
const emailValidation = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setEmail(text);
      return false;
    } else {
      setEmail(text);
      console.log('Email is Correct');
      return true;
    }
  };

const nameValidation = (enterString) => {
    console.log(`onChangeText: ${enterString}`);
    if (enterString.trim().length > 0) {
      if (/^[A-z]*$|^[A-z]+([\ A-Za-z]+)*$/.test(enterString)) {
        setName(enterString);

      } else {
      }
    } else {
      setName(enterString.trim());
    }
  };

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
      <LinearGradient
        style={{
          // marginTop: 50,
          alignItems: 'center',
          width: '100%',
          borderRadius: 20,
          height: '95%',
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
          Create an{'\n'}Account!
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            paddingTop: 30,
            color: 'rgb(21,21,21)',
          }}>
          Greate Deals are waiting!
        </Text>
       
       <ScrollView style={{width:'100%'}}>
        <TextInput
          style={styles.textField}
          placeholder={'Name'}
          onChangeText={val => {
            nameValidation(val)
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}
        />
        <TextInput
          style={styles.textField}
          placeholder={'Email'}
          onChangeText={val => {
            emailValidation(val)
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}
        />
        <TextInput
          style={styles.textField}
          placeholder={'DOB'}
          onChangeText={val => {
            setDOB(val);
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}

        />

        <TextInput
          style={styles.textField}
          placeholder={'Gender'}
          onChangeText={val => {
            setGender(val);
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}

        />

        <TextInput
          style={styles.textField}
          placeholder={'Mobile Number'}
          onChangeText={val => {
            setMobile(val);
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}
          keyboardType = "number-pad"
          maxLength={10}

        />

        <TextInput
          style={styles.textField}
          placeholder={'National ID'}
          onChangeText={val => {
            setNationalId(val);
          }}
          placeholderTextColor={'rgb(69,69,69)'}
          color={'rgb(69,69,69)'}

        />
       </ScrollView>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={signUP}
          underlayColor="#fff">
          <Text style={styles.loginText}>Next-></Text>
        </TouchableOpacity>
        {/* </View> */}
      </LinearGradient>
    </View>
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
    bottom: 10,
    
    // position: 'absolute',
  },
  textField: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 28,
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
export default SignUp;
