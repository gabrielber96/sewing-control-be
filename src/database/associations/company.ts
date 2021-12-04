import { CompanyStatic } from '../../api/company/models/company.model';
import { UserStatic } from '../../api/user/models/user.model';
import { ContactStatic } from '../../api/contact/models/contact.model';
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
export const companyHasManyContacs = (company: CompanyStatic, contact: ContactStatic) => {
  company.hasMany(contact, {
    foreignKey: { allowNull: false, name: 'company_id' },
    sourceKey: 'id',
  });
  contact.belongsTo(company, {
    foreignKey: { allowNull: false, name: 'company_id' },
    targetKey: 'id',
  });
};
