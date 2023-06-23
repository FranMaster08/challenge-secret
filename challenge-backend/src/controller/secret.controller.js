import { secretFileService } from '../services/index.js'
export const SecretController = {
  getFile: async (req, res, next) => {
    try {
      const { fileName } = req.query
      let data = await secretFileService.getOne(fileName)
      data = await secretFileService.filterByCountFields(data, true)
      res.status(200).json({ ...data })
    } catch (error) {
      next(error)
    }
  },

  getAllFiles: async (req, res, next) => {
    try {
      const { files } = await secretFileService.getAll()
      const PromisesDocumentsByFiles = files.map((file) =>
        secretFileService.getOne(file)
      )
      const documentByFiles = await Promise.allSettled(
        PromisesDocumentsByFiles
      )
      const filter1 = secretFileService.filterByFullFilled(documentByFiles)
      const filter2 = await Promise.all(
        filter1.map((document) =>
          secretFileService.filterByCountFields(document)
        )
      );
      const result = secretFileService.filterByEmptyFile(filter2);
      res.status(200).json([...result]);
    } catch (error) {
      next(error)
    }
  }
}
