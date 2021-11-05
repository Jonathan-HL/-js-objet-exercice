let course = {
    somme : 50,
    fruit : 5,
    chocolat :10,
    magasin(){
        premiereAchat = this.somme - this.fruit
        dernierAchat = premiereAchat - this.chocolat
        return `je vais fait mes courses avec un budget de ${this.somme}€ donc je commence par acheter des fruits qui me coûte ${this.fruit}€ donc pour le moment il me reste ${premiereAchat}€ dans mon budget apres ça je fait un dernier achat qui est du chocolat au prix de ${this.chocolat}€ donc a la fin des courses il me reste ${dernierAchat}€`
    }
}
console.log(course.magasin())

// Exo 2
vieille_dame = {
    age:1000,
    nom :{
        prenom : "dincer",
        nomDefamille : "morte",
    },
    moral:"mal",
    objet:"canne",
    se_plaindre (){
        if (moral = "mal") {
            return "Vous me dérangez"
        }else if (moral = "bien") {
            vieil_homme = "Marc"
            return `bonjour monsieur ${vieil_homme}`
        }
    }
}
console.log(vieille_dame.se_plaindre("bien"));