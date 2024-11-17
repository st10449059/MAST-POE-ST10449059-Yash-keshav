import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './App';
import Starters from './Screen2';
import Mains from './Screen3';
import Desert from './Screen4';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
  <NavigationContainer>
    <Stack.navigator>
      <Stack.Screen name="Home" component={MainScreen}/>
      <Stack.Screen name="Starters" component={Starters}/>
      <Stack.Screen name="Mains" component={Mains}/>
      <Stack.Screen name="Desert" component={Desert}/>
    </Stack.navigator>
  </NavigationContainer>
  );
 };



 

  const handleLogin = () => {
    // Here you would typically validate the credentials
    // For this example, we'll just navigate to the AddDishScreen
    navigation.navigate('AddDish');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );


const AddDishScreen = () => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  // Add new state arrays for each category
  const [starters, setStarters] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const navigation = useNavigation();

  const handleAddDish = (category) => {
    const newDish = {
      name: dishName,
      description: dishDescription,
      price: dishPrice,
      id: Date.now() // Simple way to generate unique IDs
    };

    // Update the appropriate category array
    switch (category) {
      case 'starters':
        setStarters([...starters, newDish]);
        break;
      case 'mainDishes':
        setMainDishes([...mainDishes, newDish]);
        break;
      case 'desserts':
        setDesserts([...desserts, newDish]);
        break;
    }

    // Reset the form
    setDishName('');
    setDishDescription('');
    setDishPrice('');
  };

  const handleRemoveDish = (category) => {
    // Remove the last dish from the selected category
    switch (category) {
      case 'starters':
        setStarters(starters.slice(0, -1));
        break;
      case 'mainDishes':
        setMainDishes(mainDishes.slice(0, -1));
        break;
      case 'desserts':
        setDesserts(desserts.slice(0, -1));
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Price"
        value={dishPrice}
        onChangeText={setDishPrice}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Starters" onPress={() => handleAddDish('starters')} />
        <Button title="Add to Main Dishes" onPress={() => handleAddDish('mainDishes')} />
        <Button title="Add to Desserts" onPress={() => handleAddDish('desserts')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remove Starter" onPress={() => handleRemoveDish('starters')} />
        <Button title="Remove Main Dish" onPress={() => handleRemoveDish('mainDishes')} />
        <Button title="Remove Dessert" onPress={() => handleRemoveDish('desserts')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Starters" onPress={() => navigation.navigate('Starters')} />
        <Button title="Main" onPress={() => navigation.navigate('Main')} />
        <Button title="Deserts" onPress={() => navigation.navigate('Desert')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});


