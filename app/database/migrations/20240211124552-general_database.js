const {DataTypes} = require('sequelize')

async function up (queryInterface) {
  await queryInterface.createTable('roles', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  await queryInterface.createTable('companies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dbName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  await queryInterface.createTable('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  })

  await queryInterface.createTable('tokens', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  await queryInterface.createTable('users_ref_roles', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  })
  await queryInterface.addConstraint('users', {
    fields: ['company_id'],
    type: 'foreign key',
    name: 'users_companies',
    references: {table: 'companies', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
  await queryInterface.addConstraint('tokens', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'tokens_users',
    references: {table: 'users', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })

  await queryInterface.addConstraint('users_ref_roles', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'users_ref_roles_users',
    references: {table: 'users', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
  await queryInterface.addConstraint('users_ref_roles', {
    fields: ['role_id'],
    type: 'foreign key',
    name: 'users_ref_roles_roles',
    references: {table: 'roles', field: 'id'},
    onDelete: 'cascade',
    onUpdate: 'cascade',
  })
}


async function down (queryInterface) {
  await queryInterface.removeConstraint('users', 'users_companies')
  await queryInterface.dropTable('companies');
  await queryInterface.removeConstraint('users_ref_roles', 'users_ref_roles_users')
  await queryInterface.removeConstraint('users_ref_roles', 'users_ref_roles_roles')
  await queryInterface.dropTable('users_ref_roles');
  await queryInterface.removeConstraint('tokens', 'tokens_users')
  await queryInterface.dropTable('tokens')
  await queryInterface.dropTable('users');
  await queryInterface.dropTable('roles')
}

module.exports = {
  up,
  down
}
