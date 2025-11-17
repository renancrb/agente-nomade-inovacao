# 📊 Aplicativo de Diagnóstico Empresarial - Agente Nômade de Inovação

## 🎯 Objetivo
Aplicativo web simples para gerar diagnósticos empresariais automatizados baseado nas respostas do formulário de diagnóstico. Reduz em 80% o tempo de criação de diagnósticos personalizados.

## ⚡ Funcionalidades

### ✅ Diagnóstico Automatizado
- **7 perguntas estratégicas** (4 objetivas + 3 dissertativas)
- **Análise inteligente** das respostas
- **Identificação automática** de até 3 problemas principais
- **Classificação por nível**: Estruturação, Otimização ou Crescimento

### 📋 Plano de Ação Personalizado
- **3 ações prioritárias** baseadas nos problemas identificados
- **Metas específicas** com prazos (30-60 dias)
- **Indicadores de sucesso** mensuráveis
- **Lista de tarefas práticas** para cada ação

### 🎨 Interface Profissional
- **Design responsivo** para desktop e mobile
- **Identidade visual** alinhada com a landing page
- **Experiência fluida** do formulário ao resultado
- **Função de impressão** para PDF

## 🏗️ Estrutura do Projeto

```
diagnostico-app/
├── index.html          # Interface principal
├── styles.css          # Estilos visuais (paleta terra)
├── script.js           # Lógica de processamento
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### 1. **Abrir o Aplicativo**
- Abra o arquivo `index.html` em qualquer navegador
- Ou hospede os arquivos em um servidor web

### 2. **Preencher o Diagnóstico**
- Cliente responde as 7 perguntas
- Preenche informações básicas (nome, empresa, contato)
- Clica em "Gerar Meu Diagnóstico"

### 3. **Resultado Instantâneo**
- Diagnóstico completo é gerado automaticamente
- Plano de ação com 3 prioridades
- Opção de imprimir ou fazer novo diagnóstico

## 🧠 Lógica de Processamento

### **Análise das Respostas**
- **Q1 (Financeiro)**: ≤2 = Problema financeiro
- **Q2 (Tecnologia)**: ≤2 = Problema de gestão
- **Q3 (Visibilidade)**: ≤2 = Problema de marketing
- **Q4 (Digital)**: ≤2 = Problema de presença digital
- **Complementar**: Adiciona "Dados" se necessário

### **Classificação por Nível**
- **Média ≤2**: Estruturação (foco em organização básica)
- **Média ≤3**: Otimização (melhoramento de processos)
- **Média >3**: Crescimento (expansão sustentável)

### **Planos de Ação Disponíveis**
1. **Organização Financeira** (30 dias)
2. **Gestão e Tecnologia** (45 dias)  
3. **Marketing Orgânico** (60 dias)
4. **Presença Digital** (45 dias)
5. **Decisões Baseadas em Dados** (30 dias)

## 🎨 Identidade Visual

### **Paleta de Cores**
- **Fundo**: #F2E529 (amarelo claro acolhedor)
- **CTAs**: #97A626 (verde oliva conversão)
- **Textos**: #364011 (verde escuro legível)
- **Destaques**: #59210C (marrom escuro)
- **Cards**: #ffffff (branco limpo)

### **Fontes**
- **Títulos**: Playfair Display (elegante, serif)
- **Textos**: Inter (moderna, legível)

## 📱 Responsividade
- **Desktop**: Layout em 2 colunas
- **Tablet**: Layout adaptativo
- **Mobile**: Layout single-column
- **Print**: Otimizado para impressão

## 🔧 Personalização

### **Adicionar Novos Problemas**
```javascript
// No script.js, seção problemas
novoProblema: {
    titulo: 'Título do Problema',
    descricao: 'Descrição detalhada...'
}
```

### **Adicionar Novas Ações**
```javascript
// No script.js, seção acoes
novaAcao: {
    meta: 'Objetivo principal',
    prazo: 'X dias',
    indicadores: 'Como medir sucesso',
    acoes: ['Ação 1', 'Ação 2', 'Ação 3']
}
```

### **Personalizar Análise**
- Modificar lógica no método `analisarRespostas()`
- Ajustar critérios de classificação
- Alterar número máximo de problemas/ações

## 💡 Próximas Melhorias

### **Fase 2 - Funcionalidades**
- [ ] Salvar diagnósticos em localStorage
- [ ] Exportar PDF com melhor formatação
- [ ] Envio automático por email
- [ ] Histórico de diagnósticos

### **Fase 3 - Integração**
- [ ] Integração com CRM
- [ ] Webhook para notificações
- [ ] Dashboard de métricas
- [ ] Versão mobile app

## 🎯 Benefícios

### **Para o Consultor**
- ⏱️ **80% menos tempo** criando diagnósticos
- 🎯 **Padronização** da qualidade
- 📊 **Dados estruturados** para follow-up
- 💼 **Imagem profissional** elevada

### **Para o Cliente**
- ⚡ **Resultado instantâneo**
- 📋 **Plano prático** e acionável
- 🎨 **Experiência profissional**
- 📱 **Acesso em qualquer device**

---

## 📞 Suporte

Para dúvidas ou melhorias:
- 📧 Email: [seu-email]
- 📱 WhatsApp: [seu-número]

**Desenvolvido para o Programa Agente Nômade de Inovação** 🚀
