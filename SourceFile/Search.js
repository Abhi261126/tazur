import React, {useEffect, useState} from 'react';
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
import { useIsFocused } from '@react-navigation/native';

import HederComponent from './HederComponent';
import Cells from './Cells';
import axios from 'axios';
import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import Loader from './Loader';
// import AsyncStorage from '@react-native-async-storage/async-storage';


function Search({route}) {

  const isFocused = useIsFocused();

  const [search, setSearch] = useState([]);
  const [refresh, onRefresh] = useState(false);
  const [cate, setCate] = useState([]);

  var data = [
    {
      title: 'A',
      data: [],
    },
    {
      title: 'Top Picks For You',
      data: search,
    },
  ]

  const getData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('@search_key')
    //   if(value !== null) {
    //     // value previously stored
    //     console.log('search log value',value)

    //       // return value

    //   }
    // } catch(e) {
    //   // error reading value
    //   console.log('search log e',e)

    // }
  }
  useEffect(() => {
   
    getProviderSearch(route.params != null ? route.params.Search : "");
    getCategoryList()
  }, [isFocused]);

  const getProviderSearch = (search = "") => {
    // console.log('search log',search)
    onRefresh(true);

    axios
      .post(
        'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/ProviderSearch',
        {
          "Search": search
        }
      )
      .then(response => {
        if (response.data.ResponseObj.ProvidersObj != null) {
        setSearch([response.data.ResponseObj.ProvidersObj])
        }else {
          setSearch([[]])
        }
        // onRefresh(true);
        console.log('ProvidersObj ',response.data.ResponseObj.ProvidersObj)
      });
  };

  const getCategoryList = () => {
    axios
      .post(
        'https://sandbox.enoviq.com/Batelcoapi/api/MobileApp/GetProviderCategory',
        {
          "Mode": "R"
        }
      )
      .then(response => {
        setCate(response.data.ResponseObj.ProviderCategoryObj)
        onRefresh(false);
      });
  };

  return (
    <>
    {refresh ? (<Loader/>):
    (

    <SafeAreaView
      style={{flex: 1, backgroundColor: 'rgb(240,240,245)', height: '100%'}}>
      {console.log('response API', data)}
      <SectionList
        sections={data}
        renderItem={({item}) => (
          <>
            <Cells data={item} isTop={true}
/>
          </>
        )}
        renderSectionHeader={({section}) =>
          section.title == 'A' ? (
            <HederComponent isSearch={true}
              headerText={'A Start To Healthier You!'}
              subHeaderText={
                'Find the best disount at your nearest Healthcare provider'
              }
              data={cate}
            />
            // <></>
          ) : null
        }
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item}
      />
    </SafeAreaView>
    )}
    </>
    );
}

export default Search;
