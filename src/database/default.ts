import { DataBase } from '../database';
export const tableRol = () => {
  DataBase.instance.Rol.bulkCreate([
    {
      id: 1,
      rol: 'Administrador',
    },
    {
      id: 2,
      rol: 'Empleado',
    },
  ])
    .then((values) => {
      console.log(values);
    })
    .catch((e) => {
      if (e) console.log(e);
    });
};
export const tableSubRol = () => {
  DataBase.instance.SubRol.bulkCreate([
    {
      id: 1,
      sub_rol: 'Encargado de inventario',
    },
    {
      id: 2,
      sub_rol: 'Jefe de personal',
    },
    {
      id: 3,
      sub_rol: 'Obrero',
    },
  ])
    .then((values) => {
      console.log(values);
    })
    .catch((e) => {
      if (e) console.log(e);
    });
};
