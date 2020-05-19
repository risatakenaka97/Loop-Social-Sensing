
export const Auth = {
    setToken: function(token) {
        localStorage.setItem('loop_social_sending_user', JSON.stringify(token));
    },
    removeToken: function() {
        localStorage.removeItem('loop_social_sending_user');
    },
    getToken: function() {
        return JSON.parse(localStorage.getItem('loop_social_sending_user'));
    },
    isExpired: function(token) {
        const now = new Date();
        return now.getTime() < token.created_at + token.expire;
    },
    isAuthorized: function() {
        const token = this.getToken();
        // if (token && !this.isExpired(token)) {
        //     this.refreshToken();
        // }
        return !!token && !this.isExpired(token);
    },
    refreshToken: async function (cb = null) {
        // try {
        //     const response = await fetch(url.protected.users.refresh, setInit({type: 'POST'}));
        //     const body = await response.json();
        //     if (response.status !== 401) {
        //         if (cb) {
        //             cb({type: REFRESH, payload: body})
        //         } else {
        //             this.setToken(body);
        //         }
        //     } else {
        //         console.error(response);
        //         // this.logout();
        //     }
        // } catch(e) {
        //     console.error("REFRESH ERROR: ", e);
        //     this.removeToken();
        // }
    },
    logout: function () {
        this.removeToken();
        window.location.reload();
    }
};