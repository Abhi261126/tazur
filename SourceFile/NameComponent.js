import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from './Icon';

const NameComponent = props => {
 
  const {headerText, subHeaderText,isSearch,clickEvent} = props;
  return (
       <View
        style={{
          width: '100%',
          flexDirection: 'row',
          flex:isSearch ? 1:0
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              width: '100%',
              fontSize: 18,
              marginLeft: 30,
              color: 'rgb(112,121,161)',
            }}>
            Hi, MANISH
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 30,
              marginLeft: 30,
              marginTop: 5,
              fontWeight: 'bold',
              color: 'rgb(22,21,21)',
            }}>
            Find Deals
          </Text>
        </View>
        <TouchableOpacity onPress={clickEvent} style={{width: 50,
            height: 50,
            backgroundColor: 'blue',
            position: 'absolute',
            right: 20,
            alignSelf: 'center',
            borderRadius: 25,
            flex: 1,}}>
        
          </TouchableOpacity>
      </View>
      
     
  );
};

export default NameComponent;
