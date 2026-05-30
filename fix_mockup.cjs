const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\8d68457f-94d1-4902-bcde-df5608bac934\\.system_generated\\logs\\transcript.jsonl';
const heroPath = path.join(__dirname, 'src', 'components', 'HeroSection.jsx');

if (!fs.existsSync(logPath)) {
  console.error("Transcript log file not found at " + logPath);
  process.exit(1);
}

if (!fs.existsSync(heroPath)) {
  console.error("HeroSection file not found at " + heroPath);
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');

// Match all SVG blocks in logs literally
const regex = /<svg width=\\"599\\"[^]*?<\/svg>/g;
const match = fileContent.match(regex);

if (!match || match.length === 0) {
  console.error("Could not find the SVG string in transcript.jsonl.");
  process.exit(1);
}

// match[0] is the user's original untruncated input
let svgContent = match[0];

// Unescape JSON quotes and spacing characters
svgContent = svgContent.replace(/\\"/g, '"');
svgContent = svgContent.replace(/\\n/g, '\n');
svgContent = svgContent.replace(/\\r/g, '\r');
svgContent = svgContent.replace(/\\t/g, '\t');
svgContent = svgContent.replace(/\\\\/g, '\\');

// Add classes to make it responsive inside the mockup container
svgContent = svgContent.replace('<svg width="599" height="320" viewBox="0 0 599 320"', '<svg width="599" height="320" viewBox="0 0 599 320" className="w-full h-auto"');

// Convert SVG attributes to JSX-compliant camelCase
let reactSvg = svgContent;

// 1. Convert style strings to JSX style objects
reactSvg = reactSvg.replace(/style="backdrop-filter:blur\(6px\);clip-path:url\(#bgblur_1_24_3467_clip_path\);height:100%;width:100%"/g, 'style={{ backdropFilter: "blur(6px)", clipPath: "url(#bgblur_1_24_3467_clip_path)", height: "100%", width: "100%" }}');
reactSvg = reactSvg.replace(/style="backdrop-filter:blur\(26\.9px\);clip-path:url\(#bgblur_2_24_3467_clip_path\);height:100%;width:100%"/g, 'style={{ backdropFilter: "blur(26.9px)", clipPath: "url(#bgblur_2_24_3467_clip_path)", height: "100%", width: "100%" }}');
reactSvg = reactSvg.replace(/style="backdrop-filter:blur\(26\.9px\);clip-path:url\(#bgblur_3_24_3467_clip_path\);height:100%;width:100%"/g, 'style={{ backdropFilter: "blur(26.9px)", clipPath: "url(#bgblur_3_24_3467_clip_path)", height: "100%", width: "100%" }}');
reactSvg = reactSvg.replace(/style="backdrop-filter:blur\(26\.9px\);clip-path:url\(#bgblur_5_24_3467_clip_path\);height:100%;width:100%"/g, 'style={{ backdropFilter: "blur(26.9px)", clipPath: "url(#bgblur_5_24_3467_clip_path)", height: "100%", width: "100%" }}');

// 2. Convert other attributes to camelCase
const attributeMap = {
  'fill-opacity=': 'fillOpacity=',
  'stroke-width=': 'strokeWidth=',
  'stroke-linecap=': 'strokeLinecap=',
  'stroke-linejoin=': 'strokeLinejoin=',
  'clip-path=': 'clipPath=',
  'fill-rule=': 'fillRule=',
  'clip-rule=': 'clipRule=',
  'shape-rendering=': 'shapeRendering=',
  'stop-color=': 'stopColor=',
  'stop-opacity=': 'stopOpacity=',
  'flood-color=': 'floodColor=',
  'flood-opacity=': 'floodOpacity=',
  'color-interpolation-filters=': 'colorInterpolationFilters=',
  'stroke-miterlimit=': 'strokeMiterlimit=',
  'stroke-dasharray=': 'strokeDasharray=',
  'xmlns:xlink=': 'xmlnsXlink=',
  'xlink:href=': 'xlinkHref='
};

for (const [key, value] of Object.entries(attributeMap)) {
  reactSvg = reactSvg.split(key).join(value);
}

// Read HeroSection.jsx
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Target the broken SVG and garbage block in HeroSection.jsx
// It starts with '<svg width="599"' and ends right before '{/* floating card samples */}'
const startIdx = heroContent.indexOf('<svg width="599"');
const floatingCardsIdx = heroContent.indexOf('{/* floating card samples */}');

if (startIdx === -1 || floatingCardsIdx === -1) {
  console.error("Could not find the SVG element or floating card samples to replace in HeroSection.jsx.");
  process.exit(1);
}

// Replace everything between startIdx and floatingCardsIdx with the clean, JSX-compliant SVG, closing mockup div, and clean spacing
const beforeSvg = heroContent.substring(0, startIdx);
const afterSvg = heroContent.substring(floatingCardsIdx);

heroContent = beforeSvg + reactSvg + '\n              </div>\n\n              ' + afterSvg;

// Write it back
fs.writeFileSync(heroPath, heroContent, 'utf8');

console.log("SUCCESS: Re-extracted original SVG, cleared out all garbage transcript lines, fixed all JSX compilation attributes, and successfully repaired HeroSection.jsx!");
