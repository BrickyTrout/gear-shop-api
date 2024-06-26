const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const catalogue = require("./routes/catalogue");
const catalogueFilters = require("./routes/catalogue-filter");
const product = require("./routes/product");
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration
const port = 8080;
app.use("/catalogue", catalogue);
app.use("/catalogue-filters", catalogueFilters);
app.use("/product", product);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
