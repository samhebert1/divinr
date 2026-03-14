import { tarotCards } from './src/app/core/models/tarot';

console.log("Before: ", tarotCards[0].name);

for (let i = tarotCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = tarotCards[i];
    tarotCards[i] = tarotCards[j];
    tarotCards[j] = temp;
}

console.log("After: ", tarotCards[0].name);
