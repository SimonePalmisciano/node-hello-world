import { cowsay } from "cowsayjs";

console.log('hello world');

const valoriPassatiDaCmd = process.argv;
const outputDrago = cowsay("sono il fantasma formaggino", {cow: 'stegosaurus'})

console.log(outputDrago)
