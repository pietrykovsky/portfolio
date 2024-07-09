import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './locale';
import fs from 'fs/promises';
import path from 'path';

async function getLocaleMessages(locale) {
  const messagesDirectory = path.join(process.cwd(), 'messages', locale);
  const messages = {};

  try {
    const files = await fs.readdir(messagesDirectory);
    
    for (const file of files) {
      if (file.endsWith('.json')) {
        const fileName = path.basename(file, '.json');
        const filePath = path.join(messagesDirectory, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        messages[fileName] = JSON.parse(fileContent);
      }
    }
  } catch (error) {
    console.error(`Error reading messages for locale ${locale}:`, error);
  }

  return messages;
}

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  const messages = await getLocaleMessages(locale);

  return { locale, messages };
});