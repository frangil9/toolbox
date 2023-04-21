function csvToJson(csv) {
  const lines = csv.split("\n");
  const delimeter = ",";

  const result = [];

  const headers = lines[0].split(delimeter);

  for (let j = 1; j < lines.length; j++) {
    const line = lines[j];
    const obj = {};
    const row = line.split(delimeter);
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      if (row[i]) {
        obj[header] = row[i];
      }
    }
    if (Object.values(obj).length === headers.length) {
      result.push(obj);
    }
  }
  return result;
}

module.exports = {
  csvToJson,
};
