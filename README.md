# Escape Room - Código Final

Este é um jogo de **Escape Room** interativo, onde o jogador deve resolver um enigma em um tempo limitado para escapar da sala. O código secreto é fornecido através de pistas espalhadas pelo ambiente do jogo, e o jogador possui apenas duas tentativas para descobrir a resposta correta.

## Funcionalidades:

- **Desafio de Código Secreto**: O jogador precisa inserir um código correto para "escapar".
- **Contador de Tempo**: Um timer conta regressivamente de 10 minutos. O tempo se esgota enquanto o jogador tenta encontrar o código correto.
- **Tentativas Limitadas**: O jogador tem **apenas 2 tentativas** para inserir o código correto. O jogo avisa após a primeira tentativa incorreta e desabilita o envio após a segunda tentativa.
  
### Feedback Sonoro e Visual:
- Sons de sucesso e erro são reproduzidos para indicar se o jogador inseriu o código corretamente ou não.
- Sons de relógio e alerta para o tempo esgotado.
  
- **Respostas Rápidas**: O tempo de resposta do jogador é contabilizado e o áudio de som do relógio começa a tocar após um atraso de 3 segundos após o início do jogo.

## Tecnologias Utilizadas:
- **HTML** para estruturação da página.
- **CSS** para o estilo e layout responsivo.
- **JavaScript** para lógica de controle de tempo, verificação de código, sons e interatividade.
- **Sons** para enriquecer a experiência do jogador, tocando em momentos chave (tentativas, sucesso e fim de tempo).

## Como Jogar:
1. O jogador tem **10 minutos** para encontrar o código secreto.
2. Insira o código no campo de texto.
3. Após uma tentativa incorreta, você terá **apenas mais uma chance** para acertar.
4. Se o código estiver correto, você ganhará e o timer será pausado.
5. Se o tempo se esgotar ou o jogador errar 2 vezes, o jogo será encerrado.

## Instruções para o Desenvolvedor:
1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador para jogar o jogo.
3. As interações com o código são feitas através do arquivo `script.js`, e o estilo é controlado pelo arquivo `style.css`.

## Como Contribuir:
1. **Fork** este repositório.
2. Faça as alterações que desejar.
3. Envie um **pull request** explicando as modificações que você realizou.

## Licença:
Este projeto é licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes. 

## Responsáveis: 
Fabio Alves de Oliveira, João Pedro Almeida Moraes, Pablo Weder Caminhas da Silva, Pedro Henrique Gonçalves de Melo.
