import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const inputHandler = (text) => {
        setEnteredGoal(text);
      };
    const whenButtonHandles = () => {
      props.buttonHandler(enteredGoal);
      setEnteredGoal('');
    };
    return (
      <Modal visible={props.isVisible} animationType="slide">
        <View style={styles.mainScreen}>
        <TextInput 
        onChangeText={inputHandler} 
        style={styles.goalInput}
        placeholder="Enter Your Goal Here!"
        value={enteredGoal}/>
        <View style={styles.buttons}>
        <Button title="Cancel" color="orange" onPress={props.cancelButton}/>
        <Button style={styles.buttons} title="Add" onPress={whenButtonHandles}/>
        </View>
        </View>
      </Modal>
)};

const styles = StyleSheet.create({
    goalInput: {
        backgroundColor: 'white',
        width: '60%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
      },
      mainScreen: {
        flex:1,
        width: '100%',
        backgroundColor: '#fec3f4',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
        borderBottomWidth: 3
      },
      buttons: {
        backgroundColor: '#fec3f4',
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        margin: 10,
        textAlign: 'center',
      },
})

export default GoalInput