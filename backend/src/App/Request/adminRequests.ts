import { Router } from "express";
import { createAdminService, readAdminService, findAdminService, deleteAdminService } from "~/App/Service/AdminService";

import authMidleware from "~/Infra/Midlewares/authMidleware";

const AdminRequests = Router();

AdminRequests.get("/admin", authMidleware.handle, readAdminService.handle);
AdminRequests.get("/admin/:id", authMidleware.handle, findAdminService.handle);
AdminRequests.post("/admin", createAdminService.handle);
AdminRequests.delete("/admin/:id", authMidleware.handle, deleteAdminService.handle);

export default AdminRequests;
