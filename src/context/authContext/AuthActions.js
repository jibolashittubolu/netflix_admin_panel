export const loginStart = () => ({
    type: "LOGIN_START"
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

export const loginFaliure = () => ({
    type: "LOGIN_FAILURE",
})

export const loginDefault = () => ({
    type: "LOGIN_DEFAULT",
})

export const logout = () => ({
    type: "LOGOUT",
})