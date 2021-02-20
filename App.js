import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  

  const [allGoals, setNewGoal] = useState([]);
  const buttonHandler = (GoalTitle) => {
    setNewGoal(allGoals => [...allGoals, { id: Math.random().toString() , value: GoalTitle }])
    setIsModal(false);
  };
  const deleteItem = (itemsId) => {
    setNewGoal(
      allGoals => allGoals.filter((goal) => {goal.id !== itemsId})
    )};
  const [isModal, setIsModal] = useState(false);
  const cancelHandler = () => {
    setIsModal(false)
  };

  return ( 
    
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ed78da'}}><Button title="Add Goal!" onPress={() => {setIsModal(true)}}/></View>
        <View style={{flex: 2, width: '60%', backgroundColor: '#ed78da'}}>
          <GoalInput cancelButton = {cancelHandler} isVisible = {isModal} buttonHandler={buttonHandler}/>
          <FlatList 
            keyExtractor = {(item, index) => item.id}
            data={allGoals} 
            renderItem={itemData => 
            (<GoalItem 
            id = {itemData.item.id}
            onDelete={deleteItem} 
            value={itemData.item.value}/>)}/>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ed78da',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fList: {
    flex:1,
    backgroundColor: '#ed78da',
    width: '100%',
    marginBottom: 50,
  },
});
