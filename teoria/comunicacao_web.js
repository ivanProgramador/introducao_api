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

  Rest e restiful qual e a diferença ?

  um api rest tem alguma caracteristicas da aqruitetura rest, ja um apia rest full segue todos os requisitos Rest 
  de forma a absoluta para que um api seja considerada restfull ela tem que seguir esses parametros 
  
  1 - usar os verbos http para executar operações
  2 - dividir as rotas por recurso
  3 - usar o HATEOAS para passar instruçoes de uso das rotas 
  
  oque é HATEOAS ?
  







  


  




 
 

*/