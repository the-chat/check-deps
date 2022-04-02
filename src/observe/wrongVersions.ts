import { done, logArray, wrongVersion } from "../log"
import { pkgs } from "../get"

const getPkgData = (pkgName) => pkgs.filter(([name]) => name == pkgName)[0]?.[1]

const wrongVersions = pkgs.flatMap(([pack, { deps }]) =>
  deps.map(([dep, ver]) => {
    const pkg = getPkgData(dep)
    if (pkg && pkg.version != ver.slice(1))
      return wrongVersion(pack, dep, ver.slice(1), pkg.version)
  })
)

logArray(wrongVersions, done("No using wrong versions of packages"), "\n")
