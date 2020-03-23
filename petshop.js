// let animal = {
//     tipo: "Cachorro",
//     nome: "Rex",
//     idade: 5,
//     raca: "srd",
//     porte: "grande",
//     sexo: "macho",
//     vacinado: "true",
//     tutor: {
//         nome:"Gustavo",
//         telefone:"(11)4002-8922"
//     }

// };

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

function adicionarPet(tipo,nome,idade,raca,porte,sexo, vacinado,tutor){

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

    listaDeAnimais.push(novoPet);

    console.log("Pet cadastrado com sucesso!")
};

function visualizarPets(){

    for(let i =0; i<listaDeAnimais.length; i++){

    let animal = listaDeAnimais[i]
    console.log("------------------------------")
    console.log("Nome do Animal: " + animal.nome)
    console.log("Tipo do Animal: " + animal.tipo)
    console.log("Sexo do Animal: " + animal.sexo)

    }cr
}




