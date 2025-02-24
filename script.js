const atletas = [
    {
        "id": 1,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 2,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 3,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 4,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 5,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 6,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 7,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
    {
        "id": 8,
        "nome": "Lucas Bergvall",
        "pais": "Suécia",
        "idade": 19,
        "altura": 1.80,
        "peso": 75,
        "modalidade": "Futebol",
        "foto": "https://tmssl.akamaized.net//images/foto/galerie/lucas-bergvall-djurgardens-if-2023-1694602232-116560.jpg?lm=1694602248"
    },
];

const main = document.querySelector('main');
atletas.forEach(atleta => {
    const card = document.createElement('div');
    card.innerHTML = `
    <h2>${atleta.nome}</h2>
    <img src="${atleta.foto}" alt="${atleta.nome}">
    <p>País: ${atleta.pais}</p>
    <p>Modalidade: ${atleta.modalidade}</p>
    `;
    main.appendChild(card);
});


function excluir(id) {
    if (confirm('Você realmente deseja remover o Card ' + id + ' ?')) {
        const indice = atletas.findIndex(atleta => atleta.id === id);
        atletas.splice(indice, 1);
        window.localStorage.setItem('atletas', JSON.stringify(atletas));
        window.location.reload();
    }
}