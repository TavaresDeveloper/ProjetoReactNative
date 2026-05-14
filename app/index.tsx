import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const MenuLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha usuário e senha');
      return;
    }
    // Simular autenticação bem-sucedida
    Alert.alert('Sucesso', `Bem-vindo, ${username}!`);
    setUsername('');
    setPassword('');
    // Aqui você pode navegar para a próxima tela ou criar um estado de autenticação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Técnico</Text>
      <Text style={styles.subtitle}>Acesse o sistema</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.menuTitle}>Menu Principal</Text>

      <TouchableOpacity 
        style={[styles.menuButton, styles.menuButtonOS]} 
        onPress={() => router.push('/ordens-de-servico')}
      >
        <Text style={styles.menuButtonText}>📋 Ordens de Serviço</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.menuButton, styles.menuButtonCadastro]} 
        onPress={() => router.push('/cadastro-tecnicos')}
      >
        <Text style={styles.menuButtonText}>👥 Cadastro de Técnicos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1e90ff',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    height: 50,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  menuButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuButtonOS: {
    backgroundColor: '#4CAF50',
  },
  menuButtonCadastro: {
    backgroundColor: '#FF9800',
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MenuLogin;
