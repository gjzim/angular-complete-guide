export class AuthService {
    loggedIn = false;

    isAuthenticated(): Promise<boolean> {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 100)
        })
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}