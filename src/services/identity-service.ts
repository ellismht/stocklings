import { queryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, InitCsrfToken } from "./api-client";
import { toast } from "@/components/ui/toast";
import { useNavigate } from "@tanstack/react-router";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: LoginRequest) => {
            return api.post<User>("identity/login", { json: data });
        },
        onSuccess: async (data) => {
            await InitCsrfToken();

            await queryClient.setQueryData(["auth", "me"], data);
            await navigate({ to: "/state" });

            toast.add({
                title: "Zostałeś poprawnie zalogowany.",
                type: "info"
            });
        }
    })
}

export function useRegister() {
    return useMutation({
        mutationFn: (data: LoginRequest) => {
            return api.post("identity/register", { json: data });
        },
        onSuccess: async () => {
            toast.add({
                title: "Rejestracja przebiegła pomyślnie.",
                type: "info"
            })
        }
    })
}

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => {
            return api.post("identity/logout");
        },
        onSuccess: async () => {
            queryClient.setQueryData(["auth", "me"], null);

            await navigate({to: "/login"});

            toast.add({
                title: "Wylogowano.",
                type: "info"
            })
        }
    })
}

export function useGetCurrentUser() {
    return useQuery(getCurrentUserQueryOptions())
}

export const getCurrentUserQueryOptions = () =>
    queryOptions({
        queryKey: ["auth", "me"],
        queryFn: async () => {return await api.get("identity/me").json<User>()},
        staleTime: 0,
        retry: false
    });