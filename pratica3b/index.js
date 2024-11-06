let inventario = [
    { nome: 'Ahri', preco: 4800, midLaner: true },
    { nome: 'Amumu', preco: 450, midLaner: false },
    { nome: 'Anivia', preco: 3150, midLaner: true },
    { nome: 'Yasuo', preco: 4800, midLaner: true },
    { nome: 'Volibear', preco: 3150, midLaner: false },
    { nome: 'Zoe', preco: 6300, midLaner: true },
    { nome: 'Syndra', preco: 4800, midLaner: true },
    { nome: 'Nautilus', preco: 4800, midLaner: false },
    { nome: 'Neeko', preco: 6300, midLaner: true },
    { nome: 'Yone', preco: 6300, midLaner: true },
    { nome: 'Viego', preco: 6300, midLaner: false },
    { nome: 'Talon', preco: 4800, midLaner: true },
    { nome: 'Orianna', preco: 4800, midLaner: true },
    { nome: 'Nidalee', preco: 3150, midLaner: false },
    { nome: 'Lebranc', preco: 3150, midLaner: true },
    { nome: 'Jarnvan IV', preco: 4800, midLaner: true },
    { nome: 'Morgana', preco: 1350, midLaner: false },
    { nome: 'Fizz', preco: 4800, midLaner: true },
    { nome: 'Cassiopeia', preco: 4800, midLaner: true },
    { nome: 'Fiddlesticks', preco: 1350, midLaner: false },
    ];       
    
    inventario[0].preco = 3840;
    
    inventario[2].midLaner = false;
    
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].midLaner) {
        console.log(inventario[i].nome + ' é mid laner');
        }
    }
    
    let personagemMidLaner = inventario.filter(personagem => personagem.midLaner);
    console.log(personagemMidLaner);