// ====== script.js ======
document.addEventListener("DOMContentLoaded", function() {
    
    // ده بخص صفحة الأسعار بس
    const fuelTable = document.querySelector("#fuelTable tbody");
    
    if(fuelTable) {
        const fuelData = [
            { name: "خام برنت Brent", price: 82.45, change: 1.23 },
            { name: "خام غرب تكساس WTI", price: 78.90, change: -0.55 },
            { name: "البنزين 95", price: 3.89, change: 0.10 },
            { name: "الديزل", price: 4.15, change: -0.08 },
            { name: "غاز طبيعي", price: 2.75, change: 0.05 }
        ];

        fuelData.forEach(item => {
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>$${item.price}</td>
                    <td class="${item.change > 0 ? 'price-up' : 'price-down'}">
                        ${item.change > 0 ? '▲' : '▼'} ${Math.abs(item.change)}
                    </td>
                </tr>`;
            fuelTable.innerHTML += row;
        });

        // وقت التحديث
        document.getElementById("updateTime").innerText = 
            "آخر تحديث: " + new Date().toLocaleString('ar-EG');
    }
});