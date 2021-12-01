import React from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Patrick</Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
      />

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF'
    }
})