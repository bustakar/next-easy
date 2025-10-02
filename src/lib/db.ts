import * as schema from '@/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// Lazy initialization to support CLI tools that don't need actual DB connection
let _client: ReturnType<typeof postgres> | null = null;
let _db: ReturnType<typeof drizzle> | null = null;

function getClient() {
  if (!_client) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    _client = postgres(process.env.DATABASE_URL, { prepare: false });
  }
  return _client;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(target, prop) {
    if (!_db) {
      _db = drizzle(getClient(), { schema });
    }
    return Reflect.get(_db, prop);
  },
});
