import path from "path"
import fs from "fs"
import sass from "sass"
import { optimize } from "svgo"

const types = sass.types
const basePath = "./assets/"

export default {
  "svg($svgFileName)": function (svgFileName) {
    const filename = path.resolve(basePath, svgFileName.getValue())

    let svgContent = fs.readFileSync(filename, "utf8")
    svgContent = optimize(svgContent, { multipass: true, datauri: "enc" })

    return new types.String(`url("${svgContent.data}")`)
  }
}
