const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BetterBuy", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
