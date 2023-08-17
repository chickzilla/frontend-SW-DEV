function Check() {
  let company = document.forms["reg"]["company"].value;
  let contract = document.forms["reg"]["name"].value;
  let phone = document.forms["reg"]["phone"].value;
  let boots = document.forms["reg"]["size"].value;
  let chair = document.forms["reg"]["chair"].value;

  console.log(boots);
  if (company == "") {
    alert("Tell us about your company");
  } else if (boots == 0) alert("Pleas choose ur size");
  else if (chair >= 10 || chair <= 1 || chair == "")
    alert("Choose chairs between 1 to 10");
  else if (contract == "") alert("Tell us about your contract");
  else if (phone == "") alert("Tell us about your phone number");
  else document.getElementById("reg").submit();
}
