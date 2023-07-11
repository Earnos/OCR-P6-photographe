class GetPhotographersData {
  constructor(data, type) {
    if (type === "oldApi") {
      return new photographerTemplate(data)
      // Sinon retourne-moi le nouveau formatage
    } else if (type === "newApi") {
      return new Movie(data)
      // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
    } else {
      throw "Format du type inconnu"
    }
  }
}
