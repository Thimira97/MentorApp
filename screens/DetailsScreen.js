import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import {COLORS, SIZES, icons} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
const DetailsScreen = ({navigation, route}) => {
  const [mentorDetails, setMentorDetails] = useState(null);

  useEffect(() => {
    let item = route.params;
    setMentorDetails(item);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blueGray} barStyle="light-content" />
      <View
        style={{
          flex: 1.85,
          backgroundColor: COLORS.blueGray,
          borderBottomRightRadius: SIZES.radius * 2,
          borderBottomLeftRadius: SIZES.radius * 2,
        }}>
        <View style={styles.topHeader}>
          <View>
            <Text
              style={{
                color: COLORS.white2,
                fontSize: 30,
                fontFamily: 'PlayfairDisplay-Regular',
              }}>
              Hi, I'm
            </Text>
            <Text
              style={{
                color: COLORS.white2,
                fontSize: 30,
                fontFamily: 'PlayfairDisplay-Regular',
              }}>
              {mentorDetails?.item.name}
            </Text>
          </View>
          <Image
            source={mentorDetails?.item.flag}
            resizeMode="contain"
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={styles.designation}>
          <Text
            style={{
              color: COLORS.white2,
              fontSize: 22,
              fontFamily: 'PlayfairDisplay-Regular',
            }}>
            {mentorDetails?.item.designation} at
          </Text>
          <Text
            style={{
              color: COLORS.white2,
              fontSize: 30,
              fontFamily: 'PlayfairDisplay-Regular',
            }}>
            {mentorDetails?.item.company}
          </Text>
        </View>
        <View style={{padding: 25}}>
          <Text style={[styles.description, {paddingBottom: 15}]}>
            About me
          </Text>
          <Text style={styles.description}>
            {mentorDetails?.item.description}
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={{alignItems: 'center'}}>
          <View style={{width: 350}}>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: 'AbhayaLibre-Regular',
                fontSize: 15,
              }}>
              I'm interested on
            </Text>
            <View style={{flexDirection: 'row'}}>
              <FlatList
                data={mentorDetails?.item.areas}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({item, index}) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        backgroundColor: COLORS.blueGray,
                        paddingLeft: 20,
                        paddingRight: 20,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                        marginLeft: 2.5,
                        marginRight: 2.5,
                        marginTop: 15
                      }}>
                      <Text
                        style={{
                          color: COLORS.white2,
                          fontSize: 15,
                          fontFamily: 'AbhayaLibre-Regular',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: 'AbhayaLibre-Regular',
                fontSize: 15,
              }}>
              Ask me about Product Design
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}
            colors={['#fb5a8d', '#fb5a8d']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 23,
                  fontFamily: 'PlayfairDisplay-Bold',
                  color: COLORS.white2,
                }}>
                Book a Session
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeader: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  designation: {
    padding: 20,
    justifyContent: 'flex-start',
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  description: {
    color: '#dedede',
    lineHeight: 22,
    fontFamily: 'AbhayaLibre-Regular',
  },
  button: {
    marginTop: 10,
    width: '95%',
    height: 55,
    paddingLeft: 20,
  },
});

export default DetailsScreen;
