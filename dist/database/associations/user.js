"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subRolHasManyUser = exports.rolHasManyUser = void 0;
const rolHasManyUser = (rol, user) => {
    rol.hasMany(user, {
        foreignKey: { allowNull: true, name: 'rol_id' },
        sourceKey: 'id',
    });
    user.belongsTo(rol, {
        foreignKey: { allowNull: true, name: 'rol_id' },
        targetKey: 'id',
    });
};
exports.rolHasManyUser = rolHasManyUser;
const subRolHasManyUser = (subRol, user) => {
    subRol.hasMany(user, {
        foreignKey: { allowNull: true, name: 'sub_rol_id' },
        sourceKey: 'id',
    });
    user.belongsTo(subRol, {
        foreignKey: { allowNull: true, name: 'sub_rol_id' },
        targetKey: 'id',
    });
};
exports.subRolHasManyUser = subRolHasManyUser;
