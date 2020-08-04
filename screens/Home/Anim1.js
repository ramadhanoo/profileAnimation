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

  spin() {
    LayoutAnimation.spring();
    this.setState({ hilang: this.state.hilang + 10 })

  }

  render() {

    const barHeight = this.state.scrollY.interpolate({
      inputRange: [0, STATUS_BAR],
      outputRange: [STATUS_BAR, 100],
      extrapolate: 'clamp'
    })

    const lebar = this.state.scrollY.interpolate({
      inputRange: [0, 70],
      outputRange: [70, 70 - 40],
      extrapolate: 'clamp'
    })

    const tengah = this.state.scrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [10, 70],
      extrapolate: 'clamp'
    })

    

  

    return (
      <View style={styles.container}>
        <Animated.View style={{ width: width, height: barHeight, backgroundColor: 'red', opacity: 1, borderRadius: this.state.hilang, justifyContent: 'flex-end' }}>
          <Animated.View style={{ height: lebar, width: lebar, backgroundColor: 'green', marginLeft: tengah, marginBottom: 30, borderRadius: 35 }}></Animated.View>
        </Animated.View>
        <TouchableOpacity style={{ height: 70, width: 160, backgroundColor: 'black' }} onPress={() => this.spin()}>

        </TouchableOpacity>
        <View style={{ width: width, backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            <View style={{ backgroundColor: 'green', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
            </View>
            <View style={{ backgroundColor: 'green', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
            </View>
            <View style={{ backgroundColor: 'green', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
            </View>
            <View style={{ backgroundColor: 'green', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
            </View>
            <View style={{ backgroundColor: 'green', width: width, height: 190, marginTop: 10 }}>
              <Text>Haloo</Text>
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
    alignItems: 'center'
  }
})
