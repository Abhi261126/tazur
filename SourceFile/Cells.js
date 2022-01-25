import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Cells = props => {
  const {data, isTop = false, cellSelection} = props;
  return (
    <>
      <View
        style={{
          // height: 150,
          margin: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {!isTop ? (
          <>
            <ScrollView horizontal={true}>
              {data.map(data => {
                return (
                  <TouchableOpacity onPress={cellSelection}>
                    <View
                      style={{
                        width: 150,
                        height: 150,
                        marginLeft: 8,
                        marginRight: 4,
                        marginTop: 10,
                      }}>
                          <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 4,
                          resizeMode: 'cover',
                          backgroundColor: 'transparent',
                        }}
                        source={{uri: 'data:image/png;base64,' + data.Images}}
                      />
                      <LinearGradient
                        style={{

                          width: 150,
                          height: 150,
                          backgroundColor: 'transparent',
                          top:-150
                        }}
                        start={{x: 0.0, y: 0}}
                        end={{x: 0, y: 1.3}}
                        colors={['rgba(255,255,255,0.1);', 'rgba(0,0,0,1)']}>
                        <Text
                          style={{
                            position: 'absolute',
                            bottom: 10,
                            color: '#fff',
                            // fontWeight: 'bold',
                            fontSize: 14,
                            flexWrap: 'wrap',
                            flex: 1,
                            width: '100%',
                            marginLeft:10
                            // textAlign: 'center',
                          }}>
                          {data.Provider_Nm}
                        </Text>
                      </LinearGradient>
                    
                    </View>
                 
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </>
        ) : (
          <>
            {data.map(data => {
              {
                console.log('ScrollView data', data);
              }
              return (
                <TouchableOpacity
                  onPress={cellSelection}
                 >
                   <View
                      style={{
                        width: 160,
                        height: 160,
                        marginLeft: 4,
                        marginRight: 4,
                        marginTop: 10,
                      }}>
                          <Image
                        style={{
                          width: 160,
                          height: 160,
                          borderRadius: 4,
                          resizeMode: 'cover',
                          backgroundColor: 'transparent',
                        }}
                        source={{uri: 'data:image/png;base64,' + data.Images}}
                      />
                      <LinearGradient
                        style={{

                          width: "100%",
                          height: "100%",
                          backgroundColor: 'transparent',
                          top:-160
                        }}
                        start={{x: 0.0, y: 0}}
                        end={{x: 0, y: 1.3}}
                        colors={['rgba(255,255,255,0.1);', 'rgba(0,0,0,1)']}>
                        <Text
                          style={{
                            position: 'absolute',
                            bottom: 10,
                            color: '#fff',
                            // fontWeight: 'bold',
                            fontSize: 14,
                            flexWrap: 'wrap',
                            flex: 1,
                            width: '100%',
                            marginLeft:10

                            // textAlign: 'center',
                          }}>
                          {data.Provider_Nm}
                        </Text>
                      </LinearGradient>
                    
                    </View>
                 
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </View>
    </>
  );
};

export default Cells;
