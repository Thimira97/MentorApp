import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {images, COLORS, SIZES, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.white2} barStyle="dark-content" />
      <ImageBackground
        source={images.BG}
        style={{flex: 1, height: height * 0.4, width: width}}
      />
      <View style={{flex: 1.5}}>
        <View style={styles.chevron1}>
          <View style={styles.chevronMain1} />
          <View style={styles.chevronTriangle1} />
        </View>
        <View style={styles.chevron2}>
          <View style={styles.chevronMain2} />
          <View style={styles.chevronTriangle2} />
        </View>
        <View style={styles.chevron}>
          <View style={styles.chevronMain}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 25,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 40,
                  fontFamily: 'PlayfairDisplay-Bold',
                }}>
                Are you worried about your career?
              </Text>
              <Text
                style={{...FONTS.body2, paddingTop: 20, color: COLORS.gray}}>
                Find 1000+ mentors in word-class companies
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={[styles.shadow, styles.button]}>
                <LinearGradient
                  style={{
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}
                  colors={['#ededed', '#f0f0f0']}
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
                        color: COLORS.blueGray,
                      }}>
                      Get Mentor Now
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.chevronTriangle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white2,
  },
  chevron1: {
    width: width,
    left: 70,
  },
  chevronMain1: {
    width: width,
    height: height / 20,
    backgroundColor: 'rgba(252,217,231,0.8)',
    borderTopLeftRadius: SIZES.radius * 3,
  },
  chevronTriangle1: {
    backgroundColor: 'transparent',
    borderTopWidth: 70,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: width * 0.93,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'rgba(252,217,231,0.8)',
    position: 'absolute',
    top: -70,
    right: 0,
    transform: [{scaleX: -1}],
    borderTopStartRadius: SIZES.radius * 3,
  },
  chevron2: {
    width: width,
    left: 30,
  },
  chevronMain2: {
    width: width,
    height: height / 20,
    backgroundColor: 'rgba(245,140,181,0.4)',
    borderTopLeftRadius: SIZES.radius * 3,
  },
  chevronTriangle2: {
    backgroundColor: 'transparent',
    borderTopWidth: 70,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: width * 0.93,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'rgba(245,140,181,0.4)',
    position: 'absolute',
    top: -70,
    right: 0,
    transform: [{scaleX: -1}],
    borderTopStartRadius: SIZES.radius * 3,
  },
  chevron: {
    width: width,
  },
  chevronMain: {
    width: width,
    height: height / 2,
    backgroundColor: COLORS.blueGray,
    borderTopLeftRadius: SIZES.radius * 3,
  },
  chevronTriangle: {
    backgroundColor: 'transparent',
    borderTopWidth: 70,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: width * 0.93,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: COLORS.blueGray,
    position: 'absolute',
    top: -70,
    right: 0,
    transform: [{scaleX: -1}],
    borderTopStartRadius: SIZES.radius * 3.5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginTop: SIZES.padding,
    width: '90%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
