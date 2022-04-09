const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmete", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship =>{
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlataform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highLightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\n\nPlataforma com processo de engate: " + (ongoingHitchPlataform + 1)
message += "\n\nEspaçonaves em destaque: " + highLightedSpaceships.join(", ")

alert(message)