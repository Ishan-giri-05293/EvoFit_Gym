// @ts-ignore
const modules = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,webp,avif}', { eager: true });
console.log(modules);
