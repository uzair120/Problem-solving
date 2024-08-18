const fs = require("fs");

const delimiter = ",";
const convert = (fileData) => {
  const lines = fileData.split("\n");

  const headers = lines[0].split(delimiter);

  const data = {};

  for (let index = 0; index < headers.length; index++) {
    headers[index] = headers[index].trim();
    data[headers[index]] = [];
  }
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];

    console.log(i, row);
    let count = 0;
    flag = false;
    let entry = "";
    for (let j = 0; j < row.length; j++) {
      //  abc, "a4v,uy", oi
      const element = row[j];
      if (element == delimiter && !flag) {
        data[headers[count]].push(entry.trim());
        entry = "";
        count++;
        continue;
      }
      if (element == '"') {
        flag = !flag;
        continue;
      }
      entry = entry + element;
    }
    if (entry != "") {
      data[headers[count]].push(entry.trim());
    }
  }
  return JSON.stringify(data);
};

const fileData = fs.readFileSync("./file.csv", "utf8");
const json = convert(fileData);
fs.writeFileSync("MyJson.json", json);

console.log("JSON file created - Mission accomplished");
