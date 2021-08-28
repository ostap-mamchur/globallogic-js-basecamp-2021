function* generateFibSequence(n = 2) {
    let current = 0;
    let next = 1;

    for (let i = 0; i < n; i++) {
        yield new Promise(resolve => {
            setImmediate(() => resolve(current));
        });

        [current, next] = [next, current + next];
    }
}

async function exec() {
    let sum = 0;
    const generator = generateFibSequence(10);
    while (!generator.next().done) {
        const value = await generator.next().value;
        sum += value;
    }
    console.log(sum);

}

exec();



