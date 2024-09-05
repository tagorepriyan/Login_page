const gradients = [
    { start: [43, 1, 91], end: [122, 2, 54] },
    { start: [58, 0, 83], end: [255, 70, 70] },
    { start: [0, 128, 128], end: [72, 61, 139] },
    { start: [255, 0, 150], end: [255, 165, 0] }
];

let step = 0;
let currentGradient = 0;
const steps = 100; // Faster transition
const interval = 15; // Faster frame updates

function interpolateColor(start, end, factor) {
    return start.map((startColor, index) => 
        Math.round(startColor + factor * (end[index] - startColor))
    );
}

function updateGradient() {
    const nextGradient = (currentGradient + 1) % gradients.length;
    const factor = step / steps;

    const startColor = interpolateColor(gradients[currentGradient].start, gradients[nextGradient].start, factor);
    const endColor = interpolateColor(gradients[currentGradient].end, gradients[nextGradient].end, factor);

    document.body.style.background = `linear-gradient(109.6deg, rgb(${startColor.join(',')}) 13.4%, rgb(${endColor.join(',')}) 100.2%)`;

    step++;
    if (step > steps) {
        step = 0;
        currentGradient = nextGradient;
    }

    requestAnimationFrame(updateGradient);
}

requestAnimationFrame(updateGradient);
