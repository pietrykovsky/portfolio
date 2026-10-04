import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
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

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const messages = await getLocaleMessages(locale);

  return { locale, messages };
});