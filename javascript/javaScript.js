
function carregandoPagina() {
    document.getElementById('back').disabled = true
}

function starter() {

    /* ===== INÍCIO ===== */
    // var matriz = [[], []]
    var checkRadio = document.querySelectorAll('input')
    let cr = 1

    S = 0
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

    validar49e50()
    // alert(`Reprovação é igual a: ${reprovado}`)
    const49e50()
    resultadoFinal()
    let validador = S + N + SN
    // console.log(`S = ${S}   N = ${N}   SN = ${SN}`)

    // console.log(`validador vale: ${validador}`)
    if (validador < 2) {
        alert('Responda todas as Perguntas!!!')
        console.clear()
    } else if (reprovado == true){
        alert('Nas questões 49 e 50 tem que escolher: \nNo mínimo 1 alternativa e no máximo 2!')

        var grups = document.getElementsByClassName('tab-pane')
        for (i = 0; i < 7; i++) {
            grups[i].classList.remove('active')
        }
        grups[5].classList.add('active')
        console.clear()

    } else {
        var grups = document.getElementsByClassName('tab-pane')

        for (i = 0; i < 7; i++) {
            grups[i].classList.remove('active')
        }
        grups[6].classList.add('active')

        document.getElementById('back').disabled = true
        document.getElementById('star').disabled = true
        document.getElementById('next').disabled = true

        // med -= SN
        console.log('O Total de SIM foi: ' + S + '\nO Total de NÃO foi: ' + N)
        console.log('Lista SIM => ' + temperamento + '\nLista NÃO => ' + naoTemp)
        console.log('Colerico = ' + COL + '\nSanguíneo = ' + SAN + '\nMelancólico = ' + MEL + '\nFleumático = ' + FLE)
        console.log('Não Colerico = ' + nCOL + '\nNão Sanguíneo = ' + nSAN + '\nNão Melancólico = ' + nMEL + '\nNão Fleumático = ' + nFLE)
        // console.log('Calcular médica em: ' + med)
    }

    /* ===== FIM ===== */
}

aba = 0
function avancar() {
    // console.log("Click no AVANÇAR")

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
    } else if (aba == 4) {
        aba = 5
        grupos[4].classList.remove('active')
        grupos[5].classList.add('active')

        document.getElementById('next').disabled = true
    }

}

