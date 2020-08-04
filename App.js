import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Animated,
  Easing,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';

const { width, height } = Dimensions.get("window");

const IS_IPHONE_X = height === 812 || height === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 170 : 130) : 130;
const STATUS_BAR = Platform.OS === 'ios' ? (IS_IPHONE_X ? 190 : 80) : 80;
const MARGIN = Platform.OS === 'ios' ? (IS_IPHONE_X ? 55 : 25) : 25;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 530 : 450) : 450;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
      hilang: 0,
      test: new Animated.Value(0)
    };
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount() {

  }

  render() {

    const barHeight = this.state.scrollY.interpolate({
      inputRange: [0, 30],
      outputRange: [STATUS_BAR, 100],
      extrapolate: 'clamp'
    })

    const mengecil = this.state.scrollY.interpolate({
      inputRange: [0, 70],
      outputRange: [100, 30],
      extrapolate: 'clamp'
    })


    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, 40, 100],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp'
    });

    const naik = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [18, -15],
      extrapolate: 'clamp'
    })

    const hilang = this.state.scrollY.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })



    return (
      <View style={styles.container}>
        <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: '#006a71', height: barHeight, zIndex: headerZindex, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Animated.View style={{ width: width, height: 50, backgroundColor: 'transparent', marginBottom: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', opacity: hilang }}>
            <View style={{ width: '20%', height: '90%', backgroundColor: 'transparent', marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>6</Text>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Posts</Text>
            </View>
            <View style={{ width: '20%', height: '90%', backgroundColor: 'transparent', marginRight: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>171</Text>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Followers</Text>
            </View>
            <View style={{ width: '20%', height: '90%', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>23</Text>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>Folowing</Text>
            </View>
          </Animated.View>
          <Animated.View style={{ width: width, height: 40, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', opacity: hilang }}>
            <TouchableOpacity style={{ height: '80%', width: 100, backgroundColor: '#fff', marginLeft: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => alert("sucees")}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#222831' }}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: '80%', width: 100, backgroundColor: '#fff', marginLeft: 20, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#222831' }}>Friends</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold', top: naik }}>Dio Dava Ramadha</Animated.Text>
        </Animated.View>


        <View style={{ width: width, backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center', }}>


          <Animated.ScrollView scrollEventThrottle={16} onScroll={
            Animated.event(
              [{
                nativeEvent: {
                  contentOffset: {
                    y: this.state.scrollY
                  }
                }
              }]
            )
          }>
            <Animated.View style={{ height: mengecil, width: mengecil, backgroundColor: '#fff', borderRadius: 50, marginRight: 30, marginLeft: 10, zIndex: 100, overflow: 'hidden', marginTop: 190 - (100 / 2), justifyContent: 'center', alignItems: 'center' }}>
              <Animated.Image source={require('./images/ada.jpg')} style={{ width: '95%', height: '95%', borderRadius: 50 }} />
            </Animated.View>
            <View style={{ backgroundColor: 'transparent', width: width, height: 90, marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Dio Dava Ramadha</Text>
              <Text style={{ fontSize: 15, marginLeft: 10, color: '#808080', marginTop: 5 }}>Dioramadhan74@gmail.com</Text>
              <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 5 }}>Coding Everyday !</Text>
            </View>
            <View style={{ height: 1000 }}>

              <View style={{ width: width, height: 80, backgroundColor: 'transparent' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={{ height: 90, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/plus.png')} style={{ height: '100%', width: '100%' }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/1.jpg')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/2.png')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/3.png')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/4.jpg')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/5.jpg')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#fff', width: 75, height: 75, borderRadius: 40, marginRight: 5, marginLeft: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#dcdcdc' }}>
                      <View style={{ height: '95%', width: '95%', backgroundColor: '#fff', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./images/6.jpg')} style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                      </View>
                    </TouchableOpacity>

                  </View>
                </ScrollView>


              </View>

              <View style={{ height: 1, width: width, backgroundColor: '#dcdcdc', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>



              </View>

              <View style={{ width: width, backgroundColor: '#fff', flexDirection: 'row', marginTop: 5, flexWrap: 'wrap', justifyContent: 'space-between' }}>

                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/1.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/2.png')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/3.png')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/4.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/5.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/6.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/2.png')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/1.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/3.png')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/5.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/4.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', height: 130, width: '33%', marginTop: 2 }}>
                  <Image source={require('./images/6.jpg')} style={{ height: '100%', width: '100%' }} />
                </TouchableOpacity>


              </View>





            </View>



          </Animated.ScrollView>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
