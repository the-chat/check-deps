import { getPackageJSON } from "./getPackageJSON"
import { tag } from "../config"
import { Pkg } from "."

export const plusPkg = (path: string): Pkg => {
  const { name, version, dependencies, devDependencies, peerDependencies } =
    getPackageJSON(path)

  const allDeps = Object.assign(
    {}, // all dependencies may undefined
    peerDependencies,
    devDependencies,
    dependencies
  )

  const allDepsEntries = Object.entries(allDeps)

  const deps = allDepsEntries
    // take only those that include tag
    .filter(([depName]) => depName.includes(tag))
  // convert back to object

  return [name, { version, deps }]
}
