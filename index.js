// Starting from the previous exercise, write a method that recovers the data saved in localStorage and prints them in the console.

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveItem(obj) {
  const json = JSON.stringify(obj);

  localStorage.setItem("user", json);
}

saveItem(user);

function getItem(item) {
  const val = localStorage.getItem(item);
  const obj = JSON.parse(val);
  return obj;
}

function printItems() {
  console.log(localStorage);
}

function printLocalStorage() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value);
  }
  //   for (var key in localStorage) {
  //     if (
  //       key !== "length" &&
  //       key !== "clear" &&
  //       key !== "getItem" &&
  //       key !== "key" &&
  //       key !== "removeItem" &&
  //       key !== "setItem"
  //     ) {
  //       console.log(key + " = " + localStorage[key]);
  //     }
  //   }
}

// printItems();
printLocalStorage();
