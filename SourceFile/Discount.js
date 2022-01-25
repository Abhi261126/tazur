import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image, View,ImageBackground} from 'react-native';
// import {GradientButton} from './.';
import Icon from './Icon';

const Discount = ({
  onButtonPress,
  heading,
  type,
  handleUpdate,
  handleDone,
  subtext,
  height = '100%',
  hideImage = false,
  showClose = false,
  dismissOption
}) => (
  <View style={{...styles.overlay, height: height}}>
    <View style={{...styles.alertBox}}>
      <TouchableOpacity onPress={dismissOption}>
    <View style={{width:30,height:30,top:-30,position:'absolute',right:0}}>
    {/* <Icon
              icon= {"Cross"}
              width={22}
              height={22}
              color={'#673ab7'}
            /> */}
    </View>
    </TouchableOpacity>

      {!hideImage && (
        <>
          <Image
          source={{uri: Platform.OS == 'ios' ? 'discountbanner.png':'@mipmap/discountbanner'}}
          style={{width: "20%", height: '15%',borderRadius:4,resizeMode:'cover',top:0,zIndex:100,
          position:'absolute',right:20}}
        />
        <Image
          source={{uri: Platform.OS == 'ios' ? 'Hospital.png':'@mipmap/hospital'}}
          style={{width: "100%", height: '60%',borderRadius:4,resizeMode:'cover',}}
        />
        </>
      )}
      <Text style={styles.alertHeading}>{heading}</Text>
      {subtext && <Text style={styles.subheading}>{subtext}</Text>}
        <View style={{flex:1}}>
        <Text style={styles.alertHeadingDiscount}>• {heading}</Text>
        <Text style={styles.alertHeadingDiscount}>• {heading}</Text>
        <Text style={styles.alertHeadingDiscount}>• {heading}</Text>

        </View>
     
    </View>
  </View>
);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor:'#fff'
  },
  alertBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  alert_image: {
    width: 50,
  },
  alertHeading: {
    fontSize: 15,
   
    color: '#000000',
    marginBottom: 5,
    paddingTop:20,
    paddingLeft:20
  },
  alertHeadingDiscount: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 5,
    paddingTop:10,
    paddingLeft:20
  },
  buttonBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gdText: {
    color: '#fff',
    fontSize: 15,
    // fontFamily: fontFamily.medium,
  },
  whiteButton: {
    borderColor: '#B6B6B6',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 42,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    // fontFamily: fontFamily.medium,
    color: '#9E9E9E',
  },
  btnCol: {
    width: '48%',
  },
  subheading: {
    fontSize: 11,
    color: 'rgba(43,43,43,0.41)',
    paddingTop:0,
    paddingLeft:20,
    borderBottomWidth:.5,
    borderBottomColor:'#cecece',
    height:30
  },
});

export default Discount;