const {
  getFilesService,
  getFileByNameService,
} = require("../services/file.service");
// const { getFileByNameApi } = require("../api/file");
// const { csvToJson } = require("../utils/utils");
const logger = require("../utils/logger");

const getFileList = async (req, res) => {
  const { files } = await getFilesService();
  return res.status(200).send({ files });
};

const getFilesContent = async (req, res) => {
  const name = req.query.fileName;
  let fields = [];
  if (name) {
    try {
      fields = await getFileByNameService(name);
    } catch (error) {
      logger.warn(`Error al conectar con API Externa: ${error.message}`);
      const { data, status } = error.response;
      return res.status(status).send(data);
    }
    return res.status(200).send(fields);
  }
  const { files } = await getFilesService();
  for (const file of files) {
    try {
      const filesArray = await getFileByNameService(file);
      fields = [...fields, ...filesArray];
    } catch (error) {
      logger.warn(
        `Error al procesar archivo ${file} con API Externa: ${error.message}`
      );
    }
  }
  return res.status(200).send(fields);
};

const getFilesContentByName = async (req, res) => {
  const name = req.params.name;
  let fields = [];
  try {
    // const csv = await getFileByNameApi(name);
    // const jsonArray = csvToJson(csv);
    // const map = new Map();
    // for (const item of jsonArray) {
    //   if (!map.has(item.file)) {
    //     map.set(item.file, [
    //       { text: item.text, number: item.number, hex: item.hex },
    //     ]);
    //   } else {
    //     map.set(item.file, [
    //       ...map.get(item.file),
    //       { text: item.text, number: item.number, hex: item.hex },
    //     ]);
    //   }
    // }
    // for (const [key, value] of map) {
    //   fields.push({ file: key, lines: value });
    // }
    fields = await getFileByNameService(name);
  } catch (error) {
    logger.warn(`Error al conectar con API Externa: ${error.message}`);
    const { data, status } = error.response;
    return res.status(status).send(data);
  }
  return res.status(200).send(fields);
};

module.exports = {
  getFileList,
  getFilesContent,
  getFilesContentByName,
};
