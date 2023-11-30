// Este script tiene la única funcionalidad de agregar cuadrados a la página de forma dinámica

const items = document.querySelector(".flex-container");

// Array de textos
const textos = [
  "1) Todas las noches, antes de ir a dormir, Wendy contaba a sus dos hermanos menores su cuento favorito. Era el de Peter Pan, un niño que vivía con las hadas y que no quería crecer. Una noche, Peter Pan y el hada Campanita aparecieron en la ventana de la habitación e invitaron a los niños a viajar al País de Nuncajamás.", 

  "2) Los niños aceptaron y, contagiados por la magia del hada, volaron hasta llegar a una bella isla, donde decidieron construir una casa para vivir todos juntos. Wendy por las noches, seguía contando el cuento a sus hermanos y todos eran muy felices.", 

  "3) Una noche, el capitán Garfio y sus temibles secuaces les atacaron; raptaron a Wendy y a sus hermanos y echaron veneno en la copa de agua de Peter Pan, para que así no pudiera seguirles.", 

  "4) Al día siguiente, Peter Pan, ajeno a lo que había ocurrido durante la noche, intentó beber agua de su copa, pero Campanita se lo impidió, cayendo ella misma fulminada por el efecto del veneno. Usando la magia aprendida de las hadas, Peter Pan pudo salvar a la dulce Campanita.", 

  "5) Al instante, Peter Pan se dio cuenta de que Garfio había raptado a Wendy y sus hermanos, de modo que corrió en su ayuda. Se enfrentó valientemente al malvado y, de una sola estocada, salió vencedor de la contienda.", 

  "6) Garfio cayó al agua, donde un grupo de feroces cocodrilos, los mismos que hacía tiempo le habían devorado la mano, le esperaban para darse un buen banquete.", 

  "7) Mientras tanto, los padres de Wendy estaban muy preocupados por sus hijos. No podían imaginar el motivo de su desaparición. Ellos eran buenos padres y les adoraban. Como Peter Pan lo sabía, decidió acompañarles a casa.", 

  "8) Una vez en casa, los niños abrazaron a sus padres y les prometieron no volver a escaparse nunca más. Mientras, Peter Pan regresaba al País de Nuncajamás, seguro de haber hecho lo correcto, pero triste por alejarse de sus amigos. Fin."
];

for (let i = 0; i <= 7; i++) {
  const square = document.createElement("div");
  square.appendChild(document.createTextNode(textos[i]));
  square.classList.add("square", "col-md-5", "col-lg-3", );

  items.appendChild(square); //Se agregan los textos al div del HTML
}

const searchFormsLG = document.querySelector(".search-form-lg");
const searchFormsMdSm = document.querySelector(".search-form-md-sm");

// Función para mostrar u ocultar los form que contienen un search según el tamaño de la pantalla
// OTRA FORMA de mostrar el buscador search-form-lg en pantallas grandes y ocultarlo en pantallas medianas y pequeñas, y lo mismo con el buscador search-form-md-sm pero ocultandolo a pantallas grandes, etc...

function toggleForms() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 801) {
    // Para pantalla lg
    searchFormsLG.classList.remove("d-none");
    searchFormsMdSm.classList.add("d-none");
  } else {
    // Para pantalla md y sm
    searchFormsLG.classList.add("d-none");
    searchFormsMdSm.classList.remove("d-none");
  }
}

// Se ejecuta la función al cargar la página y al cambiar de tamaño la pantalla 
// Descomentar para usar (por ahora no es necesario, ya que Bootstrap lo está haciendo)

//window.addEventListener("load", toggleForms);
//window.addEventListener("resize", toggleForms);

