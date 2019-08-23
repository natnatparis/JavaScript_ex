const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ]

  var prenom_nom = [];

  // patron des 70's
  function seventies(patron) {
      let i = 0;
      let tab = [];
  
      console.log("les entrepreneurs nes dans les 70's sont: ")
      while (i < patron.length) {
          Object.entries(patron[i]).forEach(function([key, value]) {
              if (key == "year" && (value <= 1979 && value >= 1970)) {
                  console.log(patron[i].first, " ", patron[i].last);
                  tab.push(patron[i].first + " " + patron[i].last);
              }
          });
      i++;
      }
  
      return tab;
  }
  // liste des noms et prenoms
  function prenom_nom_in_tab(patron) {
    
      let i = 0;
      
      console.log( "Voici la liste des noms et prenoms")
      while (i < patron.length) {
          prenom_nom.push(patron[i].first + " " + patron[i].last)
          i++;
      }
  }
  // calcul de l age
  function age_of_patron(patron) {
      let i = 0;
      
      while (i < patron.length) {
          console.log("Aujourd'hui", patron[i].first, patron[i].last, "as", 2019 - patron[i].year, "ans")
          i++;
      }
  }
  // tri alphabetique
  function sort_tab(entrepreneurs) {
      return entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
  }
  
  seventies(entrepreneurs);
  prenom_nom_in_tab(entrepreneurs);
  console.log(prenom_nom);
  age_of_patron(entrepreneurs);
  console.log("voici la liste des entrepreneurs dans l'ordre alphabetique\n", sort_tab(entrepreneurs));
  