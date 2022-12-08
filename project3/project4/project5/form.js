function details(e) {
  e.preventDefault();
  var name = e.target.name.value;
  var surname = e.target.surname.value;

  var obj = {
    name: name,
    surname: surname,
  };

  document.getElementById("result").innerHTML = JSON.stringify(
    obj.name + " " + obj.surname
  );

}
