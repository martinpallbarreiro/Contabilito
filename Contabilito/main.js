const roundNumber = (num) => Math.round(num*100)/100;

let dataArray;
let venta_total=0;
let compra_total=0;

const appendTransactionToTable = ({
    description,
    transaction,
    subtotal,
    iva,
}) => {
    
    const tbody = document.querySelector("tbody");
    const transactionStr = transaction ==="C" ? "Compra" : "Venta"; //if acortado
    const ivaValue = roundNumber((iva/100)*subtotal);
    const total = ivaValue + subtotal;
    if(transaction === "C"){
        compra_total += total;
    }else{
        venta_total += total;
    }
    document.getElementById("compraTotal").innerHTML= compra_total;
    document.getElementById("ventaTotal").innerHTML= venta_total;
    tbody.innerHTML += `
    <tr>
        <td>${description}</td>
        <td>${transactionStr}</td>
        <td>${subtotal}</td>
        <td>${ivaValue}</td>
        <td>${total}</td>

    </tr>  
    ` 
};


document.addEventListener("DOMContentLoaded",() =>{
    
    dataArray = JSON.parse(localStorage.getItem("data"));
    if(!dataArray){
        dataArray=[];
    }

    dataArray.forEach((transaction) => {
        appendTransactionToTable(transaction);
    });
    document.getElementById("formularioVentas").addEventListener("submit",(e) =>{        
        e.preventDefault();//para que no se recargue la página
        const data = new FormData(e.target); // etarget es el elemento que disparo el evento submit
        const description = data.get("desc");
         const transaction = data.get("trans");
         const subtotal = roundNumber(data.get("subtotal"));
         //todos los datos obtenidos del formulario vienen en formato string
         //el .toFixed es para limitar los decimales permitidos
         const iva = roundNumber(+data.get("iva")); 
        // //el simbolo de + parsea igual que con parseFloat       
        
        
        dataArray.push({
            description,
            transaction,
            subtotal,
            iva,
        });

        localStorage.setItem("data", JSON.stringify(dataArray));
        appendTransactionToTable({
            description,
            transaction,
            subtotal,
            iva,  
        })
        
        
        
        
        //tbody.innerHTML+= 
        // `
        //     <tr>
        //         <td>${description}</td>
        //         <td>${transactionStr}</td>
        //         <td>${subtotal}</td>
        //         <td>${iva}</td>
        //         <td>${total}</td>

        //     </tr>  
        // ` 
            
        
    });  
});