
function starter() {

    let S = 0
    let N = 0
    let SN = 0
    COL = 0
    SAN = 0
    MEL = 0
    FLE = 0
    COLn = 0
    SANn = 0
    MELn = 0
    FLEn = 0


    temperamento = []
    naoTemp = []

    var checkRadio = document.querySelectorAll('input')

    for (let i = 0; i < 144; i++) {
        //  console.log(checkRadio[i])
        if (checkRadio[i].checked) {
            if (checkRadio[i].value == 'S') {
                S += 1
                temperamento.push(checkRadio[i].id)
                if (i == 1 || i == 5 || i == 8 || i == 15 || i == 16 || i == 19 || i == 27 || i == 21 || i == 33 || i == 40 || i == 41 || i == 47 || i == 48) {
                    COL += 1
                }
                if (i == 4 || i == 6 || i == 11 || i == 13 || i == 14 || i == 20 || i == 21 || i == 24 || i == 26 || i == 29 || i == 34 || i == 35 || i == 36 || i == 38 || i == 39 || i == 42 || i == 43 || i == 44 || i == 46) {
                    SAN += 1
                }
                if (i == 2 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12 || i == 13 || i == 17 || i == 18 || i == 20 || i == 22 || i == 24 || i == 25 || i == 28 || i == 30 || i == 31 || i == 37 || i == 47) {
                    MEL += 1
                }
                if (i == 9 || i == 23 || i == 34 || i == 35 || i == 45) {
                    FLE += 1
                }

            } else if (checkRadio[i].value == 'N') {
                N += 1
                naoTemp.push(checkRadio[i].id)
            } else {
                SN += 1
            }
        }
    }
    alert('O Total de SIM foi: ' + S + '\n O Total de NÃO foi: ' + N)
    alert('Lista SIM => ' + temperamento + '\n Lista NÃO => ' + naoTemp)
    alert('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)

}