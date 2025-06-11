const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const app = express();
const porta = 3000;

// Chave da API
const API_KEY = 'e484f2d1d7cb3da684f147abccfaf752';

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota para converter moedas
app.get('/converter', async (req, res) => {
    try {
        const { valor, de, para } = req.query;

        if (!valor || !de || !para) {
            return res.status(400).json({ erro: 'Parâmetros inválidos' });
        }

        console.log(`Fazendo requisição para API: ${de} -> ${para}, valor: ${valor}`);

        // Fazer requisição para a API de câmbio
        const url = `http://api.exchangerate.host/convert?access_key=${API_KEY}&from=${de}&to=${para}&amount=${valor}`;
        console.log('URL da API:', url);

        const resposta = await fetch(url);
        const dados = await resposta.json();

        console.log('Resposta da API:', dados);

        if (!dados.success) {
            throw new Error(`Erro na API de câmbio: ${dados.error?.info || 'Erro desconhecido'}`);
        }

        res.json({
            valorConvertido: dados.result
        });
    } catch (erro) {
        console.error('Erro detalhado:', erro);
        res.status(500).json({ 
            erro: 'Erro ao converter moeda',
            detalhes: erro.message
        });
    }
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
}); 