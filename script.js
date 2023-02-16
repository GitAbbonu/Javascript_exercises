const nameV = document.getElementById("firstName");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(nameV.value);
});
