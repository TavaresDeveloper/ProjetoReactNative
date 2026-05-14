# Estrutura de Rotas - Expo Router

## 📍 Visão Geral
O projeto utiliza **Expo Router** para gerenciar as rotas da aplicação com navegação em stack. A estrutura é baseada em sistema de arquivos, similar ao Next.js.

## 🗂️ Estrutura de Rotas

```
app/
├── _layout.tsx              # Layout principal com Stack Navigator
├── index.tsx               # Rota principal (/) - Menu de Login
├── ordens-de-servico.tsx   # Rota para Ordens de Serviço (/ordens-de-servico)
└── cadastro-tecnicos.tsx   # Rota para Cadastro de Técnicos (/cadastro-tecnicos)
```

## 🔀 Rotas Disponíveis

### 1. **Rota Principal - Login** (`app/index.tsx`)
- **Caminho:** `/`
- **Título:** Login Técnico
- **Funcionalidade:** 
  - Tela de login com campos de usuário e senha
  - Menu com botões de acesso rápido para outras rotas
  - Navegação para Ordens de Serviço e Cadastro de Técnicos

### 2. **Ordens de Serviço** (`app/ordens-de-servico.tsx`)
- **Caminho:** `/ordens-de-servico`
- **Título:** Ordens de Serviço
- **Funcionalidade:**
  - Formulário para registrar ordens de serviço
  - Campos: Número OS, Descrição, Cliente, Data/Hora, Local, Técnico

### 3. **Cadastro de Técnicos** (`app/cadastro-tecnicos.tsx`)
- **Caminho:** `/cadastro-tecnicos`
- **Título:** Cadastro de Técnicos
- **Funcionalidade:**
  - Formulário para cadastrar novos técnicos
  - Campos: Nome Completo, Email, Cargo, Telefone, Especialidade

## 🔗 Navegação Entre Rotas

### Exemplos de Uso:

```typescript
import { useRouter } from 'expo-router';

const router = useRouter();

// Navegar para Ordens de Serviço
router.push('/ordens-de-servico');

// Navegar para Cadastro de Técnicos
router.push('/cadastro-tecnicos');

// Voltar para a tela anterior
router.back();
```

## 🎨 Configuração Visual

### Cores Utilizadas:
- **Header:** Azul (`#1e90ff`)
- **Botão Login:** Azul
- **Botão OS:** Verde (`#4CAF50`)
- **Botão Cadastro:** Laranja (`#FF9800`)

### Header Automático:
Cada rota possui um header customizado com:
- Título da página
- Botão de voltar automático
- Estilo consistente em toda a aplicação

## 📱 Como Testar

1. Inicie a aplicação:
   ```bash
   npm start
   ```

2. Na tela principal (login), você pode:
   - Fazer login (teste com qualquer usuário/senha)
   - Clicar nos botões do menu para acessar as outras rotas
   - Usar o botão de voltar para retornar à tela anterior

## 🔄 Fluxo de Navegação

```
┌─────────────┐
│   Login     │ (rota principal)
│   (/)       │
└──────┬──────┘
       │
       ├──► ┌──────────────────┐
       │    │ Ordens de Serviço│
       │    │ (/ordens-os)     │
       │    └──────────────────┘
       │
       └──► ┌──────────────────┐
            │ Cadastro Técnicos│
            │ (/cadastro-...)  │
            └──────────────────┘
```

## 📝 Próximos Passos (Sugestões)

1. **Autenticação Real:** Implementar autenticação com backend
2. **Estado Global:** Usar Context API ou Redux para gerenciar estado de login
3. **Persistência:** Guardar credenciais com AsyncStorage (se apropriado)
4. **Validação:** Adicionar validação mais robusta de formulários
5. **API Integration:** Conectar aos endpoints do backend para salvar dados

## 🛠️ Dependências Utilizadas

- `expo-router` - Sistema de rotas baseado em arquivos
- `@react-navigation/native` - Navegação React Native
- `react-native` - Framework React Native

---

**Criado em:** 14 de maio de 2026
**Versão:** 1.0.0
