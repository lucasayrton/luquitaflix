# Bem  vindo ao território de Frontend do Mestre dos Códigos

## Escudeiro

Torne-se um escudeiro superando todos os desafios a seguir ;)

### Prática

Desenvolver uma landing page, baseada na página principal do Youtube  Music e Netflix.

A página pode ser do tema que o candidato preferir, devendo apenas seguir e a mesma estrutura visual e contendo os itens apresentados nos requisitos a seguir.

Requisitos:

- [x] Header com logo da aplicação, itens do menu e item de menu do usuário (avatar). O Header deve ter fundo transparente quando o scroll da página estiver no topo e alterar para um fundo opaco quando for realizado o 	scroll
- [x] Um item principal em destaque
- [x] Listagem dos itens organizados em Carrossel
- [x] Footer contendo informações do desenvolvedor
- [x] Layout responsivo para as resoluções mais utilizadas (Ex: 1366x768, 360x640, 768x1024)

![Netflix](img/netflix.png)

![Youtube Music](img/yt-music.png)

Será avaliado:

-   Boas práticas de organização e estruturação do CSS SEM frameworks
-   Boas práticas de organização, estruturação e semântica do HTML5
-   Boas práticas do uso do Javascript e a manipulação do D.O.M.  SEM frameworks
-   Utilização do CSS Grid na estruturação da página
-   Responsividade da página
-   Apenas será avaliado a primeira página da aplicação (home)

O intuito desta etapa é tornar o desafiante familiarizado com a base de HTML, CSS e Javascript, criando uma estrutura sólida para os próximos níveis, por este motivo nesta etapa deve-se utilizar essas tecnologias sem abstrações ou ferramentas de terceiros. Sendo assim não será permitido o uso de frameworks, automatizadores ou pré-processadores, como: Vue, Bootstrap, SASS, PUG, Typescript, Webpack, React, JQuery, dentre outros...

Poderá ser utilizado javascript ES6, já que os navegadores mais utilizados possuem compatibilidade a algum tempo.

Recursos externos puramente estéticos podem ser utilizados, como imagens(svg, png, gif, etc..), fontes, e ícones(font-awesome, icomoon).


Caso haja alguma dúvida poderá ser aberto uma issue no github.


### Perguntas de Javascript

1. Explique com suas palavras a diferença entre a utilização de var, const e let?

R: Uma variável var ela corresponde ao escopo global e local, já a let corresponde a esses dois porém ao escopo de bloco também, isso quer dizer que ao criar um let dentro de um bloco essa variável não poderá ser utilizada fora do bloco (podendo ser um método, por exemplo).
Já a const equivale ao let em relação ao escopo, porém a variável será uma constante, então após inicializar ela não iremos conseguir alterar seu valor, para fazer isso é necessário utilizar o let.

---

2. Assinale a(s) diferença(s) entre Funções normais e Arrow Functions?

 - [ ] Funções normais não guardam escopo  
 - [x] Funções normais guardam escopo  
 - [ ] Arrow function são mais rápidas  
 - [ ] Arrow function podem ser instanciadas  
 - [x] Arrow function não guardam escopo  

---

3. qual o valor da constante name após a execução da função?

```javascript
 content = {
  name: "John",
  getName: function() {
    this.name = "James"
    return this.name
  }
}

userData = {
  name: "Luke",
  getName: content.getName
}
this.name = "Walter"
const name = userData.getName()

```
 - [ ] John
 - [ ] Luke
 - [x] James
 - [ ] Walter

---

4. Qual o retorno da função event.getTitle()

```javascript
function Event(name, day) {
  this.date = day
  this.name = name

  this.getName = function() {
    return this.name
  }
  this.getDate = function() {
    return this.date
  }
}

const event = new Event("04/02/2019", "Event Test")

Event.prototype.getTitle = function() {
  return `The event ${this.name} will take place on ${this.date} `
}
event.getTitle()

```

 - [x] The event 04/02/2019 will take place on Event Test
 - [ ] The event undefined will take place on undefined
 - [ ] Uncaught TypeError
 - [ ] The event null will take place on null

---

5. Quais são as formas de selecionar um elemento na DOM e qual a diferença entre elas?

