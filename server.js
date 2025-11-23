const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/search", (req, res) => {
  const q = req.query.q || "";
  const cep = req.query.cep || "";

  const exemplo = [
    {
      id: 1,
      nome: q + " Premium",
      melhorOferta: { loja: "Amazon", total: 199.90 },
      ofertas: [
        { loja: "Amazon", preco: 180.00, frete: 19.90, total: 199.90 },
        { loja: "Mercado Livre", preco: 170.00, frete: 40.00, total: 210.00 }
      ]
    },
    {
      id: 2,
      nome: q + " Econômico",
      melhorOferta: { loja: "Magalu", total: 89.90 },
      ofertas: [
        { loja: "Magalu", preco: 79.90, frete: 10.00, total: 89.90 },
        { loja: "Americanas", preco: 70.00, frete: 25.00, total: 95.00 }
      ]
    }
  ];

  res.json({
    termo: q,
    cep,
    resultados: exemplo
  });
});

app.get("/", (req, res) => {
  res.send("API Baixinho Preços Online");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
