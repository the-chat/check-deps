import { depMark, info, infoLabelMark, logArray, usedInMark } from "../log"
import { pkgs } from "../get"

const versionMsgs = pkgs.map(([pack, { version, deps }]) => {
  const label = infoLabelMark(pack, version)

  const usedIn = pkgs
    .flatMap(([name, { deps }]) =>
      deps.filter(([dep]) => dep == pack).map(() => `Used in ${name}`)
    )
    .map((str, i, { length }) => usedInMark(i, length, str))
    .join("\n")

  const depsList = deps
    .map(([name, version], i, { length }) => depMark(i, length, name, version))
    .join("\n")

  return [label, usedIn, depsList].filter((x) => x).join("\n")
})

logArray(versionMsgs, info("No packages"), "\n\n")
