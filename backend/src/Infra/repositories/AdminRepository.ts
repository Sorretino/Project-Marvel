import type { AdminProps } from "~/Shared/PropTypes/AdminProps";
import Admin from "~/Domain/Entities/Admin";
import AdminDB from "~/Infra/database/schemas/AdminSchema";
import { hashSync } from "bcryptjs";
const AdminRepository = {
  async insert(props: AdminProps) {
    new AdminDB({});

    const admin = Admin.create(props);
    admin.password = hashSync(props.password, 10);
    const result = await AdminDB.create(admin);
    result.password = undefined;
    return result;
  },

  async delete(id: string) {
    new AdminDB({});
    await AdminDB.findByIdAndDelete(id);
    return "regiter has ben removed";
  },

  async getOneById(id: string) {
    new AdminDB({});
    const result = await AdminDB.findById(id);
    return result;
  },

  async getOneByEmailToLogin(email: string) {
    new AdminDB({});
    const result = await AdminDB.findOne({ email }).select("password");
    return result;
  },

  async getAll() {
    new AdminDB({});
    const result = await AdminDB.find();
    return result;
  },
};

export default AdminRepository;
