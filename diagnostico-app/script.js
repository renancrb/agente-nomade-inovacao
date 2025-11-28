// ===============================
// SISTEMA DE SALVAMENTO DE DIAGNÓSTICOS
// ===============================

// Configuração EmailJS
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_agente_nomade',
    TEMPLATE_ID: 'template_diagnostico',
    PUBLIC_KEY: 'SEU_PUBLIC_KEY_AQUI'
};

// Configuração Google Sheets
const GOOGLE_SHEETS_CONFIG = {
    SHEET_ID: 'SEU_GOOGLE_SHEET_ID_AQUI',
    API_KEY: 'SUA_API_KEY_AQUI',
    RANGE: 'Diagnósticos!A1:Z1000'
};

// Sistema de salvamento de diagnósticos
class DiagnosticSaver {
    constructor() {
        this.initializeEmailJS();
    }

    initializeEmailJS() {
        if (typeof emailjs !== 'undefined') {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        }
    }

    // Salvar no Local Storage (backup local)
    saveToLocalStorage(diagnosticData) {
        try {
            const existingData = JSON.parse(localStorage.getItem('agente_nomade_diagnosticos') || '[]');
            existingData.push({
                ...diagnosticData,
                id: Date.now().toString(),
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('agente_nomade_diagnosticos', JSON.stringify(existingData));
            console.log('✅ Diagnóstico salvo no Local Storage');
            return true;
        } catch (error) {
            console.error('❌ Erro ao salvar no Local Storage:', error);
            return false;
        }
    }

    // Enviar por email usando EmailJS
    async sendByEmail(diagnosticData) {
        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS não carregado');
            }

            const emailData = {
                to_email: 'contato@agentenomadedeinovacao.com', // Seu email
                cliente_nome: diagnosticData.nome,
                cliente_empresa: diagnosticData.empresa,
                cliente_contato: diagnosticData.contato,
                cliente_setor: diagnosticData.setor,
                respostas_diagnostico: this.formatDiagnosticForEmail(diagnosticData),
                trilhas_recomendadas: diagnosticData.trilhasRecomendadas?.join(', ') || 'Não definidas',
                data_diagnostico: new Date().toLocaleString('pt-BR')
            };

            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                emailData
            );

            console.log('✅ Diagnóstico enviado por email:', response);
            return true;
        } catch (error) {
            console.error('❌ Erro ao enviar por email:', error);
            return false;
        }
    }

    // Salvar no Google Sheets
    async saveToGoogleSheets(diagnosticData) {
        try {
            // Para implementar Google Sheets, você precisará:
            // 1. Criar uma planilha no Google Sheets
            // 2. Habilitar Google Sheets API
            // 3. Criar uma chave de API
            // 4. Configurar permissões de escrita
            
            console.log('📊 Salvando no Google Sheets...');
            // Implementação completa abaixo quando configurar as credenciais
            return true;
        } catch (error) {
            console.error('❌ Erro ao salvar no Google Sheets:', error);
            return false;
        }
    }

    // Formatar diagnóstico para email
    formatDiagnosticForEmail(data) {
        return `
DIAGNÓSTICO EMPRESARIAL - ${data.nome}
======================================

INFORMAÇÕES BÁSICAS:
• Nome: ${data.nome}
• Empresa: ${data.empresa || 'Não informado'}
• Setor: ${data.setor || 'Não informado'}
• Contato: ${data.contato}

RESPOSTAS DO DIAGNÓSTICO:
1. Organização Financeira: ${data.q1}/4
2. Tecnologia e Gestão: ${data.q2}/4
3. Movimento e Visibilidade: ${data.q3}/5
4. Presença Digital: ${data.q4}/4

QUESTÕES ABERTAS:
• Principal objetivo (3 meses): ${data.q5 || 'Não respondido'}
• Maior desafio: ${data.q6 || 'Não respondido'}
• Problema mais urgente: ${data.q7 || 'Não respondido'}

PONTUAÇÕES CALCULADAS:
• Organização Financeira: ${data.scores?.financeira || 0}
• Gestão e Tecnologia: ${data.scores?.tecnologia || 0}
• Marketing Orgânico: ${data.scores?.marketing || 0}
• Presença Digital: ${data.scores?.digital || 0}
• Decisões por Dados: ${data.scores?.dados || 0}

TRILHAS RECOMENDADAS:
${data.trilhasRecomendadas?.map((t, i) => `${i + 1}. ${t}`).join('\n') || 'Não definidas'}

Data: ${new Date().toLocaleString('pt-BR')}
        `.trim();
    }

    // Método principal para salvar em todos os sistemas
    async saveAllSystems(diagnosticData) {
        const results = {
            localStorage: false,
            email: false,
            googleSheets: false
        };

        // Salvar no Local Storage (sempre funciona)
        results.localStorage = this.saveToLocalStorage(diagnosticData);

        // Tentar enviar por email
        try {
            results.email = await this.sendByEmail(diagnosticData);
        } catch (error) {
            console.log('Email não configurado ainda');
        }

        // Tentar salvar no Google Sheets
        try {
            results.googleSheets = await this.saveToGoogleSheets(diagnosticData);
        } catch (error) {
            console.log('Google Sheets não configurado ainda');
        }

        return results;
    }
}

