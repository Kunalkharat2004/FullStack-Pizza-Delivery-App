import app from "./src/app";
import addTwoNumber from "./src/utils";
import request from "supertest";

describe("Auth Service", () => {
    it("should return 5", () => {
        expect(addTwoNumber(2, 3)).toBe(5);
    });

    it("should return 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.status).toBe(200);
    });
});
