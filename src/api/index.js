import { handler } from "./handler";


export default ({
    loginAdmin: (body) => handler.post("/admin/auth/login", body),
    getCars : () => handler.get("/admin/v2/car")
});