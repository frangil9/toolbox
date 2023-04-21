const { getFilesApi, getFileByNameApi } = require("../api/file");
const { csvToJson } = require("../utils/utils");

const getFilesService = async () => {
  return getFilesApi();
};

const getFileByNameService = async (name) => {
  let fields = [];
  try {
    const csv = await getFileByNameApi(name);
    const jsonArray = csvToJson(csv);
    const map = new Map();
    for (const item of jsonArray) {
      if (!map.has(item.file)) {
        map.set(item.file, [
          { text: item.text, number: item.number, hex: item.hex },
        ]);
      } else {
        map.set(item.file, [
          ...map.get(item.file),
          { text: item.text, number: item.number, hex: item.hex },
        ]);
      }
    }
    for (const [key, value] of map) {
      fields.push({ file: key, lines: value });
    }
  } catch (error) {
    throw error;
  }
  return fields;
};

module.exports = {
  getFilesService,
  getFileByNameService,
};
