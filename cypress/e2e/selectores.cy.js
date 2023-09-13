describe('selectores con diferentes formas', ()=>{

    it('', () => {

        //Todas estas formas son para encontrar en CSS selectors
        cy.visit('');
        cy.get('button');
        cy.get('input'); //busqueda por tagname
        cy.get('.password'); // el punto es como un class y password es el nombre parcial de ésa clase
        cy.get('[cy-get="user"]'); // busqueda por atributo
        cy.get('[for="day"]'); //busqueda por atributo
        cy.get('input#user') // para buscar un elemento tipo input con id "user" || busqueda con tagname + id
        
        cy.get('div[role="group"] > input#user') //es para encontrar un elemento hijo. Sin embargo no se puede buscar viceversa hijo>padre ni hermano>hermano

        cy.get('form').find('button') // sirve para buscar un elemento dentro de otro elemento
        cy.contains('Register') // busca el elemento por el texto que muestra en la pantalla
        cy.contains('button','Register') // busca el elemento del tipo button por el texto que muestra en la pantalla

    });

    if('Encontrar elemento con el método find', () => {
        cy.visit('');
        cy.get('form').find('button')
    });

    if('Encontrar elemento con el método contains', () => {
        cy.visit('');
        cy.contains('button','Register') //se pone el tipo de elemento web, Ejemplo: button
        cy.contains('button', 'register', {matchCase: false})
    });

    if('Encontrar elemento con el método parent', () => {
        cy.visit('');
        cy.get('#user').parent('div');
    });

    if('Encontrar elemento con el método children', () => {
        cy.visit('');
        cy.get('form > div').first().children('#user'); //encuentra un objeto padre, luego escoge al primer hijo
    });
    
    if('Encontrar elemento con el método sibling', () => {
        cy.visit('');
        cy.get('#user').siblings('label'); //busca al objeto hermano del tipo label
        cy.get('#user').siblings('label[for="user"]'); 

        cy.get('form > div') // obtiene 5 elementos div
        cy.get('form > div').first().siblings().first(); // el first obtienes el primer elemento, de ese elemento, el sibbligs encuentra 7 hermanos, 
                                                         //y el siguiente first obtiene el primero de esa lista de 7, pero que visualmente es el 2do a modo general

        cy.get('form > div').first().siblings().eq(2); // obtiene lo mismo, pero al final busca al 3 elemento de esa segunda lista ya que inicia desde la posición 0
    });
})