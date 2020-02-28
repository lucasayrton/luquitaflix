# Bem  vindo ao território de Frontend do Mestre dos Códigos

## Escudeiro

Torne-se um escudeiro superando todos os desafios a seguir ;)

### Prática

Desenvolver uma landing page, baseada na página principal do Youtube  Music e Netflix.

A página pode ser do tema que o candidato preferir, devendo apenas seguir e a mesma estrutura visual e contendo os itens apresentados nos requisitos a seguir.

Requisitos:

- Header com logo da aplicação, itens do menu e item de menu do usuário (avatar). O Header deve ter fundo transparente quando o scroll da página estiver no topo e alterar para um fundo opaco quando for realizado o 	scroll
-   Um item principal em destaque
-   Listagem dos itens organizados em Carrossel
-   Footer contendo informações do desenvolvedor

![Netflix](https://github.com/db1group/mestre-dos-codigos/raw/master/docs/img/netflix.png)

![Youtube Music](https://github.com/db1group/mestre-dos-codigos/raw/master/docs/img/yt-music.png)

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
- ```Object.create()``` Instancia um objeto porém não executa código do construtor;
---

10. Qual a diferença no uso de XMLHttpRequest e Fetch ? E qual devemos usar atualmente ?

---

11. O que são Promises ? Como podemos declarar uma promise em javascript ?

---

12. Liste 3 formas de iterar um Array em javascript e explique a diferença entre cada um deles?

---

13. Quando utilizar map, reduce ou filter ?

---

14. Qual o método do Array é mais indicado para remover elementos ?

---

15. Cite 4 métodos presentes na API de strings do Javascript e explique cada um deles;

---

16. Escreva um código para inserir e resgatar items do LocalStorage/SessionStorage

---

17. Qual a melhor forma para definir um cookie utilizando javascript ?

---

18. Quais os tipos de Loops existentes em javascript ?

---

19. Descreva com suas palavras o que é hoisting ?

---

20. Em um ambiente do browser. Qual o valor do this utilizando "use-strict";

 - [ ] window
 - [ ] global
 - [ ] undefined
 - [ ] null

---

21. Quando eu posso utilizar o "Use-strict" no meu código ?

 - [ ] No ínicio do meu código
 - [ ] No inicio do block if
 - [ ] No inicio de um loop
 - [ ] no inicio de uma função