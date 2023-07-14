// class GetPhotographersData {
//   constructor(data, type) {
//     if (type === "") {
//       return new photographerTemplate(data)
//       // Sinon retourne-moi le nouveau formatage
//     } else if (type === "") {
//       return new photographers(data)
//       // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
//     } else {
//       throw "Format du type inconnu"
//     }
//   }
// }
function photographersOtherData(id, city, country, tagline, price) {
  return {
    id,
    city,
    country,
    tagline,
    price,
  }
}

// const PhotographeData = new photographersData()