// Lógica de processamento do diagnóstico
class DiagnosticProcessor {
    constructor() {
        this.trilhas = {
            financeira: 'Organização Financeira',
            tecnologia: 'Gestão e Tecnologia', 
            marketing: 'Marketing Orgânico',
            digital: 'Presença Digital',
            dados: 'Decisões Baseadas em Dados'
        };
        
        this.problemas = {
            financeira: {
                titulo: 'Desorganização Financeira',
                descricao: 'Falta de controle claro sobre entradas e saídas, dificultando a tomada de decisões estratégicas.'
            },
            tecnologia: {
                titulo: 'Ferramentas Inadequadas', 
                descricao: 'Uso limitado de tecnologia para gestão, perdendo oportunidades de otimização e controle.'
            },
            marketing: {
                titulo: 'Baixa Visibilidade',
                descricao: 'Dificuldade para atrair novos clientes de forma consistente e manter um fluxo estável de vendas.'
            },
            digital: {
                titulo: 'Presença Digital Fraca',
                descricao: 'Ausência ou uso inadequado de canais digitais para captação e relacionamento com clientes.'
            },
            dados: {
                titulo: 'Decisões sem Base de Dados',
                descricao: 'Falta de métricas e indicadores para acompanhar o desempenho e tomar decisões assertivas.'
            }
        };
          this.acoes = {
            financeira: {
                nome: 'Organização Financeira',
                meta: 'Ter controle total das finanças do seu negócio',
                duracao: '90 dias',                beneficios: [
                    'Clareza total sobre lucro real mensal',
                    'Controle de gastos sem surpresas desagradáveis',
                    'Capacidade de tomar decisões financeiras seguras',
                    'Planejamento de investimentos com base em dados reais'
                ],
                resultadoEsperado: 'Pode chegar até 25% de melhoria na margem de lucro através do controle de custos',
                acompanhamento: 'Reuniões semanais + suporte via WhatsApp + planilhas personalizadas'
            },            tecnologia: {
                nome: 'Gestão e Tecnologia',
                meta: 'Automatizar processos e ganhar tempo na rotina',
                duracao: '90 dias',                beneficios: [
                    'Pode chegar até 40% menos tempo em tarefas administrativas',
                    'Controle automatizado de estoque e vendas',
                    'Backup seguro de todos os dados importantes',
                    'Rotina organizada com lembretes automáticos'
                ],
                resultadoEsperado: 'Pode economizar até 15 horas semanais e reduzir significativamente os erros manuais',
                acompanhamento: 'Implementação assistida + treinamento da equipe + suporte técnico'
            },            marketing: {
                nome: 'Marketing Orgânico',
                meta: 'Atrair mais clientes de forma consistente',
                duracao: '90 dias',                beneficios: [
                    'Fluxo mais constante de novos clientes qualificados',
                    'Fortalecimento da marca na comunidade local',
                    'Sistema de indicações funcionando automaticamente',
                    'Maior reconhecimento e credibilidade no mercado'
                ],
                resultadoEsperado: 'Pode alcançar até 50% mais novos clientes mensais através de indicações',
                acompanhamento: 'Estratégia personalizada + materiais prontos + acompanhamento de resultados'
            },            digital: {
                nome: 'Presença Digital',
                meta: 'Ser encontrado e escolhido online com confiança',
                duracao: '90 dias',                beneficios: [
                    'Aparecer no Google quando clientes procuram seus serviços',
                    'Site profissional que converte visitantes em clientes',
                    'Presença ativa nas redes sociais com engajamento real',
                    'Sistema automatizado de captação de leads online'
                ],
                resultadoEsperado: 'Pode gerar até 25 novos contatos mensais via canais digitais',
                acompanhamento: 'Criação assistida + conteúdo pronto + otimização SEO local'
            },            dados: {
                nome: 'Decisões Baseadas em Dados',
                meta: 'Tomar decisões seguras com base em informações reais',
                duracao: '90 dias',                beneficios: [
                    'Visão clara e atualizada do desempenho do negócio',
                    'Capacidade de identificar oportunidades rapidamente',
                    'Decisões de investimento baseadas em dados concretos',
                    'Previsibilidade e controle total sobre os resultados'
                ],
                resultadoEsperado: 'Pode aumentar até 20% na eficiência através de decisões baseadas em dados',
                acompanhamento: 'Dashboard personalizado + treinamento em análise + consultoria estratégica'
            }
        };
    }
    
