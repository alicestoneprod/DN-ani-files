import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name: "dyaencwbz",
  api_key: "469337688271416",
  api_secret: "H7xLQaz7yG3-tr0aPdegX0HWZC4",
})

const files = fs.readdirSync("./files")

console.log(files)

const uploadFile = async () => {
  try {
    for (const file in files) {
      const result = await cloudinary.uploader
        .upload(`./files/${files[file]}`, {
          resource_type: "raw",
          public_id: `${files[file]}`,
        })
        .catch((e) => console.log(e))
      console.log(result)
      fs.unlinkSync(`./files/${files[file]}`)
    }
  } catch (e) {
    console.log(e)
  }
}

// const uploadFile = async () => {
//     const result = await cloudinary.uploader.upload(`./files/01.dds`, {
//                 resource_type: "raw",
//                 public_id: `01.dds`
//            })
// }

await uploadFile()
