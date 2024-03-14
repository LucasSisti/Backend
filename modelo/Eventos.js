class evento{
    #Data;
    #Local;
    #Preco;
    #Descricao
}

constructor(Data = 0, Local = ' ', Preco= 0, Descricao = ' ');{
    this.#Data =  Data;
    this.#Local = Local;
    this.#Preco = Preco;
    this.Descricao = Descricao;
} 
            
get Data(novaData); {
    return this.#Data;
}

set Data(novaData);{
    return this.#Data;  
}
// Todos os outros atributos

gravar();{

}
atualizar ();{

}
excluir();{

}
consultar(termodepesquisa);{
    
}