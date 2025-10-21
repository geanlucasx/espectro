const simulador = document.getElementById("simulador");
const imagem = new Image();
imagem.src = "imagens/ilustracao.png";


const tipos = [
  { nome: "Visão Normal", matriz: [1, 0, 0, 0, 0,
                                    0, 1, 0, 0, 0,
                                    0, 0, 1, 0, 0] },


  { nome: "Protanopia", matriz: [0.56667, 0.43333, 0, 0, 0,
                                 0.55833, 0.44167, 0, 0, 0,
                                 0, 0.24167, 0.75833, 0, 0] },


  { nome: "Deuteranopia", matriz: [0.625, 0.375, 0, 0, 0,
                                   0.7, 0.3, 0, 0, 0,
                                   0, 0.3, 0.7, 0, 0] },


  { nome: "Tritanopia", matriz: [0.95, 0.05, 0, 0, 0,
                                 0, 0.43333, 0.56667, 0, 0,
                                 0, 0.475, 0.525, 0, 0] },


  { nome: "Acromatopsia", matriz: [0.299, 0.587, 0.114, 0, 0,
                                   0.299, 0.587, 0.114, 0, 0,
                                   0.299, 0.587, 0.114, 0, 0] }
];


imagem.onload = () => {
  tipos.forEach(tipo => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = imagem.width;
    canvas.height = imagem.height;


    ctx.drawImage(imagem, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const m = tipo.matriz;


    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      data[i]     = r * m[0] + g * m[1] + b * m[2];
      data[i + 1] = r * m[5] + g * m[6] + b * m[7];
      data[i + 2] = r * m[10] + g * m[11] + b * m[12];
    }


    ctx.putImageData(imageData, 0, 0);


    const div = document.createElement("div");
    div.classList.add("card-visao");
    div.appendChild(canvas);
    const label = document.createElement("p");
    label.textContent = tipo.nome;
    div.appendChild(label);
    simulador.appendChild(div);
  });
};




// =====================
// SEÇÃO 2: Hover Educativo
// =====================
const hoverCards = document.querySelectorAll(".hover-card");
const descricaoHover = document.getElementById("descricao-hover");
const barraCores = document.getElementById("barra-cores");


hoverCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    descricaoHover.textContent = card.dataset.info;
    barraCores.style.background = card.dataset.colors;
  });


  card.addEventListener("mouseout", () => {
    descricaoHover.textContent = "Passe o mouse sobre um tipo para ver a explicação detalhada.";
    barraCores.style.background = "linear-gradient(90deg, red, green, blue)";
  });
});

