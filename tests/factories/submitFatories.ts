import { getRepository } from "typeorm";
import faker from "faker";

import Tests from "../../src/entities/test";

export default async function createTest () {
  const test = await getRepository(Tests).create({
    name: faker.name.findName(),
    url: faker.internet.url(),
    professorId: 1,
    subjectId: 1,
    typeId: 1
  });

  await getRepository(Tests).save(test);

  return test;
}