R:  
- getElementById (Seleciona um elemento pelo ID)  
- getElementsByClassName (Seleciona um elemento pela classe)  
- getElementsByName (Seleciona um elemento pelo nome)  
- getElementsByTagName (Seleciona um elemento pela tag HTML)  
- querySelector (Permite a seleção por classe, id ou atributos)  

---

6. Como inserir um evento em determinado elemento?

R: Utilizando o addEventListener

---

7. Como remover um evento em determinado elemento?

R: Utilizando o removeEventListener

---

8. Descreva com suas palavras o que é event bubbling?

R: É um evento que é executado de forma hierárquica desde o elemento acionado até o topo.  
No exemplo abaixo se clicar no Filho será apresentado o alerta do Filho > Pai > Vô.

```javascript
<div onClick="alert('Vô')">
  Vô
  <div onClick="alert('Pai')">
    Pai
    <div onClick="alert('Filho')">
      Filho
    </div>
  </div>
</div>
```

---

9. Descreva qual a diferença nos métodos de declaração de objetos?

```javascript
const object = {}
const object = new Object()
const object = Object.create()
```

R:  
- ```{}``` Cria um objeto literal;
- ```new Object()``` Instancia um objeto e executa código do construtor;
- ```Object.create()``` Instancia um objeto porém não executa código do construtor.
---

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

R: Fetch é uma API mais nova, com ela podemos fazer requisições mais simples do que com o XMLHttpRequest, além disso é possível:
- Guardar cache das requisições e respostas;
- Fazer requisições no-cors, onde não é necessário estar implementado o CORS na aplicação back-end.

Porém muitas pessoas recomendam a utilização do XMLHttpRequest ainda, por o Fetch ainda não dar o total suporte de funcionalidades que temos no XHR.

---

11. O que são Promises ? Como podemos declarar uma promise em javascript ?

R: Promise é um objeto usado para processamento assíncrono.
Exemplo de criação de uma promise:

```javascript
new Promise(function(resolve, reject) { ... });
```

---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

R:
- ```for```: Um laço for é repetido até que a condição especificada seja falsa, sempre é iniciado uma variável que podemos somar ou subtrair o valor dela para percorrermos por um array através do seu index.
- ```while```: Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira.
- ```do...while```: A instrução será repetida até que a condição seja falsa, porém nesse caso sempre será executada a primeira vez.
---

13. Quando utilizar map, reduce ou filter ?

R:
- ```map```: Ele percorre por todo o array criando um novo array com elementos alterados conforme a função passada;
- ```reduce```: Utilizada quando é necessário somar um certo elemento de um array, retornando um único valor;
- ```filter```: Utilizada para filtrar items de um array de acordo com o teste que é passado para o método.
---

14. Qual o método do Array é mais indicado para remover elementos ?

R: ```.splice()```

---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

R:
- ```.trim()```: Ele retorna a string sem os espaços em branco do ínicio e do fim da string;
- ```.replace()```: Retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto;
- ```.toLowerCase()```: Retorna o valor da string convertido em minúsculas;
- ```.split()```: Separa uma String em um array de strings separando a string em substrings.

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage

R:
```javascript
localStorage.setItem('nomeUsuarioLocal', 'Lucas Ayrton');
sessionStorage.setItem('nomeUsuarioSession', 'Lucas Ayrton');

console.log('Local Storage: ', localStorage.getItem('nomeUsuarioLocal'))
console.log('Session Storage: ', sessionStorage.getItem('nomeUsuarioSession'))
```

---

17. Qual a melhor forma para definir um cookie utilizando javascript ?

R: Utilizando o ```document.cookie```.
Exemplo para criar um cookie:
```javascript
document.cookie = "username=Luacs Ayrton; expires=Thu, 25 Dec 2020 12:00:00 UTC; path=/";
```

---

18. Quais os tipos de Loops existentes em javascript ?

R: for, for...in, for...of, while, do...while.

---

19. Descreva com suas palavras o que é hoisting ?

R: É um comportamento que durante a fase de compilação do seu código as declarações de variáveis e funções são colocadas no topo do seu código.

---

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

 - [ ] window
 - [ ] global
 - [x] undefined
 - [ ] null

---

21. Quando eu posso utilizar o "Use-strict" no meu código ?

 - [x] No ínicio do meu código
 - [ ] No inicio do block if
 - [ ] No inicio de um loop
 - [x] no inicio de uma função