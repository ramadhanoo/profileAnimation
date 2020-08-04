import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim1: new Animated.Value(0),
      anim2: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.anim();
  }

  anim() {
    //alert("jalan")
    this.state.anim1.setValue(0)

    const spinAnimation = Animated.timing(this.state.anim1, {
      toValue: 1,
      duration: 3000,
    });
    const scaleAnimation = Animated.timing(this.state.anim2, {
      toValue: 1,
      duration: 3000,
    });

    Animated.parallel([scaleAnimation, spinAnimation]).start();



    console.log(this.state.anim1)
  }

  render() {
    
    const spin = this.state.anim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const scale = this.state.anim2.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });


    return (
      <View style={styles.container}>
        <Animated.View style={[{ backgroundColor: 'red', height: 400, width: 400, marginBottom: 20 }, { transform: [{ rotate: spin }, { scale: scale }] }]}>

        </Animated.View>
        <TouchableOpacity style={{ height: 40, width: 110, backgroundColor: 'green' }} onPress={() => this.anim()}>
          <Text>Hai</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})