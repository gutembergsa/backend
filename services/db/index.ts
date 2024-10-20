import { Sequelize } from 'sequelize';
import { DB_URL } from '../../utils/constants/index';

// Option 1: Passing a connection URI
const sequelize = new Sequelize(DB_URL); // Example for postgres

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

(async () => {
    try {
        await sequelize.authenticate();
        console.log(
            'Conexão com o banco de dados foi estabelecida com sucesso!'
        );
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();

export default sequelize;
