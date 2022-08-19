# Projeto-HandsOn2


Olá!

Uma casa de show chamada Sound Garden será
inaugurada e precisa de um site que exiba os eventos e
permita que os clientes reservem ingressos através da
Landing Page.

O site está separado em duas partes:
*Landing Page;
*Painel Administrativo;

Instruções gerais:

*Painel de Controle*
1. Criar Evento: receba os dados que o usuário inserir
através do formulário da página criar-evento.html e
envie essa informação para a API utilizando o
método POST.

2. Editar Evento: para cada evento listado, existe um
botão editar que deve direcionar para
editar-evento.html?id=0, com o id do evento
selecionado. Na página de edição, o formulário deve
aparecer preenchido com os dados do evento,
permitindo a edição das informações.

3. Excluir Evento: para cada evento listado, existe um
botão editar que deve direcionar para
excluir-evento.html?id=0, com o id do evento
selecionado. Na página de edição, o formulário deve
aparecer preenchido com os dados do evento,
porém com os campos desabilitados. Ao clicar no
botão "excluir para sempre", deve fazer uma
requisição na API para excluir o evento do banco de
dados.

4. Ver reservas do evento: Listar as reservas de
ingressos do evento selecionado.

*Landing Page*
1. Eventos principais: na página inicial deve exibir 3
eventos cadastrados.

2. Listar eventos: na página eventos.html deve listar
todos os eventos cadastrados. Como no exemplo
desse link.

3. Reserva de ingresso: ao clicar em "reservar
ingresso", deve abrir um modal com formulário
(nome e email), para que o usuário possa preencher
os dados e reservar o ingresso.

*Funcionalidade Opcional*
1. Criar um banner rotativo para a primeira seção da
landing page. Esse banner deverá exibir alguns
eventos de destaque para os usuários.

*Critérios de Avaliação*

● O site deve ser disponibilizado no Github Pages, com
todas as imagens renderizando corretamente.
<br>
● Você deve sempre fazer tratamento de erros quando
usar as promises usando as estruturas de catch.
<br>
● Funcionalidades:
<br>
○ Criar Evento;
<br>
○ Editar Evento;
<br>
○ Excluir Evento;
<br>
○ Listar eventos;
<br>
○ Criar reservas nos eventos;
<br>
○ Listar reservas;
<br>

*Quais os entregáveis desse desafio?*

● Código disponibilizado no Github;
<br>
● Páginas publicadas no Github Pages;
