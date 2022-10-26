
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

    alerta = true
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

    /*
        Lin = Perguntas
        CR = Vetor
    */
    for (let lin = 1; lin <= 48; lin++) {
        for (let col = 1; col <= 3; col++) {
            if (checkRadio[cr].checked) {
                // console.log('CHECADO!!!')
                // matriz[[lin][col]] = checkRadio[cr].value
                // console.log('Matriz [' + lin + ']' + '[' + col + '] POS: ' + lin + '  = ' + matriz[[lin][col]])

                /*  ===============================================
                    =============== ENTRANDO NO SIM ===============
                    =============================================== 
                */
                if (checkRadio[cr].value == 'S') {
                    console.log('Pergunta (' + lin + ') entrou no S.')
                    S++
                    temperamento.push(lin)
                    if (lin == 1 || lin == 5 || lin == 8 || lin == 15 || lin == 16 || lin == 19 || lin == 27 || lin == 21 || lin == 33 || lin == 40 || lin == 41 || lin == 47 || lin == 48) {
                        if (lin == 5 || lin == 8 || lin == 47) {
                            COL += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Colérico')
                        } else {
                            COL++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Colérico')
                        }
                    }
                    if (lin == 4 || lin == 6 || lin == 11 || lin == 13 || lin == 14 || lin == 20 || lin == 21 || lin == 24 || lin == 26 || lin == 29 || lin == 34 || lin == 35 || lin == 36 || lin == 38 || lin == 39 || lin == 42 || lin == 43 || lin == 44 || lin == 46) {
                        if (lin == 13 || lin == 20 || lin == 24 || lin == 34 || lin == 35) {
                            SAN += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Sanguíneo')
                        } else {
                            SAN++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Sanguíneo')
                        }
                    }
                    if (lin == 2 || lin == 3 || lin == 5 || lin == 7 || lin == 8 || lin == 10 || lin == 12 || lin == 13 || lin == 17 || lin == 18 || lin == 20 || lin == 22 || lin == 24 || lin == 25 || lin == 28 || lin == 30 || lin == 31 || lin == 37 || lin == 47) {
                        if (lin == 5 || lin == 8 || lin == 13 || lin == 20 || lin == 24 || lin == 47) {
                            MEL += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Melancólico')
                        } else {
                            MEL++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Melancólico')
                        }
                    }
                    if (lin == 9 || lin == 23 || lin == 34 || lin == 35 || lin == 45) {
                        if (lin == 34 || lin == 35) {
                            FLE += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Fleumático')
                        } else {
                            FLE++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Fleumático')
                        }
                    }
                    /*  ===============================================
                        =============== ENTRANDO NO NÃO ===============
                        =============================================== 
                    */
                } else if (checkRadio[cr].value == 'N') {
                    console.log('Pergunta (' + lin + ') entrou no N.')
                    N++
                    naoTemp.push(lin)
                    if (lin == 1 || lin == 5 || lin == 8 || lin == 15 || lin == 16 || lin == 19 || lin == 27 || lin == 21 || lin == 33 || lin == 40 || lin == 41 || lin == 47 || lin == 48) {
                        if (lin == 5 || lin == 8 || lin == 47) {
                            nCOL += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Colérico')
                        } else {
                            nCOL++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Colérico')
                        }
                    }
                    if (lin == 4 || lin == 6 || lin == 11 || lin == 13 || lin == 14 || lin == 20 || lin == 21 || lin == 24 || lin == 26 || lin == 29 || lin == 34 || lin == 35 || lin == 36 || lin == 38 || lin == 39 || lin == 42 || lin == 43 || lin == 44 || lin == 46) {
                        if (lin == 13 || lin == 20 || lin == 24 || lin == 34 || lin == 35) {
                            nSAN += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Sanguíneo')
                        } else {
                            nSAN++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Sanguíneo')
                        }
                    }
                    if (lin == 2 || lin == 3 || lin == 5 || lin == 7 || lin == 8 || lin == 10 || lin == 12 || lin == 13 || lin == 17 || lin == 18 || lin == 20 || lin == 22 || lin == 24 || lin == 25 || lin == 28 || lin == 30 || lin == 31 || lin == 37 || lin == 47) {
                        if (lin == 5 || lin == 8 || lin == 13 || lin == 20 || lin == 24 || lin == 47) {
                            nMEL += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Melancólico')
                        } else {
                            nMEL++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Melancólico')
                        }
                    }
                    if (lin == 9 || lin == 23 || lin == 34 || lin == 35 || lin == 45) {
                        if (lin == 34 || lin == 35) {
                            nFLE += 0.5
                            // console.log('====> Somando 0.5 na Pergunta: ' + lin + ' do Fleumático')
                        } else {
                            nFLE++
                            // console.log('====> Somando 1 na Pergunta: ' + lin + ' do Fleumático')
                        }
                    }
                    /* =============== ENTRANDO NO NÃO SEI ===============*/
                } else {
                    SN++
                }

            } else {

            }
            cr++
        }
    }

    validador = S + N + SN
    if (validador != 48) {
        alert('Responda todas as Perguntas!!!')
        console.clear()
    } else {
        med -= SN
        console.log('O Total de SIM foi: ' + S + '\n O Total de NÃO foi: ' + N)
        console.log('Lista SIM => ' + temperamento + '\nLista NÃO => ' + naoTemp)
        console.log('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)
        console.log('Não Colerico = ' + nCOL + '\nNão Sanguíneo = ' + nSAN + '\nNão Melancólico = ' + nMEL + '\nNão Fleumático = ' + nFLE)
        console.log('Calcular médica em: ' + med)
    }

    /* ===== FIM ===== */
}