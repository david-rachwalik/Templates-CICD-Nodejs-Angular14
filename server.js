const app = require('./app');

// --- Start the Express server ---
const PORT = process.env.PORT || 3000; // Default server port value
app.listen(PORT, () => {
  console.log(`Application server started and listening on PORT: ${PORT}`);
});
