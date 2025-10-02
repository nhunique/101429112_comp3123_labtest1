// Load modules
const fs = require("fs");
const path = require("path");

// Joins path with "Logs"
const logsDir = path.join(process.cwd(), "Logs");

// Function to remove logs directory and files
function removeLogs() {
  if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
      const filePath = path.join(logsDir, file);
      console.log("delete file...", file);
      fs.unlinkSync(filePath);
    });
    fs.rmdirSync(logsDir);
  } else {
    console.log("Logs directory does not exist.");
  }
}

// Function to add logs directory and files
function addLogs() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
  } else {
    console.log("Logs directory already exists.");
  }

  // Change path to Logs
  process.chdir(logsDir);

  // Create 10 log files
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file #${i}`);
    console.log(fileName);
  }
}

// CLI handling
const command = process.argv[2]; 

if (command === "add") {
  addLogs();
} else if (command === "remove") {
  removeLogs();
} else {
  console.log('Usage: node logs.js [add|remove]');
}
