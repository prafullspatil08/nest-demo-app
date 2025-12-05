import { Client } from 'pg';

const dbConfig = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Root@123',
  database: 'postgres', // Connect to the default 'postgres' database to check for 'TestNest'
};

const dbNameToCreate = 'TestNest';

const client = new Client(dbConfig);

async function createDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL server.');

    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbNameToCreate}'`);

    if (res.rowCount === 0) {
      console.log(`Database "${dbNameToCreate}" does not exist. Creating it...`);
      await client.query(`CREATE DATABASE "${dbNameToCreate}"`);
      console.log(`Database "${dbNameToCreate}" created successfully.`);
    } else {
      console.log(`Database "${dbNameToCreate}" already exists.`);
    }
  } catch (err) {
    console.error('Error creating database:', err);
  } finally {
    await client.end();
    console.log('Disconnected from PostgreSQL server.');
  }
}

createDatabase();
