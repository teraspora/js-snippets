function* oscillating_counter(start, end) {
    let delta = start < end ? 1 : -1;
    let n = start;
    yield n;
    while (true) {
        yield n += delta;
        if (n == start || n == end) {
            delta = -delta;
        }
    }
}

const range = (m, n) => [...(function* (p, q) {
    while (p < q) yield p++;
})(m, n)];
