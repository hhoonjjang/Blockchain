const Sequelize = require("sequelize");
// const tempDate = new Date();
// tempDate.toLocaleDateString();
// tempDate.getDay();
//일반적인 메소드

// static 메소드
// Date.now();
// Date.UTC();
// Date.toString();

module.exports = class Table extends Sequelize.Model {
  // static => class 를 new 하지 않고 메소드를 불러온다.
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER, //INT
          primaryKey: true, // 고유 식별 키냐
          autoIncrement: true, // index 값 자동 증가
          unique: true, //값이 중복되면 안된다.
          allowNull: false, //비면 안된다.
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: true, //비어도 된다.
        },
        id: {
          type: Sequelize.STRING(45),
          allowNull: true, //비어도 된다.
        },
        pw: {
          type: Sequelize.STRING(45),
          allowNull: true, //비어도 된다.
        },
      },
      {
        sequelize, // 넣어라
        timestamps: true, //createAt, updateAt 자동으로 추가
        underscored: true, // 테이블과 컬럼명을 카멜 케이스로 수정
        modelName: "NewTable", // Javascript에서 사용하는 테이블명
        tableName: "new_table", // MYSQL에 있는 테이블명
        paranoid: false, // 삭제 시 deletedAt를 저장할지, 테이블에서 데이터를 삭제 시 아예 삭제를 할 것인가? 아니면 삭제한 날짜를 남김으로써 데이터를 남길것인가?
        charset: "utf8mb4", // 언어 포멧 설정
        collate: "utf8mb4_general_ci", // 언어 포멧 설정
      }
    );
  }

  static associate(db) {
    // db.NewTable
  }
};
