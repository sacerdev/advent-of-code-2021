const fs = require('fs');

const data = fs.readFileSync('./day1/input.txt', { encoding: 'utf8', flag: 'r' });
const lines = data.split(/\r?\n/);

let count = 0;
lines.forEach((l, li) => {
	if (li > 0 && li < lines.length - 1) {
		const curr = parseInt(l);
		const prev = parseInt(lines[li - 1]) || null;

		if (typeof curr === 'number') {
			if (prev < curr) {
				count++;
			}
		}
	}
});

console.log(count);

let countSum = 0;
let prevSum = parseInt(lines[0]) + parseInt(lines[1]) + parseInt(lines[2]);
lines.forEach((l, li) => {
	if (li > 0 && li < lines.length - 2) {
		const curr = parseInt(l);
		if (typeof curr === 'number') {
			const currSum = curr + parseInt(lines[li + 1]) + parseInt(lines[li + 2]);
			if (currSum > prevSum) {
				countSum++;
			}
			prevSum = currSum;
		}
	}
});
console.log(countSum);
