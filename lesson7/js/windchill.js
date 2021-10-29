const s = parseFloat(document.getElementById("speed").textContent);
const t = parseFloat(document.getElementById("temp").textContent);
let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
wc = Math.round(wc);

if (t<=50 && s>3) {
    document.getElementById("windchill").textContent = wc + "\xB0F";

} else {
    document.getElementById("windchill").textContent = "n/a"
}