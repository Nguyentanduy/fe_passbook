import { BaseApi } from "./BaseApi"
// import { AuthPath } from "../constants/ApiPath"

export class AuthApi extends BaseApi {
    constructor() {
        super()
    }
    postLogin = (data) => {
        // return this.post(AuthPath.postLogin, data)
    }
    postRegister = (data) => {
        // return this.post(AuthPath.postRegister, data)
    }
}

export const authApi = new AuthApi()