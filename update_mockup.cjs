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

// Search for the SVG block starting with '<svg width="599"' and ending with '</svg>'
const regex = /<svg width=\\"599\\"[^]*?<\/svg>/g;
const match = fileContent.match(regex);

if (!match || match.length === 0) {
  console.error("Could not find the SVG string in transcript.jsonl. Make sure the last prompt contained the '<svg' tag.");
  process.exit(1);
}

// Get the latest SVG match from the logs
let svgContent = match[match.length - 1];

// Unescape JSON quotes and spacing characters
svgContent = svgContent.replace(/\\"/g, '"');
svgContent = svgContent.replace(/\\n/g, '\n');
svgContent = svgContent.replace(/\\r/g, '\r');
svgContent = svgContent.replace(/\\t/g, '\t');
svgContent = svgContent.replace(/\\\\/g, '\\');

// Add classes to make it responsive inside the mockup container
svgContent = svgContent.replace('<svg width="599" height="320" viewBox="0 0 599 320"', '<svg width="599" height="320" viewBox="0 0 599 320" className="w-full h-auto"');

// Read HeroSection.jsx
let heroContent = fs.readFileSync(heroPath, 'utf8');

// Target the placeholder SVG inside HeroSection.jsx
// It starts with <svg viewBox="0 0 900 540" and ends with </svg>
const svgPlaceholderRegex = /<svg viewBox="0 0 900 540"[\s\S]+?<\/svg>/;

if (!svgPlaceholderRegex.test(heroContent)) {
  console.error("Placeholder SVG not found in HeroSection.jsx. It may have already been replaced or modified.");
  process.exit(1);
}

// Replace the placeholder SVG with the new extracted SVG content
heroContent = heroContent.replace(svgPlaceholderRegex, svgContent);

// Write the updated file back to HeroSection.jsx
fs.writeFileSync(heroPath, heroContent, 'utf8');

console.log("SUCCESS: High-fidelity mockup SVG successfully integrated into HeroSection.jsx!");
