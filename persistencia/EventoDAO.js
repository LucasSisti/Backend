import conectar from "./Conexao.js";
import Evento from "../modelo/Eventos.js"; 

// DAO - Data Access Object
export default class ClienteDAO {
    gravar(evento) { 
        if (evento instanceof Evento) {
            const conexao = await conectar(); 
            const sql = "INSERT INTO Eventos SET ?"; 
           
        }
    }

    atualizar(evento) { 
    }

     excluir(evento) { 
    }

     consultar(termoDepesquisa) { 
        
    }
}
