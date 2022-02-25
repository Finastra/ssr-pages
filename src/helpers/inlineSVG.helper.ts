import { readFileSync } from 'fs';
import { join } from 'path';

export default function inlineSVG(iconName) {
  const path = join(__dirname, `../assets/img/${iconNameWhitelist(iconName)}.svg`);
  return readFileSync(path, 'utf8');
}

function iconNameWhitelist(iconName) {
  const fallbackIconName = 'warning'
  const whitelist = ['warning', 'exit'];
  if (!whitelist.includes(iconName)) {
    return fallbackIconName;
  }
  return iconName;
}