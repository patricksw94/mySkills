import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if(currentHour > 12){
      setGretting('Good morning');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good afternoon')
    }else{
      setGretting('Good night');
    }
    
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Welcome, Patrick</Text>

      <Text style={styles.greetings}>
        { gretting }
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

    <Button onPress={handleAddNewSkill} />

      <Text style={styles.titleSkills}>
      My Skills
      </Text>

    <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <SkillCard skill={item} />
        )}
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleSkills: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 40
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
