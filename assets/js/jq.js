let intelligence = 0;
let strength = 0;
let speed = 0;
let durability = 0;
let power = 0;
let combat = 0;
$(document).ready(() => {
  $("#elbtn").click(function () {
    $.ajax({
      // Endpoint API
      url: `https://akabab.github.io/superhero-api/api/id/${$(
        "#myHero"
      ).val()}.json`,
      type: "GET",
      dataType: "JSON",
      success: (data) => {
        let superheroe = data.images;
        const imgHeroe = document.getElementById("imgHeroe");
        document.getElementById("featureshero1").innerHTML=`<h4>SuperHero encontrado</h4><h5>${data.name}</h5><p>Conexiones: ${data.connections.groupAffiliation}</p> <h6>Publicado por: ${data.biography.publisher}</h6>`;
        
        document.getElementById("featureshero2").innerHTML=`<h6>Ocupación ${data.work.occupation}</h6>`;

        document.getElementById("featureshero3").innerHTML=`<h6>Primera Aparición ${data.biography.firstAppearance}</h6>`;

        document.getElementById("featureshero4").innerHTML=`<h6>Altura ${data.appearance.height[0]} - ${data.appearance.height[1]}</h6>`;
        
        document.getElementById("featureshero5").innerHTML=`<h6>Peso ${data.appearance.weight[1]} - ${data.appearance.weight[1]}</h6>`;
        
        document.getElementById("featureshero6").innerHTML=`<h6>Alianzas ${data.biography.aliases}</h6>`;

        imgHeroe.innerHTML = `<img src="${superheroe.md}" alt="">`;
        
        intelligence = parseInt(data.powerstats.intelligence);
        strength = parseInt(data.powerstats.strength);
        speed = parseInt(data.powerstats.speed);
        durability = parseInt(data.powerstats.durability);
        power = parseInt(data.powerstats.power);
        combat = parseInt(data.powerstats.combat);

        var chart = new CanvasJS.Chart("chartContainer", {
          theme: "light2", // "light1", "light2", "dark1", "dark2"
          exportEnabled: true,
          animationEnabled: true,
          title: {
            text: "Estadística de poder para " + data.name,
          },
          data: [
            {
              type: "pie",
              startAngle: 25,
              toolTipContent: "<b>{label}</b>: {y}%",
              showInLegend: "true",
              legendText: "{label}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - {y}%",
              dataPoints: [
                { y: intelligence, label: "intelligence" },
                { y: strength, label: "strength" },
                { y: speed, label: "speed" },
                { y: durability, label: "durability" },
                { y: power, label: "power" },
                { y: combat, label: "combat" },
              ],
            },
          ],
        });
        chart.render();
      },
    });
  });
});
console.log(
  "intelligence:" +
    intelligence +
    "/strength" +
    strength +
    "/speed" +
    speed +
    "durability:" +
    durability +
    "/power" +
    power +
    "/combat" +
    combat
);
