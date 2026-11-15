import ky from "ky";

let csrfToken: string | undefined;

const apiUrl = new URL("https://localhost:7196");

export async function InitCsrfToken() {
    const result = await ky.get(`${apiUrl.href}identity/csrf`, {
        credentials: "include"
    }).json<{ token: string }>();

    csrfToken = result.token;
}

export function ClearCsrfToken(){
    csrfToken = undefined;
}

export const api = ky.create({
    prefix: apiUrl.href,
    credentials: "include",
    retry: 0,

    hooks: {
        beforeRequest: [
            ({ request }) => {
                const method = request.method.toUpperCase();
                if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
                    if (!csrfToken)
                        throw new Error("CSRF token not initialized.");

                    request.headers.set("X-CSRF-TOKEN", csrfToken);
                }
            }
        ]
    }
});