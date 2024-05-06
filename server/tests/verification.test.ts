import request from "supertest";
import app from "../src/app";

describe("Verification Endpoint Tests", () => {
    it("should return error if code is not 6 digits", async () => {
        const response = await request(app)
            .post("/api/v1/verify")
            .send({ code: "12345" });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Code is not equal to 6 digits.");
    });

    it("should return error if last digit of code is 7", async () => {
        const response = await request(app)
            .post("/api/v1/verify")
            .send({ code: "123457" });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Last digit of code is 7.");
    });

    it("should return success if code is valid", async () => {
        const response = await request(app)
            .post("/api/v1/verify")
            .send({ code: "123456" });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Code verified successfully.");
    });
});
