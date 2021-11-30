import { CompanyStatic } from '../../api/company/models/company.model';
import { UserStatic } from '../../api/user/models/user.model';
export const companyHasManyUser = (company: CompanyStatic, user: UserStatic) => {
  company.hasMany(user, {
    foreignKey: { allowNull: true, name: 'company_id' },
    sourceKey: 'id',
  });
  user.belongsTo(company, {
    foreignKey: { allowNull: true, name: 'company_id' },
    targetKey: 'id',
  });
};
