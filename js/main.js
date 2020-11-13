function multiplicationTable() {
    let num = document.getElementById("number-input");
    let tab = document.getElementById("multiplication-table");

    if (num.value.length == 0) {
        window.alert("Enter a number!");
    } else {
        let numberInput = Number(num.value);
        tab.innerHTML = "";

        for (let counter = 1; counter <= 10; counter++) {
            let item = document.createElement("tr");
            item.appendChild(document.createTextNode(`${numberInput} x ${counter} = ${numberInput * counter}`))
            tab.appendChild(item);
            window.document.getElementById('multiplication-table').style.backgroundColor = "#FFFFFF";
        }
    }
}
