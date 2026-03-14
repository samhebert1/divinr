import { TarotService } from './src/app/core/tarot.service';

const ts = new TarotService();
const qc = ts.dealCard();
console.log(ts.getLeximancyUrl('qr', [qc]));

const fc = ts.dealCards([{}, {}, {}, {}]);
console.log(ts.getLeximancyUrl('er', fc));
