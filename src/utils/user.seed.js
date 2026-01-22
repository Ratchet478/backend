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
async function seedAdminUser() {
    const adminRole = await Role.findOne({ name: 'admin' });
    if (!adminRole) {
        console.error("El rol de administrador no existe. Asegúrate de ejecutar seedRoles primero.");
        return;
    }
    const adminUser = new User({
        username: 'admin',
        email: 'admin@example.org',
        password: 'Admin@1234',
        roles: [adminRole._id]
    });
    await adminUser.save();
    console.log("Usuario administrador creado correctamente");
}
async function seed() {
    try {
        await seedRoles();
        await seedAdminUser();
        console.log("Datos iniciales sembrados correctamente");
        process.exit(0);
    } catch (error) {
        console.error("Error al sembrar datos iniciales:", error);
        process.exit(1);
    }
}
seed();
