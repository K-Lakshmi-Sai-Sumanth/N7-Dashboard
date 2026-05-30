const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\8d68457f-94d1-4902-bcde-df5608bac934\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(logPath)) {
  console.error("Log file not found");
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');

// Literally search for the SVG block starting with '<svg width="599"' and ending with '</svg>'
// Note: inside json, quotes will be escaped as \"
const regex = /<svg width=\\"599\\"[^]*?<\/svg>/g;
const match = fileContent.match(regex);

if (match && match.length > 0) {
  // Unescape the JSON string to get the actual clean SVG
  let svgContent = match[match.length - 1]; // Take the latest match
  svgContent = svgContent.replace(/\\"/g, '"');
  svgContent = svgContent.replace(/\\n/g, '\n');
  svgContent = svgContent.replace(/\\r/g, '\r');
  svgContent = svgContent.replace(/\\t/g, '\t');
  svgContent = svgContent.replace(/\\\\/g, '\\');
  
  fs.writeFileSync(path.join(__dirname, 'extracted_svg.txt'), svgContent);
  console.log("FOUND SVG LITERALLY!");
  console.log("Extracted SVG written to extracted_svg.txt successfully!");
  process.exit(0);
}

console.log("SVG not found literally in logs. Log length:", fileContent.length);
