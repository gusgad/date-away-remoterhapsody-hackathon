"use strict";

const timestamp = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: "abc123",
          createdAt: timestamp,
          updatedAt: timestamp,
          answered_questions: '{"question_id": 1, "user_id": 2, "match": false};',
          matched_users: ''
        },
        {
          username: "hannah1994",
          password: "abc123",
          createdAt: timestamp,
          updatedAt: timestamp,
          answered_questions: '',
          matched_users: ''
        },
        {
          username: "robin_scherbatzsky",
          password: "abc123",
          createdAt: timestamp,
          updatedAt: timestamp,
          answered_questions: '',
          matched_users: ''
        },
        {
          username: "ivan_kjellberg",
          password: "abc123",
          createdAt: timestamp,
          updatedAt: timestamp,
          answered_questions: '',
          matched_users: ''
        },
      ],
      {}
    );

    let questions = [
      "Speilst du gerne Gitarre?",
      "Magst du Tiere?",
      "Magst du Katzen?",
      "Magst du teure Autos?",
      "Faehrst du gerne Fahrrad?",
      "Trinkst du gerne Bier?",
      "Guckst du gerne Game of Thrones?",
      "Trinkst du gerne Wine?",
      "Trinkst du gerne Wodka?",
      "Isst du gerne Pizza?",
      "Isst du gerne Spetzle?",
      "Machst du gerne Sport?",
      "Spielst du gerne Fussball?",
      "Spielst du gerne Schach?",
      "Speilst du gerne Computerspiele?",
      "Hoerst du gerne Musik?",
      "Guckst du gerne Rich and Morty?",
      "Guckst du gerne Vikings Serien?",
      "Hoerst du gerne Justin Bieber?",
      "Hoerst du gerne Taylor Swift?",
      "Hoerst du gerne Schlagermusik?",
      "Gehst du oft spazieren?",
      "Gehst du oft wandern?",
      "Schlaefst du gerne zu Hause?",
      "Unterhaeltst du dich gerne mit Freunden?",
      "Besuchst du gerne dine Familie?",
      "Hast du eine grosse Familie?",
      "Hast du Geschwister?",
      "Hast du einen Hund?",
      "Isst du gerne Sauerkraut?",
      "Isst du gerne Spätzle?",
      "Isst du gerne Pommes?",
      "Trinkst du gerne Tee?",
      "Verbringst du gerne Zeit in der Natur?",
      "Guckst du gerne Netflix?",
      "Guckst du gerne Serien?",
      "Guckst du gerne Star Wars?",
      "Liest du gerne Buecher?",
      "Guckst du gerne Harry Potter?",
      "Spielst du gerne Uno mit deinen Freunden?",
      "Isst du gerne Käse?",
      "Isst du gerne Pasta?",
      "Isst du gerne Suppe?",
      "Rauchst du?",
      "Bist du meistents Sportlich aktiv?",
      "Findest du Tom Cruise attraktiv?",
      "Findest du Leonardo Di Caprio attraktiv?",
      "Findest du Natalie Portman attraktiv?",
      "Findest du Helene Fischer attraktiv?",
      "Findest du Bruce Willis attraktiv?",
      "Findest du Matthew McConaughey attraktiv?",
      "Findest du Taylor Swift attraktiv?",
      "Hast du einen Traum?",
      "Bist du zufrieden mit deinem Leben?",
      "Würdest du etwas in deinem Leben ändern?",
      "Gehst du mit deinen Freunden um?",
      "Gehst du mit deiner Familie um?",
      "Gehst du mit deinen Geschwister um?",

      "Speilst du gerne Gitarre?",
      "Magst du Tiere?",
      "Magst du Katzen?",
      "Magst du teure Autos?",
      "Faehrst du gerne Fahrrad?",
      "Trinkst du gerne Bier?",
      "Guckst du gerne Game of Thrones?",
      "Trinkst du gerne Wine?",
      "Trinkst du gerne Wodka?",
      "Isst du gerne Pizza?",
      "Isst du gerne Spetzle?",
      "Machst du gerne Sport?",
      "Spielst du gerne Fussball?",
      "Spielst du gerne Schach?",
      "Speilst du gerne Computerspiele?",
      "Hoerst du gerne Musik?",
      "Guckst du gerne Rich and Morty?",
      "Guckst du gerne Vikings Serien?",
      "Hoerst du gerne Justin Bieber?",
      "Hoerst du gerne Taylor Swift?",
      "Hoerst du gerne Schlagermusik?",
      "Gehst du oft spazieren?",
      "Wanderst du gerne?",
      "Unterhaeltst du dich gerne mit Freunden?",
      "Besuchst du gerne dine Familie?",
      "Hast du eine grosse Familie?",
      "Hast du Geschwister?",
      "Hast du einen Hund?",
      "Isst du gerne Sauerkraut?",
      "Isst du gerne Spätzle?",
      "Isst du gerne Pommes?",
      "Gefaelt dir Ford Mustang?",
      "Trinkst du gerne Tee?",
      "Verbringst du gerne Zeit in der Natur?",
      "Guckst du gerne Netflix?",
      "Guckst du gerne Serien?",
      "Guckst du gerne Star Wars?",
      "Liest du gerne Buecher?",
      "Guckst du gerne Harry Potter?",
      "Spielst du gerne Uno mit deinen Freunden?",
      "Isst du gerne Käse?",
      "Isst du gerne Pasta?",
      "Isst du gerne Suppe?",
      "Rauchst du?",
      "Programmierst du gerne?",
      "Bist du meistents Sportlich aktiv?",
      "Findest du Tom Cruise attraktiv?",
      "Findest du Leonardo Di Caprio attraktiv?",
      "Findest du Natalie Portman attraktiv?",
      "Findest du Helene Fischer attraktiv?",
      "Findest du Bruce Willis attraktiv?",
      "Findest du Matthew McConaughey attraktiv?",
      "Findest du Taylor Swift attraktiv?",
      "Hast du einen Traum?",
      "Bist du zufrieden mit deinem Leben?",
      "Würdest du etwas in deinem Leben ändern?",
      "Gehst du mit deinen Freunden um?",
      "Gehst du mit deiner Familie um?",
      "Gehst du mit deinen Geschwister um?"
    ].sort(() => 0.5 - Math.random());
      
    questions = questions.map((question, index) => {
      const userID = Math.random() > 0 && Math.random() < 0.3 ? 2 : Math.random() > 0.3 && Math.random() < 0.6 ? 3 : 4;
      return {
        user_id: userID,
        questions_text: question,
        questions_answer: Math.random() > 0.5 ? 'Ja' : 'Nein',
        createdAt: timestamp,
        updatedAt: timestamp,
      }
    });

    

    return queryInterface.bulkInsert(
      "questions",
      questions,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

/*
CREATE TABLE `boilerplate_db`.`questions` (
  `user_id` INT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `questions_text` VARCHAR(100) NULL,
  `questions_answer` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE boilerplate_db.Users ADD answered_questions TEXT;

  INSERT INTO `boilerplate_db`.`questions` (`user_id`, `id`, `questions_text`, `questions_answer`) VALUES ('2', '5', 'Faehrst du gerne Autos?', 'Nein');

*/