function voltar() {
    // console.log("Click no VOLTAR")
    var grupos = document.getElementsByClassName('tab-pane')

    if (aba == 5) {
        aba = 4
        grupos[5].classList.remove('active')
        grupos[4].classList.add('active')

        document.getElementById('next').disabled = false
    }
    else if (aba == 4) {
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

function validar49e50() {
    reprovado = false
    let ckb49 = document.getElementsByClassName('49')
    let ckb50 = document.getElementsByClassName('50')
    var m49 = 0
    var m50 = 0

    for (i =0; i < ckb49.length; i++){
        if (ckb49[i].checked) {
            console.log("Pergunta 49: "+ckb49[i].value +" Marcado")
            m49++
        }
    }

    for (i =0; i < ckb50.length; i++){
        if (ckb50[i].checked) {
            console.log("Pergunta 50: "+ckb50[i].value +" Marcado")
            m50++
        }
    }
    // console.log(m49)
    // console.log(m50)

    if (m49 > 2 || m49 < 1 || m50 > 2 || m50 < 1){
        reprovado = true
    }
    // console.log(ckb.length)
}

function const49e50(){

    let ckbox49 = document.getElementsByClassName('49')
    let ckbox50 = document.getElementsByClassName('50')
    s49 = 0
    s50 = 0 

    /* ===================================== */
    /* ================ SIM ================ */
    /* ===================================== */
    for (i =0; i < ckbox49.length; i++){
        if (ckbox49[i].checked) {
            if (ckbox50[i].value == 'A'){
                s49++
                COL++
                // alert('49 Colérico')
            }
            if (ckbox50[i].value == 'B'){
                s49++
                FLE++
                // alert('49 Fleumático')
            }
            if (ckbox50[i].value == 'C'){
                s49++
                MEL++
                // alert('49 Melancólico')
            }
            if (ckbox50[i].value == 'D'){
                s49++
                SAN++
                // alert('49 Sanguíneo')
            }
        }
    }

    for (i =0; i < ckbox50.length; i++){
        if (ckbox50[i].checked) {
            if (ckbox49[i].value == 'A'){
                s50++
                FLE++
                // alert('50 Fleumático')
            }
            if (ckbox49[i].value == 'B'){
                s50++
                MEL++
                // alert('50 Melancólico')
            }
            if (ckbox49[i].value == 'C'){
                s50++
                COL++
                // alert('50 Colérico')
            }
            if (ckbox49[i].value == 'D'){
                s50++
                SAN++
                // alert('50 Sanguíneo')
            }
        }
    }

    /* ===================================== */
    /* ================ NÃO ================ */
    /* ===================================== */

    for (i =0; i < ckbox49.length; i++){
        if (!ckbox49[i].checked) {
            if (ckbox50[i].value == 'A'){
                nCOL++
                // alert('49 Colérico')
            }
            if (ckbox50[i].value == 'B'){
                nFLE++
                // alert('49 Fleumático')
            }
            if (ckbox50[i].value == 'C'){
                nMEL++
                // alert('49 Melancólico')
            }
            if (ckbox50[i].value == 'D'){
                nSAN++
                // alert('49 Sanguíneo')
            }
        }
    }

    for (i =0; i < ckbox50.length; i++){
        if (!ckbox50[i].checked) {
            if (ckbox49[i].value == 'A'){
                nFLE++
                // alert('50 Fleumático')
            }
            if (ckbox49[i].value == 'B'){
                nMEL++
                // alert('50 Melancólico')
            }
            if (ckbox49[i].value == 'C'){
                nCOL++
                // alert('50 Colérico')
            }
            if (ckbox49[i].value == 'D'){
                nSAN++
                // alert('50 Sanguíneo')
            }
        }
    }
}

function resultadoFinal(){

    var resultadoCOL = COL / S * 100 
    var resultadoSAN = SAN / S * 100
    var resultadoMEL = MEL / S * 100
    var resultadoFLE = FLE / S * 100

    var resultadonCOL = nCOL / N * 100
    var resultadonSAN = nSAN / N * 100
    var resultadonMEL = nMEL / N * 100
    var resultadonFLE = nFLE / N * 100
    
    console.log(`COL ${resultadoCOL.toFixed(2)}%
            \nSAN ${resultadoSAN.toFixed(2)}%
            \nMEL ${resultadoMEL.toFixed(2)}%
            \nFLE ${resultadoFLE.toFixed(2)}%
            \n\nnCOL ${resultadonCOL.toFixed(2)}%
            \nnSAN ${resultadonSAN.toFixed(2)}%
            \nnMEL ${resultadonMEL.toFixed(2)}%
            \nnFLE ${resultadonFLE.toFixed(2)}%
    `)

    document.getElementById('smyBarCOL').innerHTML = `${resultadoCOL.toFixed(2)}%`
    document.getElementById('smyBarSAN').innerHTML = `${resultadoSAN.toFixed(2)}%`
    document.getElementById('smyBarMEL').innerHTML = `${resultadoMEL.toFixed(2)}%`
    document.getElementById('smyBarFLE').innerHTML = `${resultadoFLE.toFixed(2)}%`

    document.getElementById('nmyBarCOL').innerHTML = `${resultadonCOL.toFixed(2)}%`
    document.getElementById('nmyBarSAN').innerHTML = `${resultadonSAN.toFixed(2)}%`
    document.getElementById('nmyBarMEL').innerHTML = `${resultadonMEL.toFixed(2)}%`
    document.getElementById('nmyBarFLE').innerHTML = `${resultadonFLE.toFixed(2)}%`
        // let progress = document.getElementsByClassName('myBar')
    // let progress = $('.myBar')



    let simCOL = $('#smyBarCOL')
    // console.log(simCOL)

    simCOL.css({
        "width":`${resultadoCOL.toFixed(2)}%`
    })

    let simSAN = $('#smyBarSAN')
    // console.log(simSAN)
    simSAN.css({
        "width":`${resultadoSAN.toFixed(2)}%`
    })
    
    let simMEL = $('#smyBarMEL')
    // console.log(simMEL)
    simMEL.css({
        "width":`${resultadoMEL.toFixed(2)}%`
    })
    
    let simFLE = $('#smyBarFLE')
    // console.log(simFLE)
    simFLE.css({
        "width":`${resultadoFLE.toFixed(2)}%`
    })



    let naoCOL = $('#nmyBarCOL')
    // console.log(naoCOL)
    naoCOL.css({
        "width":`${resultadonCOL.toFixed(2)}%`
    })
    
    let naoSAN = $('#nmyBarSAN')
    // console.log(naoSAN)
    naoSAN.css({
        "width":`${resultadonSAN.toFixed(2)}%`
    })
    
    let naoMEL = $('#nmyBarMEL')
    // console.log(naoMEL)
    naoMEL.css({
        "width":`${resultadonMEL.toFixed(2)}%`
    })
    
    let naoFLE = $('#nmyBarFLE')
    // console.log(naoFLE)
    naoFLE.css({
        "width":`${resultadonFLE.toFixed(2)}%`
    })



}