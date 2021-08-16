import "../../src/setup";
import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import clearDatabase from "../utils/database";
import faker from "faker";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /submit", () => {
  it("should answer with status 200", async () => {
    const response = await supertest(app).get("/submit");

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "teste",
        }),
      ])
    );
  });
});

describe("GET /submit/subject/:id", () => {
  it("should answer with status 200", async () => {
    const response = await supertest(app).get("/submit/subject/1");

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "teste",
        }),
      ])
    );
  });

  it("should answer with status 200", async () => {
    const response = await supertest(app).get("/submit/subject/2");

    expect(response.status).toBe(200);

    expect(response.body).toEqual([]);
  });

  it("should answer with status 404 for no params", async () => {
    const response = await supertest(app).get("/submit/subject/");

    expect(response.status).toBe(404);
  });

  it("should answer with status 404 for invalid params", async () => {
    const response = await supertest(app).get("/submit/subject/test");

    expect(response.status).toBe(404);
  });
});

describe("GET /submit/types", () => {
  it("should answer with status 200", async () => {
    const response = await supertest(app).get("/submit/types");

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "P1",
        }),
      ])
    );
  });
});

describe("POST /submit", () => {
  it("should answer with status 201 for valid params", async () => {
    const body = {
      name: faker.name.findName(),
      url: faker.internet.url(),
      professorId: 1,
      subjectId: 1,
      typeId: 1,
    };

    const response = await supertest(app).post("/submit").send(body);

    expect(response.status).toBe(201);
  });

  it("should answer with status 400 for invalid params", async () => {
    const body = {
      name: faker.datatype.number(),
      url: faker.datatype.number(),
      professorId: faker.datatype.string(),
      subjectId: faker.datatype.string(),
      typeId: faker.datatype.string(),
    };

    const response = await supertest(app).post("/submit").send(body);

    expect(response.status).toBe(400);
  });

  it("should answer with status 404 for invalid params", async () => {
    const response = await supertest(app).post("/submit").send({});

    expect(response.status).toBe(404);
  });
});
