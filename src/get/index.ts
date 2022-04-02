import { readdirSync } from "fs"
import { join } from "path"
import { files } from "./files"
import { plusPkg } from "./plusPkg"

export type Pkg = [string, { version: string; deps: [string, string][] }]
export type Pkgs = Pkg[]

// we using flat map cuz we should observe paths with "*" end
export const pkgs: Pkgs = files.flatMap<Pkg>((filePath) => {
  const isRoot = filePath.endsWith("*") // file path is dir (not project)?

  if (isRoot) {
    const filePathWithoutStar = filePath.slice(0, -1)

    const projects = readdirSync(filePathWithoutStar)

    return projects.map((projectName) =>
      plusPkg(join(filePathWithoutStar, projectName, "package.json"))
    )
  }

  // we using brackets cuz we using flat map
  return [plusPkg(join(filePath, "package.json"))]
})
