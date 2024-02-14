import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, Animated, Easing} from 'react-native';
import {Block} from 'galio-framework';

const SplashScreen = () => {
  const orbitRadius = 100; // Adjust the radius of the orbit
  const orbitSpeed = 2000; // Adjust the speed of the orbit

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const orbitAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: orbitSpeed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    orbitAnimation.start();

    return () => {
      orbitAnimation.stop();
    };
  }, [rotation]);

  const getOrbitStyle = index => {
    const angle = index * ((2 * Math.PI) / numberOfImages);
    const translateX = orbitRadius * Math.cos(angle);
    const translateY = orbitRadius * Math.sin(angle);

    const rotate = rotation.interpolate({
      inputRange: [0, 1],
      outputRange: [`${0}deg`, `${360}deg`],
    });

    return {
      transform: [{translateX}, {translateY}, {rotate}],
    };
  };

  const numberOfImages = 5; // Adjust the number of images
  const images = [
    require('../assets/doc1.jpg'),
    require('../assets/doc2.jpg'),
    require('../assets/doc3.jpg'),
    require('../assets/nurse1.jpg'),
    require('../assets/nurse2.jpg'),
  ]; // Add your image paths

  return (
    <Block style={styles.container}>
      {images.map((image, index) => (
        <Animated.Image
          key={index}
          source={image}
          style={[styles.logo, getOrbitStyle(index)]}
        />
      ))}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50, // Adjust the width of the images
    height: 50, // Adjust the height of the images
    position: 'absolute',
    borderRadius: 30,
  },
});

export default SplashScreen;
