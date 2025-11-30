function loadBills() {
    let data = localStorage.getItem("bills");
    return data ? JSON.parse(data) : [];
}

function saveBills(bills) {
    localStorage.setItem("bills", JSON.stringify(bills));
}

function generateBill() {
    let name = document.getElementById("name").value;
    let units = document.getElementById("units").value;

    if (name === "" || units === "") {
        alert("Please fill all fields!");
        return;
    }

    units = parseInt(units);
    let rate = 7; // ₹7 per unit
    let amount = units * rate;

    let newBill = {
        name: name,
        units: units,
        amount: amount
    };

    let bills = loadBills();
    bills.push(newBill);
    saveBills(bills);

    displayBills();
    document.getElementById("name").value = "";
    document.getElementById("units").value = "";
}

function displayBills() {
    let bills = loadBills();
    let tbody = document.querySelector("#billTable tbody");
    tbody.innerHTML = "";

    bills.forEach(b => {
        let row = `
            <tr>
                <td>${b.name}</td>
                <td>${b.units}</td>
                <td>${b.amount}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

displayBills();
