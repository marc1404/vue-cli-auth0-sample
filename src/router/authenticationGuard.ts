import { NavigationGuard, Route } from 'vue-router';
import { getAuthenticationClient } from '@/authentication/getAuthenticationClient';

type Next = Parameters<NavigationGuard>[2];

export async function authenticationGuard(to: Route, from: Route, next: Next) {
    const authenticationClient = await getAuthenticationClient();
    const isAuthenticated = await authenticationClient.isAuthenticated();

    if (isAuthenticated) {
        next();
        return;
    }

    await authenticationClient.loginWithRedirect({
        redirect_uri: to.fullPath
    });
}