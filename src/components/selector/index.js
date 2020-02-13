import React, { Component } from 'react'
import { View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import AppText from '../text'

import { Colors } from '../../themes'
import styles from './style'

class Selector extends Component {
  onSelect = (item) => {
    this.props.onSelect(item)
  }

  render() {
    return (
      <View style={styles.optionList}>
        {this.props.list.map((item) => {
          return (
            <TouchableRipple
              key={item}
              style={styles.option}
              onPress={() => this.onSelect(item)}
            >
              <View style={styles.optionView}>
                {(item === this.props.selected) && (
                  <Icon
                    style={styles.icon}
                    name="check"
                    size={24}
                    color={Colors.green}
                  />
                )}
                <AppText style={styles.label}>
                  {item}
                </AppText>
              </View>
            </TouchableRipple>
          )
        })}
      </View>
    )
  }
}

export default Selector
