import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from './Icon';
import NameComponent from './NameComponent';
import {useIsFocused} from '@react-navigation/native';

const HederComponent = props => {
  const isFocused = useIsFocused();

  const {
    headerText,
    subHeaderText,
    isSearch,
    data,
    onclickTest,
    onClickNavigation,
    clickToOpenDiscount,
  } = props;
  useEffect(() => {
    // console.log('LinearGradient1111 data',data)
  }, [isFocused]);

  return (
    <View
      style={{
        width: '100%',
        height: isSearch ? 300 : 500,
        top: 20,
        // backgroundColor:'red'
      }}>
      {!isSearch && <NameComponent clickEvent={onClickNavigation} />}
      <TouchableOpacity activeOpacity={1} onPress={clickToOpenDiscount}>
        <LinearGradient
          style={{
            height: 180,
            backgroundColor: 'red',
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 20,
          }}
          colors={['rgb(168,202,243)', 'rgb(217,240,248)']}
          useAngle={true}>
          {isSearch && (
            <NameComponent isSearch={isSearch} clickEvent={onClickNavigation} />
          )}

          {!isSearch && (
            <Text
              style={{
                width: '100%',
                fontSize: 25,
                marginLeft: 15,
                marginTop: 25,
                fontWeight: 'bold',
                color: 'rgb(22,21,21)',
              }}>
              {headerText}
            </Text>
          )}
          {!isSearch && (
            <Text
              style={{
                fontSize: 18,
                marginLeft: 15,
                marginTop: 20,
                color: 'rgb(112,121,161)',
              }}>
              {subHeaderText}
            </Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
      <View
        style={{
          width: '70%',
          height: isSearch ? '15%' : '10%',
          backgroundColor: '#fff',
          alignSelf: 'center',
          top: -25,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{marginLeft: 10, color: '#999', width: '80%'}}
          placeholder={'Search'}
          placeholderTextColor={'#ccc'}
        />
        <Icon icon={'SearchIcon'} width={22} height={22} />
      </View>

      {!isSearch ? (
        <View
          style={{
            height: '55%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
          }}>
          {data.map(dataGet => {
            {
              console.log('dataGet dataGet', dataGet);
            }
            return (
              <View
                style={{
                  width: '22%',
                  height: '27%',
                  marginLeft: 4,
                  marginRight: 4,
                  marginTop: 10,
                  alignItems: 'center',
                  // justifyContent:'center',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: 12,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => onclickTest(dataGet.Category_Nm)}>
                    {/* <Icon icon={'Dashboard'} width={22} height={22} /> */}
                    <Image
                      style={{width: 27, height: 27}}
                      source={{uri: 'data:image/png;base64,' + dataGet.Images}}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        position: 'relative',
                        top: 5,
                        paddingLeft: 2,
                        paddingRight: 2,
                        textAlign: 'center',
                        color: 'rgb(3,36,83)',
                      }}>
                      {dataGet.Category_Nm}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
          {/* </ScrollView> */}
        </View>
      ) : (
        <View
          style={{
            height: '55%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
          }}>
          <ScrollView horizontal={true}>
            {data.map(dataGet => {
              return (
                <View
                  style={{
                    width: 100,
                    height: 30,
                    marginLeft: 8,
                    marginRight: 4,
                    alignItems: 'center',
                    backgroundColor: 'rgb(240,240,245)',
                    borderRadius: 10,
                    justifyContent: 'center',
                    borderColor: '#ccc',
                    borderWidth: 1,
                  }}>
                  <View
                    style={{
                      position: 'absolute',
                      alignItems: 'center',
                    }}>
                    {!isSearch && (
                      <Icon icon={'Dashboard'} width={22} height={22} />
                    )}
                    <Text
                      style={{
                        fontSize: 12,
                        position: 'relative',
                        paddingLeft: 2,
                        paddingRight: 2,
                        textAlign: 'center',
                        color: 'rgb(3,36,83)',
                      }}>
                      {dataGet.Category_Nm}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default HederComponent;
