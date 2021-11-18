import { RolStatic } from '../../api/rol/models/rol.model';
import { SubRolStatic } from '../../api/rol/models/sub.rol.model';
import { UserStatic } from '../../api/user/models/user.model';

export const rolHasManyUser = (rol: RolStatic, user: UserStatic) => {
  rol.hasMany(user, {
    foreignKey: { allowNull: true, name: 'rol_id' },
    sourceKey: 'id',
  });
  user.belongsTo(rol, {
    foreignKey: { allowNull: true, name: 'rol_id' },
    targetKey: 'id',
  });
};
export const subRolHasManyUser = (subRol: SubRolStatic, user: UserStatic) => {
  subRol.hasMany(user, {
    foreignKey: { allowNull: true, name: 'sub_rol_id' },
    sourceKey: 'id',
  });
  user.belongsTo(subRol, {
    foreignKey: { allowNull: true, name: 'sub_rol_id' },
    targetKey: 'id',
  });
};
