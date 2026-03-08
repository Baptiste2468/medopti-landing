#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const root = join(process.cwd());
if (!existsSync(join(root, '.git'))) {
  console.error('\n❌ Pas de dépôt Git. Pour déployer sur GitHub Pages :\n');
  console.error('  1. git init');
  console.error('  2. git add .');
  console.error('  3. git commit -m "Initial commit"');
  console.error('  4. git remote add origin https://github.com/Baptiste2468/medopti-landing.git');
  console.error('  5. git branch -M main && git push -u origin main');
  console.error('  6. npm run deploy\n');
  process.exit(1);
}
try {
  execSync('git remote get-url origin', { stdio: 'pipe' });
} catch {
  console.error('\n❌ Aucune remote "origin". Ajoutez votre repo GitHub :\n');
  console.error('  git remote add origin https://github.com/Baptiste2468/medopti-landing.git');
  console.error('  git push -u origin main\n');
  process.exit(1);
}
process.exit(0);
