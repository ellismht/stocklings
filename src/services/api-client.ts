import ky from "ky";

export const api = ky.create({
    prefix: "https://localhost:7196",
    credentials: "include"
});