const arr = [];

const buttonSave = () => {
  const tbody = document.getElementById("info");
  const txtName = document.getElementById("txtName");
  const txtLastname = document.getElementById("txtLastname");
  const name = txtName.value;
  const lastname = txtLastname.value;
  if (name && lastname) {
    tbody.innerHTML += `<tr><td>${name}</td><td>${lastname}</td></tr>`;
    txtName.value = "";
    txtLastname.value = "";
    arr.push({
      name,
      lastname,
    });
  } else {
    alert("Nombre y apellido no deben ser vacíos");
  }
};

const buttonMore = () => {
  localStorage.setItem("DATA", JSON.stringify(arr));
  window.location = "data.html";
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnSave").addEventListener("click", buttonSave);
  document.getElementById("btnMore").addEventListener("click", buttonMore);
});
