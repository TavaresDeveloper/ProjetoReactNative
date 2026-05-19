import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../utils/AuthContext';

export default function OrdensDEServico() {
  const [os, setOs] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cliente, setCliente] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [local, setLocal] = useState('');
  const [tecnico, setTecnico] = useState('');
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoggedIn) {
      Alert.alert('Acesso negado', 'Faça login antes de acessar ordens de serviço.');
      router.replace('/');
    }
  }, [auth.isLoggedIn, router]);

  const handleSubmit = () => {
    if (!os || !descricao || !cliente || !dataHora || !local || !tecnico) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    Alert.alert('Sucesso', `Ordem de Serviço ${os} registrada com sucesso!`);
    setOs('');
    setDescricao('');
    setCliente('');
    setDataHora('');
    setLocal('');
    setTecnico('');
  };

  if (!auth.isLoggedIn) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Ordem de Serviço</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>OS:</Text>
          <TextInput
            style={styles.input}
            value={os}
            onChangeText={setOs}
            placeholder="Número da OS"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descrição do Problema:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Descreva o problema"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cliente:</Text>
          <TextInput
            style={styles.input}
            value={cliente}
            onChangeText={setCliente}
            placeholder="Nome do cliente"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data e Hora:</Text>
          <TextInput
            style={styles.input}
            value={dataHora}
            onChangeText={setDataHora}
            placeholder="DD/MM/YYYY HH:MM"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Local:</Text>
          <TextInput
            style={styles.input}
            value={local}
            onChangeText={setLocal}
            placeholder="Local do atendimento"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Técnico:</Text>
          <TextInput
            style={styles.input}
            value={tecnico}
            onChangeText={setTecnico}
            placeholder="Nome do técnico"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Registrar OS"
            onPress={handleSubmit}
            color="#4CAF50"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  textArea: {
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});
