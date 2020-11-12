function tabuada() {
    let num = document.getElementById("number-input");
    let tab = document.getElementById("multiplication-table");

    if (num.value.length == 0) {
        window.alert("Digite um número!");
    } else {
        let n = Number(num.value);
        tab.innerHTML = "";

        for (let contador = 1; contador <= 10; contador++) {
            let item = document.createElement("tr");
            item.text = `${n} x ${contador} = ${n * contador}`;
            tab.appendChild(item);
        }
    }
}