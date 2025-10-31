const color_input = document.getElementById('color_input')
const base_hex = document.getElementById('base_hex')
const complementary_display = document.getElementById('complementary_display')
const triadic1_display = document.getElementById('triadic1_display')
const triadic2_display = document.getElementById('triadic2_display')

function hex_to_hsl(hex) {
    const h = hex.replace('#', '').toLowerCase()
    const r = parseInt(h.slice(0, 2), 16) / 255
    const g = parseInt(h.slice(2, 4), 16) / 255
    const b = parseInt(h.slice(4, 6), 16) / 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const d = max - min
    let hh = 0
    if (d !== 0) {
        if (max === r) hh = ((g - b) / d) % 6
        else if (max === g) hh = (b - r) / d + 2
        else hh = (r - g) / d + 4
        hh = hh * 60
        if (hh < 0) hh += 360
    }
    const ll = (max + min) / 2
    const ss = d === 0 ? 0 : d / (1 - Math.abs(2 * ll - 1))
    return [Math.round(hh), Math.round(ss * 100), Math.round(ll * 100)]
}

function calculate_harmonies(base_hsl) {
    const h = base_hsl[0]
    const s = base_hsl[1]
    const l = base_hsl[2]
    const complementary = [(h + 180) % 360, s, l]
    const triadic1 = [(h + 120) % 360, s, l]
    const triadic2 = [(h + 240) % 360, s, l]
    return { complementary, triadic1, triadic2 }
}

function hsl_to_css(hsl) {
    return `hsl(${Math.round(hsl[0])}, ${Math.round(hsl[1])}%, ${Math.round(hsl[2])}%)`
}

function update_colors() {
    const hex = color_input.value.toLowerCase()
    base_hex.textContent = hex.toUpperCase()
    base_hex.style.backgroundColor = hex
    const base_hsl = hex_to_hsl(hex)
    const harmonies = calculate_harmonies(base_hsl)
    complementary_display.textContent = hsl_to_css(harmonies.complementary)
    complementary_display.style.backgroundColor = hsl_to_css(harmonies.complementary)
    triadic1_display.textContent = hsl_to_css(harmonies.triadic1)
    triadic1_display.style.backgroundColor = hsl_to_css(harmonies.triadic1)
    triadic2_display.textContent = hsl_to_css(harmonies.triadic2)
    triadic2_display.style.backgroundColor = hsl_to_css(harmonies.triadic2)
}

document.addEventListener('DOMContentLoaded', update_colors)
color_input.addEventListener('input', update_colors)
