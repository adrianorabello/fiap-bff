const axios = require('axios');

async function askOpenAI() {
  const prompt = `Elabore 5 palavras distintas e seus respectivos significados e um exemplo de uso. Retorne um JSON no formato [{word, description, useCase}]. Não adicione quebras de linhas.`;

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Responda somente questões relacionadas ao ensino de inglês.' },
      { role: 'user', content: prompt }
    ]
  }, {
    headers: {
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json'
    }
  });

  const message = response.data.choices[0].message.content.trim();

  return {
    answer: message,
    timestamp: new Date().toISOString()
  };
}

module.exports = { askOpenAI };