import { globSync } from 'glob';
console.log(globSync('public/transformations/*.{png,jpg,jpeg,webp}'));
