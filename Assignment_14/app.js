const companies = [
    {
        name: "Tesla",
        products: [
            { SNo: "1", Model: "Tesla Cyber Truck", Price: "1200", UnitSold: "500" },
            { SNo: "2", Model: "Tesla Model S", Price: "1000", UnitSold: "300" },
            { SNo: "3", Model: "Tesla Model X", Price: "1400", UnitSold: "700" },
            { SNo: "4", Model: "Tesla Semi", Price: "1500", UnitSold: "800" },
            { SNo: "5", Model: "Tesla Model Y", Price: "900", UnitSold: "300" }
        ]
    },
    {
        name: "Toyota",
        products: [
            { SNo: "1", Model: "Toyota Corolla", Price: "400", UnitSold: "900" },
            { SNo: "2", Model: "Toyota Land Cruiser", Price: "600", UnitSold: "600" },
            { SNo: "3", Model: "Toyota Fortuner", Price: "800", UnitSold: "750" },
            { SNo: "4", Model: "Toyota Prius", Price: "500", UnitSold: "870" },
            { SNo: "5", Model: "Toyota Hilux", Price: "1100", UnitSold: "600" }
        ]
    },
    {
        name: "Mercedez",
        products: [
            { SNo: "1", Model: "Mercedez Benz C-Class", Price: "900", UnitSold: "890" },
            { SNo: "2", Model: "Mercedez Benz E-Class", Price: "1100", UnitSold: "990" },
            { SNo: "3", Model: "Mercedez Benz Sprinter", Price: "1200", UnitSold: "1100" },
            { SNo: "4", Model: "Mercedez Amg Gt", Price: "1500", UnitSold: "980" },
            { SNo: "5", Model: "Mercedez MayBach", Price: "1200", UnitSold: "500" }
        ]
    },
    {
        name: "Audi",
        products: [
            { SNo: "1", Model: "Audi E-Tron", Price: "1300", UnitSold: "600" },
            { SNo: "2", Model: "Audi E-Tron Gt", Price: "1400", UnitSold: "1100" },
            { SNo: "3", Model: "Audi Q8", Price: "1000", UnitSold: "2000" },
            { SNo: "4", Model: "Audi Q7", Price: "1300", UnitSold: "1180" },
            { SNo: "5", Model: "Audi RS5", Price: "1999", UnitSold: "670" }
        ]
    }
];

function displayName() {
    let content = '';

    
    for (let i = 0; i < companies.length; i++) {
        let company = companies[i];

    
        content += `<div class="company-title">${company.name}</div>`;
        content += `<table>

        
        <tr>
            <th>S.No</th>
            <th>Model</th>
            <th>Price ($)</th>
            <th>Units Sold</th>
        </tr>`;

        for (let j = 0; j < company.products.length; j++) {
            let product = company.products[j];

            content += `
            <tr>
                <td>${product.SNo}</td>
                <td>${product.Model}</td>
                <td>${product.Price}</td>
                <td>${product.UnitSold}</td>
            </tr>`;
        }

        content += `</table>`;
    }

    document.getElementById('companyTable').innerHTML = content;
}

displayName();