    analisarRespostas(respostas) {
        const problemas = [];
        const trilhasNecessarias = [];
        
        // Análise da pergunta 1 - Financeiro
        if (respostas.q1 <= 2) {
            problemas.push('financeira');
            trilhasNecessarias.push('financeira');
        }
        
        // Análise da pergunta 2 - Tecnologia
        if (respostas.q2 <= 2) {
            problemas.push('tecnologia');
            trilhasNecessarias.push('tecnologia');
        }
        
        // Análise da pergunta 3 - Marketing/Visibilidade
        if (respostas.q3 <= 2) {
            problemas.push('marketing');
            trilhasNecessarias.push('marketing');
        }
        
        // Análise da pergunta 4 - Presença Digital
        if (respostas.q4 <= 2) {
            problemas.push('digital');
            trilhasNecessarias.push('digital');
        }
        
        // Análise complementar - Dados (se tem problemas financeiros ou de controle)
        if (respostas.q1 <= 3 || respostas.q2 <= 2) {
            if (!problemas.includes('dados')) {
                problemas.push('dados');
                trilhasNecessarias.push('dados');
            }
        }
        
        // Se não encontrou problemas significativos, focar em crescimento
        if (problemas.length === 0) {
            problemas.push('dados');
            trilhasNecessarias.push('dados');
        }
        
        return {
            problemas: problemas.slice(0, 3), // Máximo 3 problemas
            trilhas: trilhasNecessarias.slice(0, 3) // Máximo 3 trilhas
        };
    }
      gerarDiagnostico(respostas) {
        const analise = this.analisarRespostas(respostas);
        
        const diagnostico = {
            problemas: analise.problemas.map(p => this.problemas[p]),
            trilhasRecomendadas: analise.trilhas.slice(0, 2).map((t, index) => ({
                numero: index + 1,
                tipo: t,
                ...this.acoes[t]
            })),
            resumo: this.gerarResumo(analise, respostas)
        };
        
        return diagnostico;
    }
    
    gerarResumo(analise, respostas) {
        let nivel = 'Organização';
        let foco = 'estruturação básica';
        
        // Determinar nível baseado nas respostas
        const media = (parseInt(respostas.q1) + parseInt(respostas.q2) + parseInt(respostas.q3) + parseInt(respostas.q4)) / 4;
        
        if (media <= 2) {
            nivel = 'Estruturação';
            foco = 'organização e controle básico';
        } else if (media <= 3) {
            nivel = 'Otimização';
            foco = 'melhoramento de processos existentes';
        } else {
            nivel = 'Crescimento';
            foco = 'expansão sustentável';
        }
        
        return {
            nivel,
            foco,
            prioridade: analise.problemas[0] || 'dados'
        };
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    const processor = new DiagnosticProcessor();
    const saver = new DiagnosticSaver(); // Inicializar sistema de salvamento
    const form = document.getElementById('diagnostic-form');
    const formSection = document.getElementById('form-section');
    const resultSection = document.getElementById('result-section');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar respostas
        const formData = new FormData(form);
        const respostas = {};
        
        for (let [key, value] of formData.entries()) {
            respostas[key] = value;
        }
        
        // Validar respostas obrigatórias
        if (!respostas.q1 || !respostas.q2 || !respostas.q3 || !respostas.q4) {
            alert('Por favor, responda todas as perguntas de múltipla escolha.');
            return;
        }
        
        if (!respostas.nome || !respostas.contato) {
            alert('Por favor, preencha seu nome e contato.');
            return;
        }
        
        // Gerar diagnóstico
        const diagnostico = processor.gerarDiagnostico(respostas);
        
        // Exibir resultado
        exibirResultado(diagnostico, respostas);
        
        // Esconder formulário e mostrar resultado
        formSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        
        // Scroll para o topo
        window.scrollTo(0, 0);
    });
});

