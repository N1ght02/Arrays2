var klas = ["Jochem", "Joshua", "Robbe", "Mathijs" , "Yeno" , "Osman" , "Gio" , "Kevin" , "Mike" , "Flint" , "Taurece" , "Sohil" , "Lennard" , "Nanne" , "Lloyd" , "Delivio" , "Jordan" , "Job" , "Wiebe","Andre","Gijs","Tolga","Mark","Pelle","Sed",];
var lijst  = document.getElementById('Lijst')
let x = 1;


  function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 0 && k != 0 && i != 10) {
    return i + "ste";
  }
  if (j == 1 && k != 11) {
      return i + "ste";
  }
  if (j == 8 && k != 18) {
    return i + "ste";
  }
if (i > 0 && i < 20) {
    return i + "de";
  }
return i + "ste";
}

let l = 1;

for (i in klas) {
lijst.innerHTML += "<li>" + ordinal_suffix_of(l) + " " + klas[i] + "</li>";
l++;
}
