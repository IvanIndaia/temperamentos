
function starter() {

    let S = 0
    let N = 0
    let SN = 0
    COL = 0
    SAN = 0
    MEL = 0
    FLE = 0
    nCOL = 0
    nSAN = 0
    nMEL = 0
    nFLE = 0
    med = 48

    temperamento = []
    naoTemp = []

    var checkRadio = document.querySelectorAll('input')


    for (let i = 0; i <= 48; i++) {
        // for (let = 1j; j )
        //  console.log(checkRadio[i])
        if (checkRadio[i].checked) {
            console.log('Contagem ' + i + ' entrou no CHECK.')
            if (checkRadio[i].value == 'S') {
                console.log('Contagem ' + i + ' entrou no S.')
                S += 1
                temperamento.push(checkRadio[i].id)
                if (i == 1 || i == 5 || i == 8 || i == 15 || i == 16 || i == 19 || i == 27 || i == 21 || i == 33 || i == 40 || i == 41 || i == 47 || i == 48) {
                    if (i == 5 || i == 8 || i == 47) {
                        COL += 0.5
                        console.log('====> Somando 0.5 na Contagem: ' + i + ' do Colérico')
                    } else {
                        COL += 1
                        console.log('====> Somando 1 na Contagem: ' + i + ' do Colérico')
                    }
                }
                if (i == 4 || i == 6 || i == 11 || i == 13 || i == 14 || i == 20 || i == 21 || i == 24 || i == 26 || i == 29 || i == 34 || i == 35 || i == 36 || i == 38 || i == 39 || i == 42 || i == 43 || i == 44 || i == 46) {
                    if (i == 13 || i == 20 || i == 24 || i == 34 || i == 35) {
                        SAN += 0.5
                        console.log('====> Somando 0.5 na Contagem: ' + i + ' do Sanguíneo')
                    } else {
                        SAN += 1
                        console.log('====> Somando 1 na Contagem: ' + i + ' do Sanguíneo')
                    }
                }
                if (i == 2 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12 || i == 13 || i == 17 || i == 18 || i == 20 || i == 22 || i == 24 || i == 25 || i == 28 || i == 30 || i == 31 || i == 37 || i == 47) {
                    if (i == 5 || i == 8 || i == 13 || i == 20 || i == 24 || i == 47) {
                        MEL += 0.5
                        console.log('====> Somando 0.5 na Contagem: ' + i + ' do Melancólico')
                    } else {
                        MEL += 1
                        console.log('====> Somando 1 na Contagem: ' + i + ' do Melancólico')
                    }
                }
                if (i == 9 || i == 23 || i == 34 || i == 35 || i == 45) {
                    if (i == 34 || i == 35) {
                        FLE += 0.5
                        console.log('====> Somando 0.5 na Contagem: ' + i + ' do Fleumático')
                    } else {
                        FLE += 1
                        console.log('====> Somando 1 na Contagem: ' + i + ' do Fleumático')
                    }
                }
            } else if (checkRadio[i].value == 'N') {
                N += 1
                naoTemp.push(checkRadio[i].id)
                if (i == 1 || i == 5 || i == 8 || i == 15 || i == 16 || i == 19 || i == 27 || i == 21 || i == 33 || i == 40 || i == 41 || i == 47 || i == 48) {
                    if (i == 5 || i == 8 || i == 47) {
                        nCOL += 0.5
                    } else {
                        nCOL += 1
                    }
                }
                if (i == 4 || i == 6 || i == 11 || i == 13 || i == 14 || i == 20 || i == 21 || i == 24 || i == 26 || i == 29 || i == 34 || i == 35 || i == 36 || i == 38 || i == 39 || i == 42 || i == 43 || i == 44 || i == 46) {
                    if (i == 13 || i == 20 || i == 24 || i == 34 || i == 35) {
                        nSAN += 0.5
                    } else {
                        nSAN += 1
                    }
                }
                if (i == 2 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12 || i == 13 || i == 17 || i == 18 || i == 20 || i == 22 || i == 24 || i == 25 || i == 28 || i == 30 || i == 31 || i == 37 || i == 47) {
                    if (i == 5 || i == 8 || i == 13 || i == 20 || i == 24 || i == 47) {
                        nMEL += 0.5
                    } else {
                        nMEL += 1
                    }
                }
                if (i == 9 || i == 23 || i == 34 || i == 35 || i == 45) {
                    if (i == 34 || i == 35) {
                        nFLE += 0.5
                    } else {
                        nFLE += 1
                    }
                }
            } else {
                SN += 1
            }
        } else {
            alert('Favor marcar a questão: ' + i)
            break
        }
    }
    med -= SN
    console.log('O Total de SIM foi: ' + S + '\n O Total de NÃO foi: ' + N)
    console.log('Lista SIM => ' + temperamento + '\nLista NÃO => ' + naoTemp)
    console.log('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)
    console.log('Não Colerico = ' + nCOL + '\nNão Sanguíneo = ' + nSAN + '\nNão Melancólico = ' + nMEL + '\nNão Fleumático = ' + nFLE)
    console.log('Calcular médica em: ' + med)

}



function teste() {

    /* ===== INÍCIO ===== */
    var matriz = [[], []]
    var checkRadio = document.querySelectorAll('input')
    let cr = 1

    let S = 0
    let N = 0
    let SN = 0
    COL = 0
    SAN = 0
    MEL = 0
    FLE = 0
    nCOL = 0
    nSAN = 0
    nMEL = 0
    nFLE = 0
    med = 48

    temperamento = []
    naoTemp = []

    // for (let lin = 1; lin <= 48; lin++) {
    //     for (let col = 1; col <= 3; col++) {
    //         // console.log('CHECADO!!!')
    //         matriz[[lin][col]] = checkRadio[cr].checked
    //         console.log('Matriz [' + lin + ']' + '[' + col + '] POS: ' + lin + '  = ' + matriz[[lin][col]])
    //         cr++
    //     }
        
    // }
    for (let lin = 1; lin <= 48; lin++) {
        for (let col = 1; col <= 3; col++) {
            if (checkRadio[cr].checked) {
                // console.log('CHECADO!!!')
                // matriz[[lin][col]] = checkRadio[cr].value
                // console.log('Matriz [' + lin + ']' + '[' + col + '] POS: ' + lin + '  = ' + matriz[[lin][col]])
                if (checkRadio[cr].value == 'S') {
                    console.log('Contagem (' + cr + ') entrou no S.')
                    S += 1
                    temperamento.push(checkRadio[cr].class)
                    if (cr == 1 || cr == 5 || cr == 8 || cr == 15 || cr == 16 || cr == 19 || cr == 27 || cr == 21 || cr == 33 || cr == 40 || cr == 41 || cr == 47 || cr == 48) {
                        if (cr == 5 || cr == 8 || cr == 47) {
                            COL += 0.5
                            console.log('====> Somando 0.5 na Contagem: ' + cr + ' do Colérico')
                        } else {
                            COL += 1
                            console.log('====> Somando 1 na Contagem: ' + cr + ' do Colérico')
                        }
                    }
                    if (cr == 4 || cr == 6 || cr == 11 || cr == 13 || cr == 14 || cr == 20 || cr == 21 || cr == 24 || cr == 26 || cr == 29 || cr == 34 || cr == 35 || cr == 36 || cr == 38 || cr == 39 || cr == 42 || cr == 43 || cr == 44 || cr == 46) {
                        if (cr == 13 || cr == 20 || cr == 24 || cr == 34 || cr == 35) {
                            SAN += 0.5
                            console.log('====> Somando 0.5 na Contagem: ' + cr + ' do Sanguíneo')
                        } else {
                            SAN += 1
                            console.log('====> Somando 1 na Contagem: ' + cr + ' do Sanguíneo')
                        }
                    }
                    if (cr == 2 || cr == 3 || cr == 5 || cr == 7 || cr == 8 || cr == 10 || cr == 12 || cr == 13 || cr == 17 || cr == 18 || cr == 20 || cr == 22 || cr == 24 || cr == 25 || cr == 28 || cr == 30 || cr == 31 || cr == 37 || cr == 47) {
                        if (cr == 5 || cr == 8 || cr == 13 || cr == 20 || cr == 24 || cr == 47) {
                            MEL += 0.5
                            console.log('====> Somando 0.5 na Contagem: ' + cr + ' do Melancólico')
                        } else {
                            MEL += 1
                            console.log('====> Somando 1 na Contagem: ' + cr + ' do Melancólico')
                        }
                    }
                    if (cr == 9 || cr == 23 || cr == 34 || cr == 35 || cr == 45) {
                        if (cr == 34 || cr == 35) {
                            FLE += 0.5
                            console.log('====> Somando 0.5 na Contagem: ' + cr + ' do Fleumático')
                        } else {
                            FLE += 1
                            console.log('====> Somando 1 na Contagem: ' + cr + ' do Fleumático')
                        }
                    }
                } else if (checkRadio[cr].value == 'N') {

                }

            } else {

            }
        }
        cr++
    }
    med -= SN
    console.log('O Total de SIM foi: ' + S + '\n O Total de NÃO foi: ' + N)
    console.log('Lista SIM => ' + temperamento + '\nLista NÃO => ' + naoTemp)
    console.log('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)
    console.log('Não Colerico = ' + nCOL + '\nNão Sanguíneo = ' + nSAN + '\nNão Melancólico = ' + nMEL + '\nNão Fleumático = ' + nFLE)
    console.log('Calcular médica em: ' + med)


    

    /* ===== FIM ===== */
}