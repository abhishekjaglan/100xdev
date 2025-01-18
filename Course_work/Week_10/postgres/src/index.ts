import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://api-example_owner:BjO5QHVyKs0E@ep-polished-wave-a1s00lqu-pooler.ap-southeast-1.aws.neon.tech/Postgres-sample-100xdevs?sslmode=require"
});

client.connect();

async function createUsersTable(){
    const result = await client.query(`
    CREATE TABLE users(
        id SERIAL UNIQUE PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `);
    console.log(result);
};

// createUsersTable();

async function insertUserTable(username: string, email: string){
    const insertQuery = "INSERT INTO users (username, email) VALUES ($1, $2)" 
    const VALUES = [username,email];
    const result = await client.query(insertQuery, VALUES);
    console.log(result);
};

insertUserTable('tanvi', 'tanvi@gmail.com');