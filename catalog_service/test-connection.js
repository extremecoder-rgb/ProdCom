const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'catalog_service',
  user: 'catalog_db',
  password: 'catalog_db_password'
});

async function testConnection() {
  try {
    await client.connect();
    console.log('✅ Database connection successful!');
    
    const result = await client.query('SELECT current_database(), current_user');
    console.log('Database:', result.rows[0].current_database);
    console.log('User:', result.rows[0].current_user);
    
    await client.end();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

testConnection(); 