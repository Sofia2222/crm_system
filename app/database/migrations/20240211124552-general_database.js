'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
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
      name: {
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
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
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

  },

  async down (queryInterface) {
    await queryInterface.dropTable('roles');
    await queryInterface.dropTable('companies');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('users_ref_roles');
  }
};