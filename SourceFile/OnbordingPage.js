import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

const OnbordingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
        <Image
          source={{uri: Platform.OS == 'ios' ? 'logo.png' : '@mipmap/logo'}}
          style={{
            width: '60%',
            height: '11%',
            resizeMode: 'contain',
            marginTop: Platform.OS == 'ios' ? 20:40,
            marginBottom:20
          }}
        />
        <Image
          source={{
            uri:
              Platform.OS == 'ios'
                ? 'undraw_Note_list_re_r4u9.png'
                : '@mipmap/undraw',
          }}
          style={{
            width: '100%',
            height: '40%',
            resizeMode: 'contain',
            marginTop: Platform.OS == 'ios' ? 0:10,

          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontWeight: '700',
            color: '#1b1b1b',
            marginTop: 25,
          }}>
          Tap More For{'\n'}Affordable Healthcare
        </Text>

        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate('Login')}
          underlayColor="#fff">
          <Text style={styles.loginText}>Log In </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              top: 15,
              color: '#878787',
            }}>
            Register By
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                color: '#003367',
              }}>
              {' '}
              Click here
            </Text>
          </Text>
        </TouchableOpacity>
    
      </View>
      {/* <Image
        source={{uri: Platform.OS == 'ios' ? 'logonew.png' : '@mipmap/logonew'}}
        style={{
          width: 100,
          height: 150,
          resizeMode: 'contain',
          // position: 'absolute',
          // left: 20,
          // bottom: 0,
        }}
      /> */}
      <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-end'
}}>
      <Image
        source={{uri: Platform.OS == 'ios' ? 'expedise.png' : '@mipmap/logonew'}}
        style={{
          width: 100,
          height: 50,
          resizeMode: 'contain',
          marginRight:20,
        }}
      />
      <Image
        source={{uri: Platform.OS == 'ios' ? 'batelco.png' : '@mipmap/batelco'}}
        style={{
          width: 100,
          height: 50,
          resizeMode: 'contain',
          marginRight:20,
          // flex:1
        }}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    // marginRight: 40,
    // marginLeft: 40,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009fc2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: '45%',
    // height: 45,
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
    fontSize: 22,
  },
});
export default OnbordingPage;
