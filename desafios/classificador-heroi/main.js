let heroName = "Arkantos";
let heroExperience = 10;
let heroLevel;

if (
  heroExperience === null ||
  heroExperience === true ||
  heroExperience === false ||
  heroExperience === ""
) {
  heroExperience = undefined;
}

if (heroExperience <= 1000) {
  heroLevel = "ferro";
} else if (heroExperience >= 1001 && heroExperience <= 2000) {
  heroLevel = "bronze";
} else if (heroExperience >= 2001 && heroExperience <= 5000) {
  heroLevel = "prata";
} else if (heroExperience >= 5001 && heroExperience <= 7000) {
  heroLevel = "ouro";
} else if (heroExperience >= 7001 && heroExperience <= 8000) {
  heroLevel = "platina";
} else if (heroExperience >= 8001 && heroExperience <= 9000) {
  heroLevel = "ascendente";
} else if (heroExperience >= 9001 && heroExperience <= 10000) {
  heroLevel = "imortal";
} else if (heroExperience >= 10001) {
  heroLevel = "radiante";
}

switch (heroLevel) {
  case "ferro":
    console.log(
      `O herói ${heroName} está no nível Ferro. Todo grande guerreiro começa dando o primeiro passo.`
    );
    break;

  case "bronze":
    console.log(
      `O herói ${heroName} alcançou o nível Bronze. A jornada começou e a evolução já é visível.`
    );
    break;

  case "prata":
    console.log(
      `O herói ${heroName} está no nível Prata. Suas habilidades estão ficando cada vez mais afiadas.`
    );
    break;

  case "ouro":
    console.log(
      `O herói ${heroName} atingiu o nível Ouro. Experiência, estratégia e força começam a se destacar.`
    );
    break;

  case "platina":
    console.log(
      `O herói ${heroName} chegou ao nível Platina. Poucos alcançam este patamar de excelência.`
    );
    break;

  case "ascendente":
    console.log(
      `O herói ${heroName} está no nível Ascendente. Seu poder ultrapassa os limites comuns.`
    );
    break;

  case "imortal":
    console.log(
      `O herói ${heroName} alcançou o nível Imortal. Seu nome começa a ser lembrado como lenda.`
    );
    break;

  case "radiante":
    console.log(
      `O herói ${heroName} atingiu o nível Radiante. Uma presença lendária que inspira todos ao redor.`
    );
    break;

  default:
    console.log(
      `O herói ${heroName} possui um nível desconhecido. A experiência informada não corresponde a nenhuma classificação registrada.`
    );
    break;
}
