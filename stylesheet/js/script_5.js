const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// Est ce que toux les livres ont ete empruntes au moins une fois
let booksrented = true;
books.forEach(book => {
if (book.rented === 0){
    booksrented = false;
}
});
if (booksrented == true) {
console.log("Tous les livres ont ete empruntes");
console.log("Il y a " + " " + books.length + " " + "livres")
} else {
console.log("Il y a des livres non empruntes !");
console.log("Il y a " + " " + books.length + " " + "livres")
}

// quel est le livre le plus emprunte
function max_rented_book(books) {
let i = 0;
let max = 0;
let name = ""

while (i < books.length) {
    if (books[i].rented > max) {
        max = books[i].rented;
        name = books[i].title;
    }
    i++;
}
console.log("le livre qui a ete le plus de fois pris a ete pris", max, "fois", "le titre du livre est:", name)
}
max_rented_book(books);

// Le livre le moins emprunte
function min_rented_book(books) {
let i = 0;
let min = books[0].rented;
let name = books[0].title;

while (i < books.length) {
    if (books[i].rented < min) {
        min = books[i].rented;
        name = books[i].title;
    }
    i++;
}
console.log("le livre qui a ete le moin de fois pris a ete pris", min, "fois", "le titre du livre est:", name)
}
min_rented_book(books);

// Quel est le livre avec l'ID 873495
books.forEach(book =>{
if(book.id === 873495){
    console.log(`Le livre avec l'ID 873495 se nomme : "${book.title}"`);
}
});

// Supprime le livre ID 133712
console.log("le livre a supprimer est Gatsby le magnifique id: 133712 rented: 39")
let index = books.findIndex(book => book.id === 133712);
books.splice(index,1);
console.log("Le livre a été supprimé ");
console.log(books);


// tri des livres par ordre alphabetiques
function sort(books) {
return books.sort((a, b) => a.title.localeCompare(b.title));
}

console.log("liste alphabetique des livres",sort(books));

// Rajout du livre 133712 Gatsby pour le controle de l exercice
//books.push({title: 'Gatsby le magnifique', id: 133712, rented: 39})
