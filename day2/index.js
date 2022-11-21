const fs = require('fs');

const data = fs.readFileSync('./day2/input.txt', { encoding: 'utf8', flag: 'r' });
const lines = data.split(/\r?\n/);

let horiz = 0;
let depth = 0;

lines.forEach((l) => {
	const [direction, _value] = l.split(' ');
	const value = parseInt(_value);

	if (direction && value) {
		switch(direction) {
			case 'forward':
				horiz += value;
				break;
			case 'down':
				depth += value;
				break;
			case 'up':
				depth -= value;
				break;
		}
	}
});

console.log('part1:', horiz * depth);

let horizB = 0;
let depthB = 0;
let aim = 0;

lines.forEach((l) => {
	const [direction, _value] = l.split(' ');
	const value = parseInt(_value);

	if (direction && value) {
		switch(direction) {
			case 'forward':
				horizB += value;
				depthB += aim * value;
				break;
			case 'down':
				aim += value;
				break;
			case 'up':
				aim -= value;
				break;
		}
	}
});

console.log('part2:', horizB * depthB);
