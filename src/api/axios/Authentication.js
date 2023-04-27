import Execute from "./Execute"
import { API_CONFIG, Respond } from "api/config"
export default class Authentication {
    async authenticate(parameters) {
        // const ex = new Execute()
        const data = {
            "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgyNTk4MTE3LCJleHAiOjE2ODUxOTAxMTd9.kOs195ctGx9CtwCHbF3K_T80Pn54KMPfB52FD2h1VmM",
            "user": {
                "id": 1,
                "username": "Lackson Banda",
                "email": "lacksonbanda@gmail.com",
                "provider": "local",
                "confirmed": true,
                "blocked": false,
                "createdAt": "2023-01-07T16:37:09.689Z",
                "updatedAt": "2023-04-23T01:19:20.380Z",
                "gender": "Male",
                "contact_number": null,
                "first_name": "Lackson",
                "last_name": "Banda"
            }

        }
        return Respond(true, {
            token: data.jwt,
            user: data.user
        })
        // return ex.post({
        //     endpoint_extension: API_CONFIG.endpoint_extensions.auth,
        //     body: parameters.body
        // }).then(resolve => {
        //     if (resolve.status === API_CONFIG.status_codes.success) {
        //         return Respond(true, {
        //             token: resolve.data.jwt,
        //             user: resolve.data.user
        //         })
        //     }
        //     else {
        //         return Respond(false, resolve)
        //     }
        // }).catch(r => {
        //     return Respond(false, r)
        // })
    }
}