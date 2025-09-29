const fs = require('fs');
const path = require('path');

// Simple SVG placeholder generator
function createSvgPlaceholder(width, height, text, bgColor = '#4f46e5', textColor = '#ffffff') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

const publicDir = path.join(__dirname, '../public');

// Create placeholder images
const placeholders = [
  { name: 'bytedance-logo.png', text: 'ByteDance', bgColor: '#000000' },
  { name: 'chatbot-platform.png', text: 'AI Chatbot', bgColor: '#059669' },
  { name: 'blockchain-analytics.png', text: 'Blockchain', bgColor: '#7c3aed' },
  { name: 'stockradar-dashboard.png', text: 'Dashboard', bgColor: '#dc2626' },
  { name: 'stockradar-backtesting.png', text: 'Backtesting', bgColor: '#dc2626' },
  { name: 'myredis-architecture.png', text: 'Architecture', bgColor: '#ea580c' },
  { name: 'myredis-benchmark.png', text: 'Benchmark', bgColor: '#ea580c' },
  { name: 'chatbot-admin.png', text: 'Admin', bgColor: '#059669' },
  { name: 'chatbot-training.png', text: 'Training', bgColor: '#059669' },
  { name: 'chatbot-integration.png', text: 'API', bgColor: '#059669' },
  { name: 'blockchain-overview.png', text: 'Overview', bgColor: '#7c3aed' },
  { name: 'blockchain-protocols.png', text: 'Protocols', bgColor: '#7c3aed' }
];

placeholders.forEach(({ name, text, bgColor }) => {
  const svg = createSvgPlaceholder(600, 400, text, bgColor);
  const filePath = path.join(publicDir, name);

  // Convert SVG to PNG is complex, so we'll just create SVG files for now
  const svgName = name.replace('.png', '.svg');
  const svgPath = path.join(publicDir, svgName);

  try {
    fs.writeFileSync(svgPath, svg);
    console.log(`Created placeholder: ${svgName}`);
  } catch (error) {
    console.error(`Error creating ${svgName}:`, error.message);
  }
});

console.log('Placeholder generation complete!');