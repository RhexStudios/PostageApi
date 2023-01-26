# RhexApiTemplate
Template de Apis da Rhex

## Modulos externos sendo utilizados no momento:
 - Express
 - Sequelize
 - nodemon
 - mysql2
 - dotenv
 
 # Comandos do git no terminal:
 
 - git branch - Verificando branch atual
 - git checkout {nome_da_branch} - Alterando branch de trabalho
 - git checkout -b {nova_branch} - Criando uma nova branch e trocando para ela imediatamente
 
 - git pull origin {nome_da_branch} - Atualizando branch atual com a branch informada
 
 - git add . - Adicionando alterações pro commit
 - git commit -m '{mensagem}' - commitando alterações com comentários ( mensagem )
 - git push - Enviando alterações para o repositório
 
 - git pull - Atualizado branch com informações do repositório

# Estrutura do projeto:
O projeto estará estruturado da seguinte maneira:

 - Api -> Camada de comunicação com o front;
 - Config -> Camada de configurações diversas da api;
 - Domain -> Camada de estruturação básica, contendo models e ( se necessário ) middlewares e etc.
 - Infra -> Camada de comunicação com o bd, contendo conexão, mappers ( ou migrations ) e cruds do banco;
