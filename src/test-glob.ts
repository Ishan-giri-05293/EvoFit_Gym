// @ts-ignore
const modules = import.meta.glob('/public/gallery/*', { eager: true });
console.log(modules);
