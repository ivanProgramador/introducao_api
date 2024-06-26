/*
  HTTP

  Todas as aplicações web usam o protocolo http para se comunicar 
  o portocolo http torna possivel o acesso a sites/dados que estejam 
  na web.

  VERBOS HTTP 

  diferenças 

  http  -> protocolo de comunicação direta sem autenticação
  https -> protocolo de comunicação com mecanicas de autenticação(certificado / login/ senha/criptografia .....)
           o 's' no final significa secure.

  GET - > requisitar dados de uma rota http ou https                                        suporta -> links
  POST -> enviar dados para uma rota http ou https                                          suporta -> formularios
  PUT  -> atualizar totalmente os dados usando uma rota http ou https                       suporta -> formularios
  PATCH -> atualizar parte de um recurso existente atraves de uma rota http ou https        suporta -> formularios
  DELETE -> apagar um item atraves de uma rota http ou https                                suporta -> links e formuularios

  STATUS CODE 

  Mostra atráves de códigos o status de uma requisição existem muitos status code porém existem alguns principais, nem 
  todos precisam ser usados dependendo da finalziadade da sua api, o mais basicos e funcionais são 
  
  200 status ok 
  404 e quando ele até acessa o servidor mais não encontro o recurso ou rota solicitada  
  500 erro no servidor 
  401 erro de autenticação 

  Esses são alguns dos principais mas caso a minha api tenha um caso especifico esse site tem uma lista 
  https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

  WEBSERVICES 

  São serviços que servem para prover uma camada de comunicação entre o cliente e o servidor atraves da internet 
  usando o protocolo http.

  REST 

  Para que um api seja considerada REST ela deve ter os seguintes requisitos 

  1 - não pode ter interface gráfica porque ela deve ser somente servidor e não cliente 
  2 - deve ser stateless não pode guardar dados do cliente, ela deve so entregar os dados que foram solicitados sem gravar nada do cliente 
  3 - não é extamante uma regra mas a api deve poder fazer cache de processamento com o objetivo de aumentar o desempenho.(poucas usam)
  4 - saber trabalhar com camadas, o funcionamento da api não pode parar por causa de um firewal interno os dados devem ser fornecidos 
      a o cliente. Então o sistema dela deve saber lidar com camadas de restrição.
  5 - interface direta e uniforme.
      
  EXEMPLO DE INTERFACE NÃO UNIFORME

   (o exemplo abaixo está errado isso não deve ser feito em nenhuma rota) 

    http://meusite.com/getClientes/todos
    http://meusite.com/deletarClientes/peloId/1
    http://meusite.com/clientes/peloId/1
    http://meusite.com/editarClientes/peloId/1

  EXEMPLO DE INTERFACE UNIFORME 
    (o jeito correto de fazer rotas de api)
    
    GET    -> http://meusite.com/clientes
    DELETE -> http://meusite.com/clientes
    GET    -> http://meusite.com/clientes/1
    PUT    -> http://meusite.com/clientes/1

  Embora todas pareçam a mesma rota a api vai identificar a diferença pelo 
  verbo de requisição ou seja oque vai ser feito com o dado não pode ficar escrito na url. 
  

  A diferença entre uma api REST  e uma Api RESTFULL:

  REST -> Atende a algumas especificações de aqruitetura REST 

  RESTFULL -> Atende a todos os reuisitos da arquitetura REST de forma absoluta
  
  OS REQUISITOS SÃO 

  0 - Utilizar somente uma rota para todas as requisições e tratar tudo dentro de uma rota só com base no verbo 
      http e eos dados enviados pelo cliente.

  1 - as rotas devem ser dividas por recusos por exemplo usuarios devem ter o seu prorio conjunto de rotas assim como
      produtos ou clientes.

  3 - hyper media control HATEOAS e como manual de instruções que vem junto com a rota digamos 
      o cliente faz uma requisição GET para a rota de usuarios, a api alem de responder com a alista de usuarios 
      manda um json mostrando os links para fazer as operações com os usuarios atraves da api caso
      o sistema dele precise executar mais operações além de listar os usuarios.
  
  Essa é a base.


  
      
  





*/