import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles'
const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.carImage}
        />
        <View style={styles.titles}>
          <Text style={styles.title}> Model S</Text>
          <Text style={styles.subTitle}>Starting at 1542013</Text>
        </View>
      </View>
    )
}
export default CarItem