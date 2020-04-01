let divPet = document.getElementById('pets');



let listaDeAnimais = [
    {
        tipo: "Gato",
        nome: "Frida",
        idade: 6,
        raca: undefined,
        porte: "medio",
        sexo: "femea",
        vacinado: "true",
        tutor: {
            nome:"Luisa",
            telefone:"(11)4002-8922"
        }
    },
    {
        
            tipo: "Gato",
            nome: "Pagu",
            idade: 4,
            raca: "srd",
            porte: "medio",
            sexo: "femea",
            vacinado: "true",
            tutor: {
                nome:"Luisa",
                telefone:"(11)4002-8922"
            }
        
    },
]

//CRIANDO A FUNÇÃO DE ADICIONAR PETS NA LISTA DE ANIMAIS

const adicionarPet = (tipo,nome,idade,raca,porte,sexo, vacinado,tutor)=>{
//AQUI PODE SER QUALQUER NOME NOS PARAMETROS MAS MELHOR DEIXAR IGUAL
    let novoPet = {

        tipo: tipo,
        nome: nome,
        idade: idade,
        raca: raca,
        porte: porte,
        sexo: sexo,
        vacinado: vacinado,
        tutor: {
            nome:tutor,
            telefone:undefined
        }

    };

    listaDeAnimais.push(novoPet); //COLOCANDO LA NA LISTA DE ANIMAIS

    console.log("Pet cadastrado com sucesso!") //SEMPRE DAR O FEEDBACK PRO CLIENTE, SEMPRE OK
};

//CRIANDO A FUNÇÃO DE VISUALIZAR PETS E DEIXANDO BONITINHO

const visualizarPets = () =>{

    listaDeAnimais.forEach((animal,index)=>{

        let divConteudoPet = document.createElement('div'); // COLOCANDO O [i] DENTRO DE UMA VARIAVEL PRA NAO TER QUE FICAR CHAMANDO 
        
        divConteudoPet.setAttribute('class','bixinho');
    
        let pSeparador = document.createElement('p');
        pSeparador.textContent = "------------------------------";
        
        let pNomeAnimal = document.createElement('p');
        pNomeAnimal.textContent = "Nome do Animal : " + animal.nome;
    
        let pTipoAnimal = document.createElement('p');
        pTipoAnimal.textContent = "Tipo do Animal : " + animal.tipo;
    
    
        divConteudoPet.appendChild(pSeparador);
        divConteudoPet.appendChild(pNomeAnimal);
        divConteudoPet.appendChild(pTipoAnimal);
    
        divPet.appendChild(divConteudoPet);
    
        });
    

}

//CRIANDO A FUNÇÃO DE ACHAR O PET PELO NOME

const acharPet =  nomePet =>{

    for(let i=0; i<listaDeAnimais.length; i++){

        let animal = listaDeAnimais[i]

    if(nomePet == animal.nome){
        return console.log("Achamos o seu pet na nossa lista :)")
    }
        
    
}
    console.log("Não achamos esse pet ):")
    
}



//ARROWFUNCTIONS

//sem parametro

// const visualizarPets = () =>{

// }

//com 1 parametro 
// const visualizarPets = valora =>{

// }

//2 ou mais parametros

// const visualizarPets = (valorA,valorB) =>{

// }



