// colour_formulae.js
// Author: John Lynch
// 2019

function getLuminance(rgbColour) {
    // Using formula from https://www.w3.org/TR/WCAG20-TECHS/G17.html and
    // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    // Normalised so black => 0 and white => 1
    const srgb = sRgbTriple(rgbColour);
    const [R, G, B] = srgb.map(x => x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(rgbColour_0, rgbColour_1) {
    const [lum_0, lum_1] = [rgbColour_0, rgbColour_1].map(col => getLuminance(col));
    const ratio = (lum_0 + 0.05) / (lum_1 + 0.05);
    return lum_0 > lum_1 ? ratio : 1. / ratio;
}

function sRgbTriple(rgbColour) {
    return rgb2NumericComponents(rgbColour).map(component => component / 255);
}

function rgb2NumericComponents(rgbColour) {
    const rgb = rgbColour.slice(4,-1).split(`,`);
    return [Number(rgb[0]), Number(rgb[1]), Number(rgb[2])];
}

function rgb2Hex(rgbColour) {
    const rgb = rgbColour.slice(4,-1).split(`,`);
    return `#`
      + (`0` + Number(rgb[0]).toString(16)).slice(-2)
      + (`0` + Number(rgb[1]).toString(16)).slice(-2)
      + (`0` + Number(rgb[2]).toString(16)).slice(-2);
}

function rgb2HexStringComponents(rgbColour) {
    const rgb = rgbColour.slice(4,-1).split(`,`);
    return [
        (`0` + Number(rgb[0]).toString(16)).slice(-2),
        (`0` + Number(rgb[1]).toString(16)).slice(-2),
        (`0` + Number(rgb[2]).toString(16)).slice(-2)
    ];
}

function rgbComponentSum(rgbColour) {
    return rgb2NumericComponents(rgbColour).reduce((x, y) => x + y);
}

function rgbString2hslArray(rgbcol) {
    // Algorithm from 'Principles of Digital Image Processing - Fundamental Techniques' by Burger & Burge, p.208.
    const rgb_components = [r, g, b] = rgb2NumericComponents(rgbcol);
    const c_high = Math.max(...rgb_components);
    if (c_high <= 0) {
        return [0, 0, 0];
    }
    else {
        const c_low = Math.min(...rgb_components);
        const c_range = c_high - c_low;
        const sat = c_range / c_high;
        const lum = c_high / 255;
        const [r_, g_, b_] = rgb_components.map(comp => (c_high - comp) / c_range);
        let hue = r == c_high ? b_ - g_ : g == c_high ? r_ - b_ + 2 : g_ - r_ + 4;
        hue = (hue + 6) % 6 / 6;
        return [hue, sat, lum];
    }
}

function getHue(rgbcol) {
    return rgbString2hslArray(rgbcol)[0];
}

function setHue(rgbcol, new_hue) {
    const hsl_components = [hue, sat, lum] = rgbString2hslArray(rgbcol);
    hsl_components[0] = new_hue;
    return hslArray2RgbString(hsl_components);
}

function hslArray2RgbArray(hsl) {
    // Algorithm from 'Principles of Digital Image Processing - Fundamental Techniques' by Burger & Burge, p.210.
    const h_ = 6 * hsl[0] % 6;
    const [sat, lum] = hsl.slice(1);
    const c1 = Math.trunc(h_);
    const c2 = h_ - c1;
    const x = (1 - sat) * lum;
    const y = (1 - sat * c2) * lum;
    const z = (1 - (sat * (1 - c2))) * lum;
    const [r_, g_, b_] = c1 == 0 ? [lum, z, x]
                  : c1 == 1 ? [y, lum, x]
                  : c1 == 2 ? [x, lum, z]
                  : c1 == 3 ? [x, y, lum]
                  : c1 == 4 ? [z, x, lum]
                  : c1 == 5 ? [lum, x, y]
                  : null;
    return [r_, g_, b_].map(comp => Math.min(Math.round(256 * comp), 255))
}

function hslArray2RgbString(hsl) {
    const [r, g, b] = hslArray2RgbArray(hsl);
    return `rgb(${r}, ${g}, ${b})`;
}
