import { logArray, deleted, done } from "../log"
import { pkgs } from "../get"

const getPkgData = (pkgName) => pkgs.filter(([name]) => name == pkgName)[0]?.[1]

const deletedPkgs = pkgs.flatMap(([pack, { deps }]) =>
  deps.map(([dep]) => {
    const pkg = getPkgData(dep)
    if (!pkg) return deleted(dep, pack)
  })
)

logArray(deletedPkgs, done("No using of deleted packages"), "\n")
