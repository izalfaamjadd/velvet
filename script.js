const n = 5; // Controls the size and peak width of the star/diamond

// 1. Upper Pyramid
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// 2. Lower Inverted Pyramid
for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}
