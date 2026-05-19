import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useAuth } from '../utils/AuthContext';

export default function CadastroTecnicos() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const auth = useAuth();

  const handleCadastro = () => {
    if (!nomeCompleto || !email || !cargo) {
      Alert.alert('Erro', 'Por favor, preencha os campos obrigatórios');
      return;
    }

    try {
      auth.registerTechnician(email);
      Alert.alert('Sucesso', `Técnico ${nomeCompleto} cadastrado com sucesso!`);
      setNomeCompleto('');
      setEmail('');
      setCargo('');
      setTelefone('');
      setEspecialidade('');
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Erro ao tentar cadastrar o técnico.';
      Alert.alert('Erro', message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro de Técnicos</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome Completo: <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome completo"
            placeholderTextColor="#999"
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email: <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cargo: <Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o cargo"
            placeholderTextColor="#999"
            value={cargo}
            onChangeText={setCargo}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="(XX) XXXXX-XXXX"
            placeholderTextColor="#999"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Especialidade:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Ex: Redes, Hardware, Software, etc."
            placeholderTextColor="#999"
            value={especialidade}
            onChangeText={setEspecialidade}
            multiline
            numberOfLines={3}
          />
        </View>

        <Text style={styles.note}>* Campos obrigatórios</Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Cadastrar Técnico"
            onPress={handleCadastro}
            color="#FF9800"
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
  required: {
    color: '#FF0000',
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
  note: {
    fontSize: 12,
    color: '#999',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});
