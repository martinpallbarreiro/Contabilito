const arr = [];

const buttonSave = () => {
  const tbody = document.getElementById("info");
  const txtDesc = document.getElementById("txtDesc");
  const radioTrans = document.getElementById("tipoTrans");
  const radioIVA = document.getElementById("tipoIVA");
  const txtMonto = document.getElementById("monto");
  
  const Descripcion = txtDesc.value;
  const Transaccion = radioTrans.value;
  const IVA = radioIVA.value;
  const Monto = txtMonto.value;

  if (Descripcion && Transaccion && IVA && Monto) {
    tbody.innerHTML += `<tr><td>${Descripcion}</td><td>${Transaccion}</td><td>${Monto}</td> </tr>`;
    txtDesc.value = "";
    txtMonto.value = "";
    arr.push({
      Descripcion,
      Monto,
    });
  } else {
    alert("Falta algun dato");
  }
};

const showData = (array) => {
    const tbody = document.getElementById("info");
    for (let data of array) {
      tbody.innerHTML += `<tr><td>${data.name}</td><td>${data.lastname}</td></tr>`;
    }
  };

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnSave").addEventListener("click", buttonSave);
    showData(JSON.parse(localStorage.getItem("DATA")));

  });
  
  
  