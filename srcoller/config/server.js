module.exports = {
  APP_ACCESS_KEY:
    process.env.APP_ACCESS_KEY ||
    "c59bbc394765278ab0ed961e4211d6c3e451cbb0bd9c76300da0f39af0fe2aa6",
  SECRET:
    process.env.SECRET ||
    "6df24287c27f8cddc13ce92d21fbbc28f6fc5b506a18323bfd60ced508771635",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
