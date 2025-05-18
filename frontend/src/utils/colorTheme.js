const colorThemes = {
  income: [
    "#1A7F5D", // Deep Green  
    "#2A9D8F", // Teal Green  
    "#003F88", // Dark Royal Blue  
    "#4CAF50", // Classic Green  
    "#1B9AAA", // Cool Ocean Blue  
    "#0A9396", // Rich Ocean Green  
    "#43AA8B", // Medium Jungle Green  
    "#0288D1", // Strong Blue  
    "#76C893", // Soft Pastel Green  
    "#00A86B", // Jade Green  
    "#1E6091", // Midnight Blue  
    "#2E8B57", // Sea Green  
    "#0D3B66", // Deep Navy Blue  
    "#219EBC", // Cyan Blue  
    "#00C49A", // Aqua Green  
    "#006400", // Dark Forest Green  
    "#006D77", // Deep Teal  
    "#005F73", // Dark Teal Blue  
    "#8AC926", // Fresh Lime Green  
    "#008080"  // Classic Teal 
  ],
  expense: [
    "#E63946", // Vivid Red  
    "#B22222", // Firebrick Red  
    "#A64D3D", // Rust  
    "#E76F51", // Burnt Sienna  
    "#D79921", // Goldenrod Yellow  
    "#E85D04", // Deep Tangerine  
    "#FF4500", // Orange Red  
    "#FF6700", // Bright Pumpkin Orange  
    "#FF9F1C", // Amber  
    "#C1121F", // Dark Crimson  
    "#BF211E", // Scarlet Red  
    "#FFDD57", // Bright Yellow  
    "#D7263D", // Cherry Red  
    "#FFB000", // Golden Orange  
    "#F4A261", // Warm Yellow-Orange  
    "#FFD60A", // Rich Mustard Yellow  
    "#D44D56", // Raspberry Red  
    "#A40000", // Deep Blood Red  
    "#8B0000", // Dark Red  
    "#F94144"  // Bright Warning Red  
  ],
  indicator: [
    "#FF0000", // Red
    "#FF8000", // Orange
    "#FFFF00", // Yellow
    "#80FF00", // Light Green
    "#00CC00" // Green
  ]
};

/**
 * Get color theme array for a specific type.
 * @param {'income'|'expense'|'indicator'} theme
 * @returns {string[]} Array of hex color codes
 */

const getColorTheme = (theme) =>{
  return colorThemes[theme];
};

export default getColorTheme;