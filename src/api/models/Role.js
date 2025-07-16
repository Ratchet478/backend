import { model } from 'mongoose';
import { roleSchema } from '../schemas/roleSchema';
export const Role = model('Role', roleSchema);