import { model } from 'mongoose';
import { roleSchema } from '../schemas/roleSchema';
const Role = model('Role', roleSchema);
export default Role;