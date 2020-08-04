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
  LayoutAnimation
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
      outputRange: [18 ,-10],
      extrapolate: 'clamp'
    })


    

    
    return (
      <View style={styles.container}>
        <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, backgroundColor: 'red', height: barHeight, zIndex: headerZindex, justifyContent: 'flex-end', alignItems: 'center'}}>
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
            <Animated.View style={{ height: mengecil, width: mengecil, backgroundColor: 'green', borderRadius: 50, marginRight: 30, marginLeft: 10, zIndex: 100, overflow: 'hidden', marginTop: 190 - (100 /2) }}></Animated.View>
            <View style={{ backgroundColor: 'transparent', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
            </View>
            <View style={{ height: 1000 }}></View>

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
