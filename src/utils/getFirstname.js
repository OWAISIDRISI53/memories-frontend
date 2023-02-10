
export default function getFirstName(name) {
    const firstName = name.split(" ")[0]
    // const capitalName = name.charAt(0).toUpperCase() + firstName.slice(1)
    const capitalName = firstName.toUpperCase()
    return capitalName
}