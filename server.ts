import "reflect-metadata";
import app from "./src/app";
const PORT: number = 3000;

app.listen(PORT, (): void => {
  console.log(`server is listening on ${PORT}`);
});
