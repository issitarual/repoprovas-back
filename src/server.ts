/* import './setup'; */
/* import app, { init } from "./app"; */

/* init().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server is listening on port' + process.env.PORT);
  });
}); */
import app from './app';

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});