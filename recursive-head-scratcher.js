function findSolution(target) {
    function find(current, history) {
        if (current == target) {
        return history;
        } else if (current > target) {
        return null;
        } else {
        return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

// The above is an example from Marijn Haverbeke's Eloquent JavaScript and can be found in Chapter 3: Functions