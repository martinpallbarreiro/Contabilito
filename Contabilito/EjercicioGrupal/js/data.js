const showData = (array) => {
  const tbody = document.getElementById("info");
  for (let data of array) {
    tbody.innerHTML += `<tr><td>${data.name}</td><td>${data.lastname}</td></tr>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  showData(JSON.parse(localStorage.getItem("DATA")));
});
