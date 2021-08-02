import '../../src/setup';
import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import clearDatabase from "../utils/database";
import faker from "faker";
import createTest from "../factories/submitFatories";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /subject", () => {
    it("should answer with status 200", async () => {
        const response = await supertest(app).get("/subject");

        expect(response.status).toBe(200);

        console.log(response.body)

        expect(response.body).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                couserId: 1, 
                id: 2, 
                semester: 1, 
                subject: {id: 1, name: "teste"}, 
                subjectId: 1
            })
            ])
        );
    })
})

describe("GET /subject/:id", () => {
    it("should answer with status 200", async () => {
        const test = await createTest();
        const { name, url, subjectId, professorId, typeId } = test;
        
        const response = await supertest(app).get("/subject/1");

        expect(response.status).toBe(200);

        expect(response.body).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                url: url,
                name: name,
                subjectId: subjectId,
                professorId:professorId,
                typeId: typeId
            })
            ])
        );
    })

    it("should answer with status 200", async () => {
        await createTest();

        const response = await supertest(app).get("/subject/2");

        expect(response.status).toBe(200);

        expect(response.body).toEqual(
            expect.arrayContaining([])
        );
    })

    it("should answer with status 400 for invalid params", async () => {
        await createTest();

        const response = await supertest(app).get("/subject/test");

        expect(response.status).toBe(400);
    })
})