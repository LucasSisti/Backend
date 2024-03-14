import mysql from 'mysql2/promise';

//O Banco de Dados escolhido será o MYSQL
export default function conectar() {
    if(global.pool !== undefined){
        return global.pool.getConnection();
    }
    else{
            const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'backend',
            port: 3306,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            maxIdleTime: 60000, 
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });
       //garantindo que haja apenas uma cópia desse pool para a minha aplicação 
       global.pool=pool;
       return await pool.getConnection();           
    }
    
}
