import { exec } from 'child_process';

const viteProcess = exec('vite --port 5000 --host 0.0.0.0', { cwd: process.cwd() });

viteProcess.stdout?.pipe(process.stdout);
viteProcess.stderr?.pipe(process.stderr);

viteProcess.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

viteProcess.on('exit', (code) => {
  process.exit(code || 0);
});

process.on('SIGTERM', () => {
  viteProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  viteProcess.kill('SIGINT');
});
