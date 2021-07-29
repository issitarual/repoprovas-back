/* import { getConnectionManager } from "typeorm"; */

/* export default async function connect () {
    const connectionManager = await getConnectionManager();
    const connection = connectionManager.create({
      name: "default",
      type: "postgres",
      url: process.env.DB_URL,
      entities: ["src/entities/*.ts"]
    });
    await connection.connect();
    return connection;
  } */

  import pg from 'pg';

  const { Pool } = pg;
  
  const databaseConfig = {
      connectionString: process.env.DATABASE_URL,
      ssl: {
          rejectUnauthorized: false
      }
  }
  
  const connection = new Pool(databaseConfig);
  
  export default connection;