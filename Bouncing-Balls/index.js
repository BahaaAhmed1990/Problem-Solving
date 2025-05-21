function bouncingBall(h, bounce, window) {
    // your code here
    let bounceTimes = 1;

    if (h < 0 || bounce < 0 || window >= h) {
        return -1
    }
    let bounceHeight = h * bounce;
    console.log('bounceheight', bounceHeight)
    while (bounceHeight > window) {
        bounceHeight *= bounce;
        bounceTimes += 2
    }
    console.log('bouncetimes', bounceTimes)
    return bounceTimes
}

console.log(bouncingBall(3.0, 0.66, 1.5))