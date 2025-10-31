# Functional Color Harmonizer

A single-page web utility that calculates and displays complementary and triadic color harmonies for any color selected by the user.  
This project follows a purely functional JavaScript approach, using immutable helper functions for all logic and a minimal flat design for the interface.

## Features
- Converts HEX colors to HSL values using pure functions  
- Calculates complementary and triadic color harmonies  
- Updates the display in real time when the color input changes  
- Uses functional programming only (no classes or prototypes)  
- Clean and minimal design suitable for any screen size  

## Functions Overview
- **hex_to_hsl(hex)** → Converts HEX to HSL array  
- **calculate_harmonies(base_hsl)** → Computes complementary and triadic hues  
- **hsl_to_css(hsl)** → Formats HSL arrays for CSS use  
- **update_colors()** → Updates the UI with new color values  

## Usage
1. Open `index.html` in any modern browser.  
2. Use the color picker to select a base color.  
3. Complementary and triadic colors will appear instantly.

