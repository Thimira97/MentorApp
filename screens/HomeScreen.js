import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';
import {COLORS, SIZES, FONTS, images, dummyData} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontawsomeIcon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [mentors, setMentors] = useState(dummyData.mentorList);
  const [selectCategory, setSelectCategory] = useState(null);

  function onSelectCategory(category) {
    let mentorList = dummyData.mentorList.filter(a =>
      a.category.includes(category.id),
    );

    // console.log(mentorList);
    setSelectCategory(category);
    setMentors(mentorList);
    // console.log(category);
  }
  function renderCategories() {
    return (
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <StatusBar backgroundColor={COLORS.white2} barStyle="dark-content" />
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => onSelectCategory(item)}>
                <View
                  style={{
                    backgroundColor:
                      selectCategory?.id == item.id
                        ? COLORS.blueGray
                        : COLORS.white2,
                    paddingLeft: selectCategory?.id == item.id ? 20 : 8,
                    paddingRight: selectCategory?.id == item.id ? 20 : 8,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    marginLeft: selectCategory?.id == item.id ? 2.5 : 0,
                    marginRight: selectCategory?.id == item.id ? 2.5 : 0,
                  }}>
                  <Text
                    style={{
                      color:
                        selectCategory?.id == item.id
                          ? COLORS.white2
                          : COLORS.blueGray,
                      fontSize: 15,
                      fontFamily: 'AbhayaLibre-Regular',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }

  function renderSearch() {
    return (
      <View style={{paddingTop: 5, paddingBottom: 15}}>
        <View style={styles.searchContainer}>
          <FontawsomeIcon
            style={{paddingLeft: 15, paddingRight: 15}}
            name="search"
            size={20}
            color={COLORS.gray}
          />
          <TextInput
            placeholder='Search mentor "Product Designer" '
            style={{...FONTS.body3}}
            placeholderTextColor={COLORS.gray}
          />
        </View>
        <TouchableOpacity onPress={() => setSelectCategory(0)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: COLORS.blueGray,
                fontFamily: 'PlayfairDisplay-Regular',
                fontSize: 25,
              }}>
              Get World Best Mentor
            </Text>
            <Icon name="menu" size={35} color={COLORS.blueGray} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderMentors() {
    return (
      <View>
        <FlatList
          data={mentors}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  key={item.id}
                  onPress={() => navigation.navigate('Detail', {item})}
                  style={{padding: SIZES.padding / 6}}>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: width * 0.45,
                      borderRadius: SIZES.radius,
                      height: width * 0.45,
                    }}
                  />
                  <View
                    style={{
                      top: 4,
                      left: 4,
                      position: 'absolute',
                      height: width * 0.45,
                      width: width * 0.45,
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      borderRadius: SIZES.radius,
                    }}>
                    <View
                      style={{
                        paddingLeft: 15,
                        paddingTop: 15,
                      }}>
                      <FontawsomeIcon
                        name="heart-o"
                        size={20}
                        color={COLORS.white}
                      />
                    </View>
                    <View
                      style={{
                        top: 55,
                        alignItems: 'flex-start',
                        justifyContent: 'flex-end',
                        paddingLeft: 10,
                        paddingBottom: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontFamily: 'AbhayaLibre-Regular',
                          fontWeight: 'bold',
                          color: COLORS.white,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: 'AbhayaLibre-Bold',
                          color: '#e4383d',
                          fontWeight: '900',
                        }}>
                        {item.company}
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,
                          fontFamily: 'AbhayaLibre-Bold',
                          color: '#e4383d',
                          fontWeight: '900',
                        }}>
                        {item.designation}
                      </Text>
                      <FlatList
                        data={item.areas}
                        keyExtractor={item => `${item.id}`}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        renderItem={({item, index}) => {
                          return (
                            <View>
                              {item.id == '1' ? (
                                <Text
                                  key={item.id}
                                  style={{
                                    fontSize: 12,
                                    fontFamily: 'AbhayaLibre-Regular',
                                    color: COLORS.white,
                                  }}>
                                  {item.name}
                                </Text>
                              ) : null}
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderCategories()}
      {renderSearch()}
      {renderMentors()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white2,
    marginBottom: 150,
  },
  searchContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#dedede',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
