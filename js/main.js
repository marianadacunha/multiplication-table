function tabuada() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("selectTabuada");

    if (num.value.length == 0) {
        window.alert("Digite um número");
    } else {
        let n = Number(num.value);
        tab.innerHTML = "";

        for (let contador = 1; contador <= 10; contador++) {
            let item = document.createElement("option");
            item.text = `${n} x ${contador} = ${n * contador}`;
            tab.appendChild(item);
        }
    }
}