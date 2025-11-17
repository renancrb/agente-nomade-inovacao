# 📧 TEMPLATE EMAILJS PARA DIAGNÓSTICOS

## 📋 TEMPLATE PARA CRIAR NO EMAILJS

### **Nome do Template:** `diagnostico_agente_nomade`

### **Assunto do Email:**
```
🎯 Novo Diagnóstico: {{cliente_nome}} - {{cliente_empresa}}
```

### **Corpo do Email:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Inter, Arial, sans-serif; color: #364011; line-height: 1.6; }
        .header { background: linear-gradient(135deg, #364011, #97A626); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background: #FEFDF8; border: 1px solid #97A626; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #364011; border-bottom: 2px solid #F2E529; padding-bottom: 5px; }
        .highlight { background-color: #F2E529; padding: 2px 6px; border-radius: 4px; }
        .trilha { background: #97A626; color: white; padding: 5px 10px; border-radius: 15px; margin: 2px; display: inline-block; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🎯 Novo Diagnóstico Empresarial</h2>
        <p><strong>Agente Nômade de Inovação</strong></p>
    </div>
    
    <div class="content">
        <div class="section">
            <h3>👤 Informações do Cliente</h3>
            <p><strong>Nome:</strong> <span class="highlight">{{cliente_nome}}</span></p>
            <p><strong>Empresa:</strong> {{cliente_empresa}}</p>
            <p><strong>Setor:</strong> {{cliente_setor}}</p>
            <p><strong>Contato:</strong> <a href="tel:{{cliente_contato}}">{{cliente_contato}}</a></p>
            <p><strong>Data:</strong> {{data_diagnostico}}</p>
        </div>

        <div class="section">
            <h3>📊 Diagnóstico Completo</h3>
            <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-size: 12px;">{{respostas_diagnostico}}</pre>
        </div>

        <div class="section">
            <h3>🎯 Trilhas Recomendadas</h3>
            <p>{{trilhas_recomendadas}}</p>
        </div>

        <div class="section">
            <h3>🚀 Próxima Ação Recomendada</h3>
            <p>1. Entre em contato com o cliente em até 24 horas</p>
            <p>2. Agende uma conversa para apresentar a trilha prioritária</p>
            <p>3. Envie proposta personalizada baseada no diagnóstico</p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding: 15px; background: #364011; color: white; border-radius: 5px;">
            <p><strong>🎯 Lead Qualificado - Ação Imediata Recomendada!</strong></p>
        </div>
    </div>
</body>
</html>
```

---

## 🔗 LINKS DE AÇÃO RÁPIDA

### **Para WhatsApp:** 
```
https://wa.me/{{cliente_contato}}?text=Olá {{cliente_nome}}! Vi que você fez nosso diagnóstico empresarial. Vamos conversar sobre as trilhas recomendadas?
```

### **Para Email de Resposta:**
```
Assunto: Re: Seu Diagnóstico Empresarial - {{cliente_nome}}

Olá {{cliente_nome}},

Obrigado por fazer nosso diagnóstico empresarial!

Baseado nas suas respostas, identifiquei que as trilhas mais indicadas para {{cliente_empresa}} são:
{{trilhas_recomendadas}}

Gostaria de agendar uma conversa rápida (15 min) para explicar como essas trilhas podem transformar seu negócio em 90 dias?

Quando seria o melhor horário para você esta semana?

Abraço,
[SEU NOME]
Agente Nômade de Inovação
```

---

## ⚙️ CONFIGURAÇÃO PASSO A PASSO

### **1. Acessar EmailJS:**
- Site: https://www.emailjs.com/
- Criar conta gratuita

### **2. Configurar Serviço:**
- Add New Service → Gmail
- Conectar sua conta
- Copiar Service ID

### **3. Criar Template:**
- Add New Template
- Colar o código HTML acima
- Configurar variáveis:
  - `{{cliente_nome}}`
  - `{{cliente_empresa}}`
  - `{{cliente_setor}}`
  - `{{cliente_contato}}`
  - `{{respostas_diagnostico}}`
  - `{{trilhas_recomendadas}}`
  - `{{data_diagnostico}}`

### **4. Configurar no Código:**
```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_gmail_abc123',        // Seu Service ID
    TEMPLATE_ID: 'template_diagnostico_def456', // Seu Template ID  
    PUBLIC_KEY: 'user_xyz789abc'                // Seu Public Key
};
```

### **5. Testar:**
- Preencher diagnóstico
- Verificar se email chegou
- Confirmar formatação

---

## 📱 NOTIFICAÇÕES MÓVEIS (OPCIONAL)

### **Para receber no celular também:**
- Configure Gmail para encaminhar para WhatsApp
- Use Zapier ou similar para automações
- Configure notificações push no Gmail app

---

## 📈 MÉTRICAS RECOMENDADAS

### **Acompanhar:**
- Quantos diagnósticos por dia/semana
- Setores mais comuns
- Trilhas mais recomendadas
- Taxa de conversão diagnóstico → cliente

### **Usar para:**
- Ajustar marketing
- Criar conteúdo específico
- Identificar oportunidades
- Melhorar o diagnóstico

---

**🎯 Com este template, cada diagnóstico vira um email profissional e acionável para follow-up imediato!**
