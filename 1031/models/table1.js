const Sequelize = require("sequelize");
const sequelize = 1;

module.exports = class Table1 extends Sequelize.Model {
  // class *** : 클래스 선언
  // extends : 상속, 오른쪽에 있는 걸 기본으로 왼쪽, 즉 지금 선언한 클래스를 생성한다.
  // 오른쪽에 있는 내용은 전부 왼쪽에도 있다.

  static init(sequelize) {
    // 테이블 생성
    return super.init(
      {
        // 컬럼들을 작성한다.
        column1: {
          type: Sequelize.STRING(10),
          //   type을 적을 때 왜 Sequelize에서 가져올까?
          //  number,string<<자바스크립트에 있는데 왜 가져올까?
          // Javascript에 숫자가 들어왔을 때 정수인지 실수인지 알 수 없다.
          // DB에서 사용하는 자료형에 맞게 Javascript 의 자료형을 넣어주기 위해서 Sequelize 라이브러리에서 제공하는 자료형을 사용한다.
        },
        column2: {
          type: Sequelize.INTEGER.UNSIGNED, // << 얘는 index로 사용하지 못한다.
          // INT가 아니라 숫자다, FLOAT이나 DOUBLE 둘중하나다.
          // UNSIGNED 부호가 없다
          primaryKey: true, // 테이블당 하나만 가능하다.  검색에 용이하다.
          unique: true, // 데이터가 중복될 수 없다.
          autoIncrement: true, // 자동 증가
        },
      },
      {
        // 테이블에 대한 기본 설정
        sequelize,
        timestamps: true, // created_at, updated_at을 자동으로 추가한다.
        underscored: true, // 카멜을 스네이크로 바꾼다.<< createdAt -> created_at
        paranoid: false, // deleted_at을 추가한다. //true 는 추가 false 추가안함.
        // 데이터를 삭제했을 때 DB에서 아얘 없앨지 아니면 남길건지 결정한다.
        // true 면 남긴다 -> deleted_at이 추가된다.
        modelName: "Table1", //모델명은 Javascript에서 사용하는 이름
        tableName: "table1", // DB에 생성되는 테이블 이름
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    // 관계를 위한 메소드
    db.Table1.hasMany(db.Table2, {
      // 많이 갖고있다. Table 2를
      foreignKey: "table1_column2",
      //   연결하는 키
      sourceKey: "column2",
      //   상대가 저장할 키 (컬럼)
      as: "Table2s",
      //    상대를 찾거나 추가하거나 등등에서 사용
    });
  }
};