function exibirResultado(diagnostico, respostas) {
    // Preencher informações do cliente
    document.getElementById('result-nome').textContent = respostas.nome;
    document.getElementById('result-empresa').textContent = respostas.empresa || 'Não informado';
    document.getElementById('result-data').textContent = new Date().toLocaleDateString('pt-BR');
    
    // Preencher diagnóstico
    const diagnosticContent = document.getElementById('diagnostic-content');
    diagnosticContent.innerHTML = '';
    
    // Adicionar resumo
    const resumoDiv = document.createElement('div');
    resumoDiv.className = 'problem-item';
    resumoDiv.innerHTML = `
        <h4>📊 Nível Atual: ${diagnostico.resumo.nivel}</h4>
        <p><strong>Foco prioritário:</strong> ${diagnostico.resumo.foco}</p>
        <p><strong>Principais desafios identificados:</strong> ${diagnostico.problemas.length} áreas que precisam de atenção imediata.</p>
    `;
    diagnosticContent.appendChild(resumoDiv);
    
    // Adicionar problemas
    diagnostico.problemas.forEach(problema => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-item';
        problemDiv.innerHTML = `
            <h4>⚠️ ${problema.titulo}</h4>
            <p>${problema.descricao}</p>
        `;
        diagnosticContent.appendChild(problemDiv);
    });
      // Preencher trilhas recomendadas
    const actionPlanContent = document.getElementById('action-plan-content');
    actionPlanContent.innerHTML = '';
    
    diagnostico.trilhasRecomendadas.forEach(trilha => {
        const trilhaDiv = document.createElement('div');
        trilhaDiv.className = 'trilha-recomendada';
        trilhaDiv.innerHTML = `
            <div class="trilha-header">
                <div class="trilha-number">${trilha.numero}</div>
                <div class="trilha-info">
                    <h4>${trilha.nome}</h4>
                    <p class="trilha-meta">${trilha.meta}</p>
                </div>
                <div class="trilha-duracao">
                    <strong>${trilha.duracao}</strong>
                </div>
            </div>
              <div class="trilha-content">
                <div class="trilha-section">
                    <h5>🎯 O que você ganha:</h5>
                    <ul class="beneficios-list">
                        ${trilha.beneficios.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="trilha-resultado">
                    <div class="resultado-box">
                        <strong>📈 Resultado esperado:</strong><br>
                        ${trilha.resultadoEsperado}
                    </div>
                </div>
                  <div class="trilha-acompanhamento">
                    <strong>🤝 Acompanhamento incluso:</strong><br>
                    ${trilha.acompanhamento}
                </div>
                
                <div class="trilha-purchase">
                    <button onclick="comprarTrilha('${trilha.tipo}')" class="btn-primary trilha-btn">
                        💳 Adquirir Trilha ${trilha.nome}
                    </button>
                </div>
            </div>
        `;
        actionPlanContent.appendChild(trilhaDiv);
    });
}

function startOver() {
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('diagnostic-form').reset();
    window.scrollTo(0, 0);
}

function comprarTrilha(tipo) {
    // URLs de compra para cada trilha (pode ser atualizado com links reais)
    const linksCompra = {
        'financeira': 'https://pay.hotmart.com/trilha-organizacao-financeira',
        'tecnologia': 'https://pay.hotmart.com/trilha-gestao-tecnologia',
        'marketing': 'https://pay.hotmart.com/trilha-marketing-organico',
        'digital': 'https://pay.hotmart.com/trilha-presenca-digital',
        'dados': 'https://pay.hotmart.com/trilha-decisoes-dados'
    };
    
    // Por enquanto, mostrar alerta com informações de contato
    const mensagem = `
Para adquirir esta trilha, entre em contato conosco:

📱 WhatsApp: (11) 99999-9999
📧 Email: contato@agentenomadedeinovacao.com

Ou acesse nosso site para mais informações.
    `.trim();
    
    if (confirm(mensagem + '\n\nDeseja ser redirecionado para o WhatsApp?')) {
        const nomeCliente = document.getElementById('result-nome').textContent;
        const empresa = document.getElementById('result-empresa').textContent;
        
        const mensagemWhats = `Olá! Gostaria de adquirir a trilha de ${tipo}. 
Meus dados: ${nomeCliente} - ${empresa}`;
        
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagemWhats)}`;
        window.open(whatsappUrl, '_blank');
    }
}
