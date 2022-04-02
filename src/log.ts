import { blue, red, bold } from "chalk"

export const logArray = (
  array: string[],
  noItemsPhrase: string,
  join: string
) => {
  array = array.filter((x) => x)
  if (array[0]) console.log(array.join(join))
  // if (array[0]) array.map((item) => console.log(item))
  else console.log(noItemsPhrase)
  console.log()
}

export const done = (msg) => bold.green("> ") + msg + "."
export const info = (msg) => blue.bold("> ") + msg

const error = (msg) => red.bold("> ") + msg

const quote = (msg) => bold.bgGrey(`"${msg}"`)

const treeStart = (i, length) => (i == length - 1 ? "└" : "├") + "─ "

export const deleted = (packageName, projectName) =>
  error(`Using of deleted ${quote(packageName)} in ${quote(projectName)}`)
export const wrongVersion = (
  project: string,
  pack: string,
  currentVersion: string,
  currectVersion: string
) =>
  error(
    `In ${quote(project)} ${quote(
      pack
    )}'s version is ${currentVersion} and should be ^${currectVersion}`
  )
export const depMark = (i, length, name, version) =>
  treeStart(i, length) + `${name}: ${version}`
export const usedInMark = (i, length, str) => treeStart(i, length) + str
export const infoLabelMark = (pack, version) =>
  info(`${quote(pack)}: ${version}`)
