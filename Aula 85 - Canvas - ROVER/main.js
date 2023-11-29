//obtendo o link do Canvas que está com o id no html
canvas = document.getElementById('myCanvas');

//Todo o conteúdo do canvas será armazenado na variável ctx com o método getContext e colocando canvas como um objeto.
ctx = canvas.getContext("2d");

//***************************************SOMENTE SE DER TEMPO******************************************************
//---------------------------------------ALTERAR PLANO DE FUNDO DO CANVAS ALEATORIAMENTE------------------------------------------
//criar uma array para armazenar imagens de plano de fundo do canvas
nasaMarsImagesArray = ["nasa1.jpg","nasa2.jpeg", "nasa3.jpg","nasa4.jpg"];

//criar uma variável com para calcular número aleatório que escolhe as imagens
randomNumber = Math.floor(Math.random() * 4);

//mostrar no console o número aleatório
console.log(randomNumber);

//criar a variável que armazena a imagem escolhida que está no número aleatório.
backgroundImage = nasaMarsImagesArray[randomNumber];

//mostrar no console qual o plano de fundo do canva escolhido
console.log("backgroundImage = " + backgroundImage);

//***************************************SOMENTE SE DER TEMPO********************************** */

//determinação de largura e altura do rover 100px e 90px
roverWidth = 100;
roverHeight = 90;

//determinação de localização do rover x e y.
roverX = 10;
roverY = 10;

//variáveis armazenam as imagens (plano de fundo e do objeto)
//backgroundImage = "mars.jpg";
roverImage = "rover.png";

//função criada para chamar o body do html(<body onload="add();">)
function add(){

    //Os códigos abaixo foram feitos para que as imagens fossem carregadas no navegador antes de chamá-las no canvas.
    //As imagens devem ser carregadas antes do canvas
    backgroundImgTag = new Image(); //Chama a imagem
    backgroundImgTag.onload = uploadBackground; //Carrega a imagem da função
    backgroundImgTag.src = backgroundImage; //Chama a imagem que foi inserida

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;


    function uploadBackground(){

        //O método drawImage() chama uma imagem no canvas.
        ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)

    }

    function uploadRover(){

        //O método uploadRover() chama uma imagem no canvas.
        ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight)

    }

    //Junção de Evento e Função
    window.addEventListener("keydown", myKeyDown);

    //Lembrando que o "e", segnifica evento
    function myKeyDown (e){

        //variável criada para receber o evento de teclas pressionadas
        keyPressed = e.keyCode;
        console.log(keyPressed);

        //os números mostrados são os valores ASCII das teclas
        if(keyPressed == '38'){
            up();
            console.log("cima");
         }

        if(keyPressed == '40'){
            down();
            console.log("baixo")
         }

        if(keyPressed == '37'){
            left();
            console.log("esquerda")
         }

        if(keyPressed == '39'){
            right();
             console.log("direita")
        }
    }
    //função para cima
    function up()
    {
	    if(roverY >= 0)
	    {
		    roverY = roverY - 10;
		    console.log("Quando a seta para cima é pressionada,  x = " + roverX + " | y = " +roverY);
		    uploadBackground();
		    uploadRover();
	    }
    }
    //função para baixo
    function down()
    {
	    if(roverY <= 500)
	    {
		    roverY = roverY + 10;
		    console.log("Quando a seta para baixo é pressionada,  x = " + roverX + " | y = " +roverY);
		    uploadBackground();
		    uploadRover();
	    }
    }
    //função para esquerda
    function left()
    {
	    if(roverX >= 0)
	    {
		    roverX = roverX - 10;
		    console.log("Quando a seta para esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		    uploadBackground();
		    uploadRover();
	    }
    }
    //função para direita
    function right()
    {
	    if(roverX <= 700)
	    {
		    roverX = roverX + 10;
		    console.log("Quando a seta para direita é pressionada,  x = " + roverX + " | y = " +roverY);
		    uploadBackground();
		    uploadRover();
        }
    }
    
}
