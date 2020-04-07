import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";

let authenticationClient: Auth0Client | null = null;

export async function getAuthenticationClient(): Promise<Auth0Client> {
    if (authenticationClient) {
        return authenticationClient;
    }

    authenticationClient = await createAuth0Client({
        domain: 'YOUR_DOMAIN',
        client_id: 'YOUR_CLIENT_ID'
    });

    return authenticationClient;
}
