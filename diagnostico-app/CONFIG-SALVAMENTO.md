# 💾 CONFIGURAÇÃO DO SISTEMA DE SALVAMENTO DE DIAGNÓSTICOS

## 🎯 SISTEMAS IMPLEMENTADOS

### ✅ 1. LOCAL STORAGE (Já Funcionando)
- **Status**: ✅ Ativo
- **Localização**: Navegador do cliente
- **Função**: Backup local dos dados
- **Configuração**: Nenhuma necessária

### 📧 2. EMAILJS (Configuração Necessária)
- **Status**: ⚠️ Precisa configurar
- **Função**: Enviar diagnósticos por email
- **Tempo de setup**: 10 minutos

### 📊 3. GOOGLE SHEETS (Opcional)
- **Status**: ⚠️ Precisa configurar  
- **Função**: Planilha online com todos os diagnósticos
- **Tempo de setup**: 15 minutos

---

## 🚀 COMO CONFIGURAR O EMAILJS (RECOMENDADO)

### **Passo 1: Criar Conta EmailJS**
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Confirme seu email

### **Passo 2: Configurar Serviço de Email**
1. No painel, vá em **Email Services**
2. Clique **Add New Service**
3. Escolha **Gmail** ou seu provedor
4. Conecte sua conta de email
5. Anote o **Service ID** (ex: `service_gmail_123`)

### **Passo 3: Criar Template de Email**
1. Vá em **Email Templates**
2. Clique **Create New Template**
3. Use este template:

```
NOVO DIAGNÓSTICO EMPRESARIAL
============================

CLIENTE: {{cliente_nome}}
EMPRESA: {{cliente_empresa}}
CONTATO: {{cliente_contato}}
SETOR: {{cliente_setor}}

DIAGNÓSTICO COMPLETO:
{{respostas_diagnostico}}

TRILHAS RECOMENDADAS:
{{trilhas_recomendadas}}

Data: {{data_diagnostico}}

---
Agente Nômade de Inovação
```

4. Anote o **Template ID** (ex: `template_diagnostico_123`)

### **Passo 4: Obter Public Key**
1. Vá em **Account**
2. Copie o **Public Key**

### **Passo 5: Atualizar Configurações**
Edite o arquivo `diagnostico-app/script.js` e atualize:

```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_gmail_123',        // Seu Service ID
    TEMPLATE_ID: 'template_diagnostico_123', // Seu Template ID
    PUBLIC_KEY: 'user_abc123def456'          // Seu Public Key
};
```

---

## 📊 COMO CONFIGURAR GOOGLE SHEETS (OPCIONAL)

### **Passo 1: Criar Planilha**
1. Acesse: https://sheets.google.com/
2. Crie nova planilha: "Diagnósticos Agente Nômade"
3. Configure cabeçalhos na linha 1:
   ```
   A1: Timestamp
   B1: Nome
   C1: Empresa
   D1: Setor
   E1: Contato
   F1: Q1_Financeiro
   G1: Q2_Tecnologia
   H1: Q3_Marketing
   I1: Q4_Digital
   J1: Q5_Objetivo
   K1: Q6_Desafio
   L1: Q7_Problema
   M1: Trilhas_Recomendadas
   ```

### **Passo 2: Habilitar API**
1. Acesse: https://console.developers.google.com/
2. Crie novo projeto: "Agente Nomade Diagnosticos"
3. Habilite **Google Sheets API**
4. Crie credencial **API Key**
5. Configure restrições da API Key

### **Passo 3: Configurar Permissões**
1. Na planilha, clique **Compartilhar**
2. Adicione permissão para **Qualquer pessoa com o link**
3. Definir como **Editor**
4. Copie o ID da planilha da URL

### **Passo 4: Atualizar Configurações**
```javascript
const GOOGLE_SHEETS_CONFIG = {
    SHEET_ID: '1abc123def456_SUA_SHEET_ID_AQUI',
    API_KEY: 'AIza_SUA_API_KEY_AQUI',
    RANGE: 'Diagnósticos!A1:Z1000'
};
```

---

## 🔧 TESTE DO SISTEMA

### **Verificar Local Storage**
1. Abra DevTools (F12)
2. Vá na aba **Application**
3. Procure por **Local Storage**
4. Verifique se há dados em `agente_nomade_diagnosticos`

### **Verificar Email**
1. Preencha um diagnóstico teste
2. Verifique se chegou email na caixa configurada
3. Confirme formatação e dados

### **Verificar Planilha**
1. Acesse a planilha do Google
2. Verifique se nova linha foi adicionada
3. Confirme se todos os dados estão corretos

---

## 📈 MONITORAMENTO

### **Dashboards Recomendados**
- **EmailJS**: Painel próprio com estatísticas
- **Google Sheets**: Use Google Data Studio para gráficos
- **Local Storage**: Script customizado para exportar dados

### **Backup e Segurança**
- Emails são enviados automaticamente
- Local Storage funciona offline
- Google Sheets cria histórico automático

---

## 🆘 SOLUÇÃO DE PROBLEMAS

### **Email não chega**
- Verifique spam/lixo eletrônico
- Confirme Service ID e Template ID
- Teste com template simples primeiro

### **Google Sheets não salva**
- Verifique permissões da planilha
- Confirme se API Key está ativa
- Teste API Key no navegador

### **Local Storage não funciona**
- Verificar se JavaScript está habilitado
- Confirmar se não está em modo privado
- Checar limite de armazenamento

---

## 💡 PRÓXIMOS PASSOS

1. **Configurar EmailJS** (15 min) ← PRIORIDADE
2. **Testar com diagnóstico real**
3. **Configurar Google Sheets** (opcional)
4. **Monitorar primeiros resultados**
5. **Ajustar templates conforme necessário**

**🎯 Com EmailJS configurado, você receberá TODOS os diagnósticos por email automaticamente!**
