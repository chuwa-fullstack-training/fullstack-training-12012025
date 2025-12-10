/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let solutions = [];
    for (let ones = 0; ones <= 48; ones++) {
        for (let fives = 0; fives <= 48 - ones; fives++) {
            for (let twentyFives = 0; twentyFives <= 48 - ones - fives; twentyFives++) {
                let fifties = 48 - ones - fives - twentyFives;
                let totalValue = ones * 1 + fives * 5 + twentyFives * 25 + fifties * 50;
                if (totalValue === 100) {
                    solutions.push({ ones, fives, twentyFives, fifties });
                    if (solutions.length === 2) {
                        console.log("Solution 1:", solutions[0]);
                        console.log("Solution 2:", solutions[1]);
                        return;
                    }
                }
            }
        }
    }
}
