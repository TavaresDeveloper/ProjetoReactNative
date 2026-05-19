import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../utils/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e90ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Login Técnico',
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="ordens-de-servico" 
          options={{
            title: 'Ordens de Serviço',
          }} 
        />
        <Stack.Screen 
          name="cadastro-tecnicos" 
          options={{
            title: 'Cadastro de Técnicos',
          }} 
        />
      </Stack>
    </AuthProvider>
  );
}
