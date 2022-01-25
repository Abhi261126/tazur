import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function SettingsScreen({navigation}) {
  return (
   
   <View style={{flex: 1}}>
      {/* <Text>Settings!</Text> */}
      <LinearGradient
        style={{
          top: 100,
          height: 230,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 20,
          justifyContent: 'center',
        }}
        colors={['rgb(168,202,243)', 'rgb(217,240,248)']}
        useAngle={true}>
          <TouchableOpacity 
          style={
            {
              height:20,
              position:'absolute',right:20,top:20
            }
          }
          onPress={() => 
          navigation.navigate('SignUp')}
          // console.log('click check')}
          >
            
          <Text style={{color:'rgb(6,38,84)'}}>Edit</Text>
          </TouchableOpacity>
        <View
          style={{
            // width: 130,
            height: 130,
            // backgroundColor: 'red',
            borderRadius: 75,
            marginLeft: 20,
            flexDirection:'row'
          }}>
            
          {/* <Image
            source={{uri: 'Hospital.png'}}
            style={{width: 130, height: 130, borderRadius: 4, borderRadius: 75}}
          /> */}
          <Image
                    source={{uri: Platform.OS == 'ios' ? 'Hospital.png':'@mipmap/hospital'}}
                    style={{width: 130, height: 130,borderRadius:4,resizeMode:'cover',borderRadius: 75,}}
                  />
          <View style={{marginLeft:10,marginTop:10}}>
          <Text style={{fontWeight:'900',fontSize:20,color:'rgb(5,34,76)'}}>Abhishek Singh</Text>
          <Text style={{fontSize:14,color:'rgb(58,57,57)'}}>Abhi@gmail.com</Text>
          <Text style={{ffontSize:14,color:'rgb(58,57,57)'}}>+917217718424</Text>
          <Text style={{fontSize:11,color:'rgb(6,36,83)',marginTop:15}}>NATIONAL ID NUMBER</Text>
          <Text style={{fontSize:14,color:'rgb(11,10,10)'}}>ABCDEFGH</Text>

          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 150,
          borderRadius: 20,
          // alignItems:'center',
          // flex:1,
          // position:'absolute',
          // bottom:0
        }}>
        <Text
          style={{
            top: 10,
            paddingLeft: 30,
            fontWeight: 'bold',
            fontSize: 20,
            color:'rgb(6,36,83)',
            // backgroundColor:'red'
          }}>
          Healthcard
        </Text>
        
        <Image
            source={{uri: Platform.OS == 'ios' ? 'cardimg.png' : '@mipmap/cardimg'}}
            style={{
              width: '90%',
              height: '80%',
              resizeMode: 'center',
              borderRadius:10,
              alignSelf:'center'
            }}
            
          >
            {/* <Text>test</Text> */}
            </Image>
      </View>
    </View>
  
  );
}

export default SettingsScreen;
