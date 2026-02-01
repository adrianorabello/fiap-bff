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