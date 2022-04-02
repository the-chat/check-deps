import * as fs from "fs"
import { resolve } from "path"

type PackageJSON = Record<"name" | "version", string> &
  Record<
    "dependencies" | "devDependencies" | "peerDependencies",
    Record<string, string>
  >

export const getPackageJSON = (path: string): PackageJSON => {
  const buffer = fs.readFileSync(resolve(path))
  const data = buffer.toString()
  const object = JSON.parse(data)

  return object
}
