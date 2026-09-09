// Árvore de Decisões do Jogo
const gameData = {
  start: {
    title: "Alerta Ambiental!",
    text: "O sistema central detectou anomalias graves no planeta. Para intervir, escolha em qual área a IA deve focar suas operações agora:",
    choices: [
      { text: "🛰️ Rota 1: Monitoramento & Prevenção (Satélites)", target: "rota1" },
      { text: "⚡ Rota 2: Gestão de Recursos (Cidades e Agricultura)", target: "rota2" }
    ]
  },
  
  // ROTA 1
  rota1: {
    title: "🛰️ Rota 1: Varredura de Satélites",
    text: "A IA processou terabytes de imagens orbitais em tempo real. Uma atividade suspeita foi encontrada! O que devemos investigar primeiro?",
    choices: [
      { text: "🪵 Investigar áreas de desmatamento ilegal", target: "desmatamento" },
      { text: "🔥 Investigar possíveis focos de incêndio florestal", target: "incendio" }
    ]
  },
  desmatamento: {
    title: "🚨 Alerta Emitido!",
    text: "A Visão Computacional confirmou maquinário não autorizado. A IA enviou coordenadas exatas para a polícia ambiental e os tratores foram apreendidos!",
    choices: [
      { text: "🌳 Concluir Missão: Bioma Preservado", target: "vitoria" }
    ]
  },
  incendio: {
    title: "👨‍🚒 Resposta Rápida a Incêndios",
    text: "A IA detectou um aumento anormal de temperatura. As brigadas de incêndio foram acionadas automaticamente com a rota mais rápida e contiveram as chamas!",
    choices: [
      { text: "🌳 Concluir Missão: Bioma Preservado", target: "vitoria" }
    ]
  },

  // ROTA 2
  rota2: {
    title: "⚡ Rota 2: Rede IoT Conectada",
    text: "A IA conectou-se a milhares de sensores urbanos e rurais. Onde devemos aplicar otimização urgente de recursos?",
    choices: [
      { text: "🔋 Otimizar a Rede Elétrica da cidade", target: "energia" },
      { text: "🌾 Otimizar a Agricultura de Precisão nos campos", target: "agricultura" }
    ]
  },
  energia: {
    title: "🔋 Eficiência Energética Conquistada!",
    text: "Algoritmos previram os picos de consumo e redirecionaram energia eólica e solar em tempo real, desligando térmicas poluentes!",
    choices: [
      { text: "🌍 Concluir Missão: Emissões Reduzidas", target: "vitoria" }
    ]
  },
  agricultura: {
    title: "🌾 Agricultura de Precisão!",
    text: "Drones e sensores mediram a umidade do solo, economizando 40% de água na irrigação e reduzindo drasticamente o uso de agrotóxicos!",
    choices: [
      { text: "🌍 Concluir Missão: Emissões Reduzidas", target: "vitoria" }
    ]
  },

  // Finais
  vitoria: {
    title: "🎉 Missão Cumprida com Sucesso!",
    text: "Parabéns! Suas escolhas demonstraram como a Inteligência Artificial pode trabalhar junto com a humanidade para proteger a natureza e garantir um futuro sustentável.",
    choices: []
  }
};

function makeChoice(targetStep) {
  const step = gameData[targetStep];
  
  document.getElementById('step-title').innerText = step.title;
  document.getElementById('step-description').innerText = step.text;
  
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  
  if (step.choices.length > 0) {
    step.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'btn-choice';
      btn.innerText = choice.text;
      btn.onclick = () => makeChoice(choice.target);
      choicesDiv.appendChild(btn);
    });
  } else {
    // Fim do Jogo
    document.getElementById('btn-restart').style.display = 'inline-block';
  }
}

function restartGame() {
  document.getElementById('btn-restart').style.display = 'none';
  makeChoice('start');
}
