export default async function genColor() {
    const color = await fetch("/api", {
        method: "GET"
    })
    .then((res) => res.json())
    return color
}