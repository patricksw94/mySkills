import React, {useState, useEffect} from 'react';

import { Container, TitleText, Greetings, Input, TitleSkills, UserInfo, Photo } from './styles';

import {
  FlatList, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';


interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
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
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <Container>
      <UserInfo>
      <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/61481164?v=4' }}
            />
      <TitleText>Welcome, Patrick</TitleText>
      </UserInfo>

      <Greetings>
        { gretting }
      </Greetings>

      <Input
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

    <Button 
      title="Add"
      onPress={handleAddNewSkill}
     />

      <TitleSkills>
      My Skills
      </TitleSkills>

    <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <SkillCard
             skill={item.name}
             onPress={() => handleRemoveSkill(item.id)}
              />
        )}
    />

    </Container>
    </TouchableWithoutFeedback>
  );
}

