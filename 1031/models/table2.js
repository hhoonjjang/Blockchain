const Sequelize = require("sequelize");

module.exports = class Table2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        column3: {
          type: Sequelize.STRING(255),
        },
        column4: {
          type: Sequelize.BOOLEAN,
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize,
        timestamps: false,
        underscored: true,
        paranoid: true,
        modelName: "Table2",
        tableName: "table2",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Table2.belongsTo(db.Table1, {
      // Table1이 Table2를 갖고있다.
      foreignKey: "table1_column2",
      //   연결하는키
      targetKey: "column2",
      //상대한테 받아올 키 (컬럼)
    });
    // n : m
    // 다른 테이블과 연결되어야 익숙하다? => 같은 테이블과 연결되어야 익숙하다
    // 친구추가 => user : user << 스팀에서 한사람이 여러개 게임을 살 수 있고 하나의 게임을 여러사람이 살 수 도 있다.

    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      as: "ToTable2s",
      foreignKey: "table2_to_id",
    });
    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      as: "FromTable2s",
      foreignKey: "table2_from_id",
    });
  }
};
