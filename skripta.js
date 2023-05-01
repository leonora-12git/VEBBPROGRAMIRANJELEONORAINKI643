function alertKopce(){
	var ime, prezime, mesto;
	ime=document.getElementById("ime").value;
	prezime=document.getElementById("prezime").value;
	mesto=document.getElementById("mesto").value;
	alert("Најубаво место во Шпанија според "+ime+" "+prezime+" е "+mesto+".");
}
function promenaNaSlika() {
  var slika = document.getElementById("slika");
  slika.src = "sliki/spanija.jpg";
}
function pozadina(){
	document.getElementById("main").style.backgroundColor="#ffc266";
}