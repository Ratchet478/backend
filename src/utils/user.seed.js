import User from "#models/User";
import Role from "#models/Role";
import { connectDB } from "src/config/db";

connectDB();
async function seedRoles() {
    const roles = [
        {
            name: 'user',
            description: 'Default user role',
            permissions: []
        },
        {
            name: 'admin',
            description: 'Administrator role',
            permissions: [
                { name: 'delete_account', description: 'Eliminar Otras cuentas' },
                { name: 'edit_profile', description: 'Editar perfiles de usuario' },
                { name: 'change_roles', description: 'Cambiar roles de usuario' }
            ]
        }
    ];
    await Role.deleteMany({});
    await Role.insertMany(roles);
    console.log("Roles creados correctamente");
}
