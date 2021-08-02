import { getRepository } from "typeorm";
import Tests from "../../src/entities/test";

export default async function clearDatabase () {
  await getRepository(Tests).delete({});
}