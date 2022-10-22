
let S = 0
let N = 0
let SN = 0

function start() {

    let S = 0
    let N = 0
    let SN = 0

    temperamento = []

    var checkRadio = document.querySelectorAll(
        'input')

    for (let i = 0; i < 30; i++) {
        // console.log(checkRadio[i])


        if (checkRadio[i].checked) {

            if (checkRadio[i].value == 'S') {
                S += 1
                temperamento.push(checkRadio[i].id)
                // console.log(checkRadio[i].id)
            }
            // console.log("SELECIONADO: "+checkRadio[i].value)
        }

    }
    alert('O Total de SIM foi: ' + S)
    alert('Lista => '+ temperamento)


    // let q1 = document.getElementById("q1a")
    // let q2 = document.getElementById("q2a")
    // let q3 = document.getElementById("q3a")
    // let q4 = document.getElementById("q4a")
    // let q5 = document.getElementById("q5a")
    // let q6 = document.getElementById("q6a")
    // let q7 = document.getElementById("q7a")
    // let q8 = document.getElementById("q8a")
    // let q9 = document.getElementById("q9a")
    // let q10 = document.getElementById("q10a")

    // let quest = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

    // let x = 'q'+ 1

    // quest.forEach(function(n) {
    //     console.log(n)
    // }

    // quest.forEach(n => {
    //     console.log(n.value)
    // })


    // for (let i = 1; i <= 10; i++) {
    //     if (q1.checked) {
    //         S += 1
    //     } else {
    //         N += 1
    //     }
    // }

    // alert(S + " Itens foram marcados" )

    // if (s.checked) {
    //     alert(ss)
    // } else {
    //     alert('Não está selecionado')
    // }
}

    // console.log(radioBtns)
    // radioBtns.forEach(radioBtn => {"change", console.log(radioBtn.value)})

	// let findSelected = () => {
    //     let sel = document.getElementById("q1")
    //     let selected = sel.value
	// 	console.log(selected)
	// }

	// radioBtns.forEach(radioBtn => {
	// 	radioBtn.addEventListener("change", findSelected)
	// })
	// findSelected()

