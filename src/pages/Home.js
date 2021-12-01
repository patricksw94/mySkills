import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Welcome, Patrick</Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity 
      style={styles.button}
      activeOpacity={.7}
      >
          <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={styles.titleSkills}>
          My Skills
      </Text>

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
    titleText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleSkills: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50
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
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
})