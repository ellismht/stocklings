import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export function useAutoUpdate() {
    const location = useLocation();

    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useRegisterSW({
        immediate: true,

        onRegisteredSW(_url, reg) {
            setRegistration(reg ?? null);
        }
    })

    useEffect(() => {
        if (!registration) return;

        const handleUpdateFound = () => {
            const worker = registration.installing;
            if (!worker || !registration.active) return;

            setIsLoading(true);

            const handleStateChange = () => {
                if (worker.state === 'activated' || worker.state === 'redundant') {
                    setIsLoading(false);
                    worker.removeEventListener('statechange', handleStateChange);
                }
            }

            worker.addEventListener('statechange', handleStateChange);
            handleStateChange();
        }

        void registration.update();

        return () => {
            registration.removeEventListener('updatefound', handleUpdateFound);
        }
    }, [location, registration]);

    return isLoading;
}