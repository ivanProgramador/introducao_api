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




 
 

*/