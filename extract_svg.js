const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\8d68457f-94d1-4902-bcde-df5608bac934\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(logPath)) {
  console.error("Log file not found");
  process.exit(1);
}

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

for (const line of lines) {
  if (!line.trim()) continue;
  try {
    const parsed = JSON.parse(line);
    // Find the step where user requested the SVG replacement
    if (parsed.content && parsed.content.includes('<svg width="599"')) {
      // Find the SVG part
      const svgMatch = parsed.content.match(/<svg[\s\S]+<\/svg>/);
      if (svgMatch) {
        console.log("FOUND SVG");
        fs.writeFileSync(path.join(__dirname, 'extracted_svg.txt'), svgMatch[0]);
        console.log("Extracted SVG written to extracted_svg.txt successfully!");
        process.exit(0);
      }
    }
  } catch (e) {
    // Ignore invalid JSON lines
  }
}

console.log("SVG not found in logs");
