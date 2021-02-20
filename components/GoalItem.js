import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return ( 
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goals}>
          <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
    )}

const styles = StyleSheet.create({
      goals: {
        alignItems: 'center',
        color: '#ed78da',
        marginVertical: 10,
        padding: 5,
        width: '100%',
        backgroundColor: '#fec3f4',
        borderBottomWidth: 2
      }
})

export default GoalItem;