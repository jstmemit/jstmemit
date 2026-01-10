import 'dotenv/config';
import { drizzle, LibSQLDatabase } from 'drizzle-orm/libsql';

export const db: LibSQLDatabase = drizzle(process.env.DB_FILE_NAME!);
