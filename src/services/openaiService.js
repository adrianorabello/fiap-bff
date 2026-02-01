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
      Authorization: `Bearer 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`
    }
  });

  const message = response.data.choices[0].message.content.trim();

  return {
    answer: message,
    timestamp: new Date().toISOString()
  };
}

module.exports = { askOpenAI };