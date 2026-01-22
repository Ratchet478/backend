# 1. Descripción
	 Proyecto Backend - Gestión de usuarios con express y MongoDB, desarrollado como proyecto académico
	 
# 2. Acerca de
		Proyecto realizado para el master fullstack de the power
		Implementa usuarios roles y subida de imágenes
>[!NOTE] 
  El .env se añade por requisito educativo y requisito de evaluacion.


# 3. Tecnologías Usadas

	- Node.Js
	- Express
	- MongoDb
	- Mongoose
	- Cloudinary
	- Faker.js

# 4. Instalación

```
npm install

npm run dev
```
# 5. Variables de entorno

- DB_URL
- PORT
- CLOUDINARY_URL
# 6. Estructura

`controllers/` - controladores de los modelos
`routes/` - rutas generales
`models/` y `schemas/` - modelos de mongoose
`middlewares/` - autenticación y permisos
`services/` - aislamiento y responsabilidad única de la logica 
`utils/` - utilidades varias

# 7. Rutas

- `GET /users`
- `POST /users`
- `PATCH /users/:id`
- `DELETE /users/:id`

# 8. Roles y permisos

Salvo el primer usuario creado por el seeder el resto de usuarios todos tendran el rol `user`
Es decir solo podran hacer cambios sobre si mismos
Los usuarios con el Permiso `delete_account` pueden eliminar cuentas ajenas

# 9. Seeder

el seeder se puede ejecutar con 
```
npm run seed
```
