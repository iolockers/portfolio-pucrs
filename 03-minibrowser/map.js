//TDD- Test Driven Development

var novoMapa = new Map();

// 11.11.2011 as 11 PM;
novoMapa.set('11.11.2011 - 23:30 - URL', {});
novoMapa.set('11.11.2011 - 23:30 - URL', {title: 'Titulo do Site', url: 'https://site.com.br'});
novoMapa.set('11.11.2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11.11.2011 - 23:30 - URL');
console.log(resultado);

