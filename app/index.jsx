import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App () {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack'>Aora!</Text>
      <Link href="/home" style={{color: 'blue'}}>Go to home</Link>
    </View> 
  )
} 

