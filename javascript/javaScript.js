
function starter() {

    /* ===== INÍCIO ===== */
    // var matriz = [[], []]
    var checkRadio = document.querySelectorAll('input')
    let cr = 1

    let S = 0 
    N = 0
    SN = 0
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

    let validador = S + N + SN
    // console.log(`S = ${S}   N = ${N}   SN = ${SN}`)
    console.log(`validador vale: ${validador}`)
    if (validador != 4) {
        alert('Responda todas as Perguntas!!!')
        console.clear()
    } else {
        var grups = document.getElementsByClassName('tab-pane')

        for (i=0; i<5; i++){
            grups[i].classList.remove('active')
        }
        grups[5].classList.add('active')

        document.getElementById('back').disabled = true
        document.getElementById('star').disabled = true
        document.getElementById('next').disabled = true

        med -= SN
        console.log('O Total de SIM foi: ' + S + '\n O Total de NÃO foi: ' + N)
        console.log('Lista SIM => ' + temperamento + '\nLista NÃO => ' + naoTemp)
        console.log('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)
        console.log('Não Colerico = ' + nCOL + '\nNão Sanguíneo = ' + nSAN + '\nNão Melancólico = ' + nMEL + '\nNão Fleumático = ' + nFLE)
        console.log('Calcular médica em: ' + med)
    }

    /* ===== FIM ===== */
}


aba = 0
function avancar() {
    console.log("Click no AVANÇAR")

    var grupos = document.getElementsByClassName('tab-pane')


    if (aba == 0) {
        aba = 1
        grupos[0].classList.remove('active')
        grupos[1].classList.add('active')

        document.getElementById('back').disabled = false

    } else if (aba == 1) {
        aba = 2
        grupos[1].classList.remove('active')
        grupos[2].classList.add('active')
    } else if (aba == 2) {
        aba = 3
        grupos[2].classList.remove('active')
        grupos[3].classList.add('active')
    } else if (aba == 3) {
        aba = 4
        grupos[3].classList.remove('active')
        grupos[4].classList.add('active')

        document.getElementById('next').disabled = true
    }

}

function voltar() {
    console.log("Click no VOLTAR")
    var grupos = document.getElementsByClassName('tab-pane')

    if (aba == 4) {
        aba = 3
        grupos[4].classList.remove('active')
        grupos[3].classList.add('active')
    } else if (aba == 3) {
        aba = 2
        grupos[3].classList.remove('active')
        grupos[2].classList.add('active')
    } else if (aba == 2) {
        aba = 1
        grupos[2].classList.remove('active')
        grupos[1].classList.add('active')
    } else if (aba == 1) {
        aba = 0
        grupos[1].classList.remove('active')
        grupos[0].classList.add('active')

        document.getElementById('back').disabled = true
    }
}

function repetir() {
    $(location).attr('href', 'index.html')
}