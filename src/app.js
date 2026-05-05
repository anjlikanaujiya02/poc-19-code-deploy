const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD POC Application is running successfully on Feature branch..Done');
});

// Start server ONLY when running app directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
