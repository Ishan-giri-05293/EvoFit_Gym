import { createServer } from 'vite';

async function test() {
  const server = await createServer({
    root: process.cwd(),
  });
  const result = await server.transformRequest('/src/components/Gallery.tsx');
  console.log(result.code);
  await server.close();
}
test();
