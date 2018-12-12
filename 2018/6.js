const part1 = () => {
    const coordinates = input.split(/\n/);
    const grid = [];
    let maxX = 0;
    let maxY = 0;
    const locations = [];

    coordinates.forEach(coordinate => {
        const splittedCoordinate = coordinate.split(', ');
        const x = parseInt(splittedCoordinate[0]);
        const y = parseInt(splittedCoordinate[1]);
        if (x > maxX) {
            maxX = x;
        }
        if (y > maxY) {
            maxY = y;
        }
        locations.push({x, y, count: 0});
    });

    for (let x = 0; x <= maxX; x++) {
        for (let y = 0; y <= maxY; y++) {
            if (!grid[x]) {
                grid[x] = [];
            }
            grid[x][y] = {distance: Number.MAX_VALUE};
            locations.forEach((location, index) => {
                const distance = manhattanDistance(location.x, location.y, x, y);
                const shortestDistance = grid[x][y].distance;
                if (distance < shortestDistance) {
                    grid[x][y] = {index, distance, same: false};
                }
                if (distance === shortestDistance) {
                    grid[x][y] = {index, distance, same: true};
                }
            });
        }
    }

    for (let x = 0; x <= maxX; x++) {
        for (let y = 0; y <= maxY; y++) {
            const location = grid[x][y];
            if (!location.same) {
                if (x === 0 || y === 0 || x === maxX || y === maxY) {
                    locations[location.index].infinite = true;
                } else {
                    locations[location.index].count += 1;
                }
            }
        }
    }
    return Math.max(...locations.filter(location => !location.infinite)
        .map(location => location.count));
};

const part2 = () => {
    const coordinates = input.split(/\n/);
    let maxX = 0;
    let maxY = 0;
    const locations = [];
    const totalDistanceMax = 10000;

    coordinates.forEach(coordinate => {
        const splittedCoordinate = coordinate.split(', ');
        const x = parseInt(splittedCoordinate[0]);
        const y = parseInt(splittedCoordinate[1]);
        if (x > maxX) {
            maxX = x;
        }
        if (y > maxY) {
            maxY = y;
        }
        locations.push({x, y});
    });

    let count = 0;
    for (let x = 0; x <= maxX; x++) {
        for (let y = 0; y <= maxY; y++) {
            const totalDistance = locations.map(location => manhattanDistance(location.x, location.y, x, y))
                .reduce((total, value) => value + total);
            if (totalDistance < totalDistanceMax) {
                count++;
            }
        }
    }
    return count;
};

const manhattanDistance = (x0, y0, x1, y1) => {
    return Math.abs(x0 - x1) + Math.abs(y0 - y1);
};

const input = `181, 47
337, 53
331, 40
137, 57
200, 96
351, 180
157, 332
113, 101
285, 55
189, 188
174, 254
339, 81
143, 61
131, 155
239, 334
357, 291
290, 89
164, 149
248, 73
311, 190
54, 217
285, 268
354, 113
318, 191
182, 230
156, 252
114, 232
159, 299
324, 280
152, 155
295, 293
194, 214
252, 345
233, 172
272, 311
230, 82
62, 160
275, 96
335, 215
185, 347
134, 272
58, 113
112, 155
220, 83
153, 244
279, 149
302, 167
185, 158
72, 91
264, 67`;

console.log(part1());
console.log(part2());