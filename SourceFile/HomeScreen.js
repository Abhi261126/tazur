import React, {useEffect, useState, createRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  SectionList,
} from 'react-native';

import HederComponent from './HederComponent';
import Cells from './Cells';
import axios from 'axios';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import Loader from './Loader';
import Discount from './Discount';
import ActionSheet from 'react-native-actions-sheet';

function HomeScreen(props) {
  const {navigation} = props;

  const [refresh, onRefresh] = useState(false);
  const [health, setHealth] = useState([]);
  const [pick, setPick] = useState([]);
  const [cate, setCate] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const actionSheetRef = createRef();

  var data = [
    {
      title: 'A',
      data: [],
    },
    {
      title: 'Healthcare Providers Near You',
      data: health,
    },
    {
      title: 'Top Picks For You',
      data: pick,
    },
  ];

  const gotoTestStackScreen = () => {
    props.navigation.navigate('Search');
  };

  useEffect(() => {
    getProviderNearMe();
  }, []);

  const getProviderNearMe = () => {
    setLoader(true);
    axios
      .post(
        'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetProvidersNearMe',
        {
          Latitude: 28.4392374,
          Longitude: 77.0406362,
        },
      )
      .then(response => {
        setHealth([response.data.ResponseObj.ProvidersObj]);
        getProviderList();
      });
  };

  const getProviderList = () => {
    axios
      .post(
        'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetProvidersList',
        {
          Mode: 'R',
          Is_Features: 1,
        },
      )
      .then(response => {
        setPick([response.data.ResponseObj.ProvidersObj]);
        getCategoryList();
      });
  };

  const getCategoryList = () => {
    axios
      .post(
        'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetProviderCategory',
        {
          Mode: 'R',
        },
      )
      .then(response => {
        setCate(response.data.ResponseObj.ProviderCategoryObj);
        onRefresh(true);
        setLoader(false);
      });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <SafeAreaView
            style={{backgroundColor: 'rgb(240,240,245)', marginTop: 30}}>
            {!refresh && <DoubleBounce size={10} color="#1CAFF6" />}
            {console.log('response API', data)}
            <SectionList
              style={{bottom: '5%'}}
              sections={data}
              refreshing={true}
              extraData={refresh}
              renderItem={({item, section}) => (
                // <>
                <Cells
                  data={item}
                  isTop={section.title == 'Top Picks For You' ? true : false}
                  cellSelection={() =>
                    // setShowDiscount(true)
                    // console.log('showDiscount')
                    actionSheetRef.current?.show()
                  }
                />
                // </>
              )}
              renderSectionHeader={({section}) =>
                section.title == 'A' ? (
                  <HederComponent
                    headerText={'A Start To Healthier You!'}
                    subHeaderText={
                      'Find the best discount at your nearest Healthcare provider'
                    }
                    data={cate}
                    onclickTest={test =>
                      // console.log('click event ',test)
                      props.navigation.navigate('Search', {Search: test})
                    }
                    onClickNavigation={
                      test => props.navigation.navigate('HealthCard')
                      // props.navigation.navigate('Search',{Search:test})
                    }
                    // clickToOpenDiscount = {
                    //   (test) =>

                    // }
                  />
                ) : (
                  <Text
                    style={{
                      marginLeft: 20,
                      marginTop:
                        section.title == 'Healthcare Providers Near You'
                          ? '10%'
                          : '0%',
                      fontWeight: 'bold',
                      fontSize: 15,
                      position: 'relative',
                      color: 'rgb(13,13,13)',
                    }}>
                    {/* Header */}
                    {' ' + section.title}
                  </Text>
                )
              }
              stickySectionHeadersEnabled={false}
              keyExtractor={(item, index) => item}
            />
            <ActionSheet ref={actionSheetRef}>
              <View style={{height:400,backgroundColor:'#fff'}}>
              <Discount
              heading={'Omini Hospital'}
              subtext={'Location'}
              dismissOption={() => setShowDiscount(false)}
            />
              </View>
            </ActionSheet>
          </SafeAreaView>
          {showDiscount &&
            console.log(
              'showDiscount',
            )
          }
        </>
      )}
    </>
  );
}

export default HomeScreen;
