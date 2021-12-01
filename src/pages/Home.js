import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export function Home(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Patrick</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    }
})