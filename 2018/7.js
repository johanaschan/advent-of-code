const part1 = () => {
    const instructions = input.split(/\n/).map(parseInput);

    const leftSteps = [];
    const rightSteps = [];

    for (const instruction of instructions) {
        leftSteps.push(instruction.step);
        rightSteps.push(instruction.beforeStep);
    }
    return order(instructions, leftSteps, rightSteps);
};

const part2 = () => {
    const instructions = input.split(/\n/).map(parseInput);

    const leftSteps = [];
    const rightSteps = [];

    for (const instruction of instructions) {
        leftSteps.push(instruction.step);
        rightSteps.push(instruction.beforeStep);
    }

    return order2(instructions, leftSteps, rightSteps, {list: [], maxSixe: 5}, 0);
};

const order = (instructions, leftSteps, rightSteps) => {
    if (instructions.length === 1) {
        return instructions[0].step + instructions[0].beforeStep;
    }
    const possibleSteps = leftSteps
        .filter(step => !rightSteps.includes(step))
        .sort();

    const removedInstructions = [];
    const filteredInstructions = instructions.filter((step, index) => {
        const firstPossibleStep = step.step === possibleSteps[0];
        if (firstPossibleStep) {
            removedInstructions.push(index);
        }
        return !firstPossibleStep;
    });
    removedInstructions.reverse();
    removedInstructions.forEach(index => {
        leftSteps.splice(index, 1);
        rightSteps.splice(index, 1);
    });
    return possibleSteps[0] + order(filteredInstructions, leftSteps, rightSteps);
};

const order2 = (instructions, leftSteps, rightSteps, workers, seconds) => {
    if (instructions.length === 1) {
        let stepSeconds = 1;
        if (!workers.list.length) {
            stepSeconds = countSeconds(instructions[0].step);
        }
        return seconds + stepSeconds + countSeconds(instructions[0].beforeStep);
    }
    const possibleSteps = [...new Set(leftSteps
        .filter(step => !rightSteps.includes(step))
        .sort())];

    possibleSteps.forEach(possibleStep => {
        if (workers.list.length !== workers.maxSixe) {
            if (!workers.list.filter(worker => worker.step === possibleStep).length) {
                workers.list.push({step: possibleStep, seconds: seconds + countSeconds(possibleStep)});
            }
        }
    });

    const removedInstructions = [];
    const filteredInstructions = instructions.filter((step, index) => {
        const includesStep = workers.list.filter(worker => worker.seconds === seconds
            && worker.step === step.step).length > 0;
        if (includesStep) {
            removedInstructions.push({index, step: step.step});
        }
        return !includesStep;
    });
    removedInstructions.reverse();
    removedInstructions.forEach(element => {
        leftSteps.splice(element.index, 1);
        rightSteps.splice(element.index, 1);
        workers.list = workers.list.filter(worker => worker.step !== element.step);
    });
    if (!removedInstructions.length) {
        seconds += 1;
    }
    return order2(filteredInstructions, leftSteps, rightSteps, workers, seconds);
};

const countSeconds = (step) => {
    return step.charCodeAt(0) - 'A'.charCodeAt(0) + 61;
};

const parseInput = function (row) {
    return {
        'step': row.substring(5, 6),
        'beforeStep': row.substring(36, 37)
    }
};

const input = `Step B must be finished before step K can begin.
Step F must be finished before step I can begin.
Step T must be finished before step U can begin.
Step R must be finished before step Z can begin.
Step N must be finished before step S can begin.
Step X must be finished before step Y can begin.
Step I must be finished before step Y can begin.
Step K must be finished before step L can begin.
Step U must be finished before step J can begin.
Step G must be finished before step L can begin.
Step W must be finished before step A can begin.
Step H must be finished before step Q can begin.
Step M must be finished before step L can begin.
Step P must be finished before step L can begin.
Step L must be finished before step A can begin.
Step V must be finished before step Y can begin.
Step Q must be finished before step Y can begin.
Step Z must be finished before step J can begin.
Step O must be finished before step D can begin.
Step Y must be finished before step A can begin.
Step J must be finished before step E can begin.
Step A must be finished before step E can begin.
Step C must be finished before step E can begin.
Step D must be finished before step E can begin.
Step S must be finished before step E can begin.
Step B must be finished before step R can begin.
Step U must be finished before step O can begin.
Step X must be finished before step I can begin.
Step C must be finished before step S can begin.
Step O must be finished before step S can begin.
Step J must be finished before step D can begin.
Step O must be finished before step E can begin.
Step Z must be finished before step O can begin.
Step J must be finished before step C can begin.
Step P must be finished before step Y can begin.
Step X must be finished before step S can begin.
Step O must be finished before step Y can begin.
Step J must be finished before step A can begin.
Step H must be finished before step C can begin.
Step P must be finished before step D can begin.
Step Z must be finished before step S can begin.
Step T must be finished before step Z can begin.
Step Y must be finished before step C can begin.
Step X must be finished before step H can begin.
Step R must be finished before step Y can begin.
Step T must be finished before step W can begin.
Step L must be finished before step O can begin.
Step G must be finished before step Z can begin.
Step H must be finished before step P can begin.
Step I must be finished before step U can begin.
Step H must be finished before step V can begin.
Step N must be finished before step Y can begin.
Step Q must be finished before step E can begin.
Step H must be finished before step D can begin.
Step P must be finished before step O can begin.
Step T must be finished before step I can begin.
Step W must be finished before step V can begin.
Step K must be finished before step M can begin.
Step R must be finished before step W can begin.
Step B must be finished before step T can begin.
Step U must be finished before step A can begin.
Step N must be finished before step H can begin.
Step F must be finished before step U can begin.
Step Q must be finished before step O can begin.
Step Y must be finished before step S can begin.
Step V must be finished before step O can begin.
Step W must be finished before step C can begin.
Step Y must be finished before step J can begin.
Step T must be finished before step V can begin.
Step N must be finished before step D can begin.
Step U must be finished before step Q can begin.
Step A must be finished before step C can begin.
Step U must be finished before step M can begin.
Step Q must be finished before step S can begin.
Step P must be finished before step V can begin.
Step B must be finished before step Z can begin.
Step W must be finished before step Q can begin.
Step L must be finished before step S can begin.
Step I must be finished before step P can begin.
Step G must be finished before step P can begin.
Step L must be finished before step C can begin.
Step K must be finished before step A can begin.
Step D must be finished before step S can begin.
Step I must be finished before step H can begin.
Step R must be finished before step M can begin.
Step Q must be finished before step D can begin.
Step K must be finished before step O can begin.
Step I must be finished before step C can begin.
Step N must be finished before step O can begin.
Step R must be finished before step X can begin.
Step P must be finished before step C can begin.
Step B must be finished before step Y can begin.
Step G must be finished before step E can begin.
Step L must be finished before step V can begin.
Step W must be finished before step Y can begin.
Step C must be finished before step D can begin.
Step M must be finished before step J can begin.
Step F must be finished before step N can begin.
Step T must be finished before step Q can begin.
Step I must be finished before step E can begin.
Step A must be finished before step D can begin.`;

console.log(part1());
console.log(part2());