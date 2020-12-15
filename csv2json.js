const firebaseClient = require("./firebase-client.js");
const util = require('util')


let db = firebaseClient.db;

let input = `roomId,gameId,victoryType,date,player,civilian,scientific,commercial,guild,wonders,progress,coins,military,total,winner
1,1,civilian,23/11/2019,Lau,7,8,9,5,16,5,3,0,53,true
1,1,civilian,23/11/2019,Ron,23,5,3,6,5,0,9,0,51,false
1,2,civilian,23/11/2019,Lau,15,0,3,7,8,0,7,0,40,false
1,2,civilian,23/11/2019,Ron,13,6,6,3,13,0,7,5,53,true
1,3,civilian,23/11/2019,Lau,13,6,6,0,14,7,7,5,58,true
1,3,civilian,23/11/2019,Ron,6,4,3,16,8,0,2,0,39,false
1,4,civilian,24/11/2019,Lau,25,13,3,0,9,7,2,0,59,false
1,4,civilian,24/11/2019,Ron,13,2,9,16,14,0,6,2,62,true
1,5,science,24/11/2019,Lau,0,0,0,0,0,0,0,0,100,true
1,5,science,24/11/2019,Ron,0,0,0,0,0,0,0,0,0,false
1,6,civilian,24/11/2019,Lau,27,2,6,15,20,0,4,0,74,true
1,6,civilian,24/11/2019,Ron,15,10,6,6,11,4,4,5,61,false
1,7,civilian,24/11/2019,Lau,18,1,6,5,12,0,5,2,49,false
1,7,civilian,24/11/2019,Ron,14,11,6,8,12,7,11,0,69,true
1,8,civilian,28/11/2019,Lau,12,0,9,12,12,0,21,0,66,false
1,8,civilian,28/11/2019,Ron,36,4,3,6,9,7,8,2,75,true
1,9,civilian,28/11/2019,Lau,26,0,6,9,8,0,6,0,55,false
1,9,civilian,28/11/2019,Ron,21,3,9,8,17,0,9,5,72,true
1,10,civilian,28/11/2019,Lau,34,3,6,0,16,0,8,5,72,true
1,10,civilian,28/11/2019,Ron,16,3,6,12,16,0,7,0,60,false
1,11,civilian,28/11/2019,Lau,17,11,9,0,19,7,2,10,75,true
1,11,civilian,28/11/2019,Ron,22,3,6,14,6,0,3,0,54,false
1,12,civilian,01/12/2019,Lau,18,5,6,6,16,0,11,0,62,false
1,12,civilian,01/12/2019,Ron,21,2,6,13,15,0,10,5,72,true
1,13,civilian,01/12/2019,Lau,21,4,6,10,15,13,9,0,78,true
1,13,civilian,01/12/2019,Ron,28,2,6,11,6,0,10,5,68,false
2,14,civilian,12/01/2020,Norma,18,3,6,6,20,0,1,10,64,false
2,14,civilian,12/01/2020,Lau,27,9,3,11,6,4,4,0,64,true
2,15,civilian,12/01/2020,Norma,27,5,9,0,9,0,8,5,63,true
2,15,civilian,12/01/2020,Lau,22,5,0,11,13,0,9,0,60,false
2,16,civilian,16/01/2020,Norma,23,2,0,12,9,0,3,2,51,false
2,16,civilian,16/01/2020,Lau,31,2,6,9,13,0,9,0,70,true
2,17,civilian,16/01/2020,Norma,22,7,6,12,6,11,15,0,79,true
2,17,civilian,16/01/2020,Lau,39,4,0,8,14,0,7,0,72,false
2,18,civilian,18/01/2020,Norma,17,4,9,5,6,11,6,5,63,true
2,18,civilian,18/01/2020,Lau,22,3,6,8,21,0,2,0,62,false
2,19,civilian,18/01/2020,Norma,15,4,3,10,16,7,5,0,60,true
2,19,civilian,18/01/2020,Lau,15,6,6,4,6,4,3,2,46,false
1,20,civilian,01/02/2020,Lau,27,2,9,5,7,7,10,2,69,false
1,20,civilian,01/02/2020,Ron,25,7,6,19,10,0,11,0,78,true
1,21,civilian,01/02/2020,Lau,21,3,9,5,13,0,22,2,75,true
1,21,civilian,01/02/2020,Ron,28,4,6,4,11,4,9,0,66,false
1,22,civilian,01/02/2020,Lau,28,11,3,6,13,23,7,0,91,true
1,22,civilian,01/02/2020,Ron,27,3,6,5,16,0,5,10,72,false
1,23,civilian,29/02/2020,Lau,26,5,6,3,18,0,7,0,65,true
1,23,civilian,29/02/2020,Ron,19,5,6,13,7,0,13,2,65,false
1,24,civilian,29/02/2020,Lau,25,4,6,6,12,6,6,0,65,true
1,24,civilian,29/02/2020,Ron,31,4,6,8,5,0,4,5,63,false
1,25,civilian,08/03/2020,Lau,32,4,9,0,19,7,2,0,73,false
1,25,civilian,08/03/2020,Ron,5,7,6,34,11,9,22,2,96,true
1,26,civilian,08/03/2020,Lau,30,3,3,8,11,0,14,0,69,false
1,26,civilian,08/03/2020,Ron,37,0,6,11,8,0,10,5,77,true
1,27,army,08/03/2020,Lau,0,0,0,0,0,0,0,0,0,false
1,27,army,08/03/2020,Ron,0,0,0,0,0,0,0,0,100,true
1,28,civilian,28/03/2020,Lau,10,7,15,6,16,9,2,0,65,true
1,28,civilian,28/03/2020,Ron,32,4,0,8,9,7,2,2,64,false
1,29,civilian,28/03/2020,Lau,26,6,3,0,19,4,7,0,65,true
1,29,civilian,28/03/2020,Ron,26,4,6,4,9,0,11,2,62,false
1,30,civilian,28/03/2020,Lau,22,7,0,22,16,0,0,2,69,true
1,30,civilian,28/03/2020,Ron,38,2,9,0,11,0,8,0,68,false
1,31,civilian,11/04/2020,Lau,21,4,3,4,12,0,5,0,49,false
1,31,civilian,11/04/2020,Ron,26,6,6,5,9,0,7,2,61,true
1,32,civilian,11/04/2020,Lau,22,4,6,0,10,4,5,2,53,false
1,32,civilian,11/04/2020,Ron,26,7,9,10,11,0,17,0,80,true
1,33,civilian,11/04/2020,Lau,25,6,3,12,17,0,1,0,64,false
1,33,civilian,11/04/2020,Ron,28,6,6,0,9,13,7,2,71,true
1,34,civilian,18/04/2020,Lau,25,8,3,7,13,0,9,2,67,false
1,34,civilian,18/04/2020,Ron,16,5,6,11,9,13,10,0,70,true
1,35,civilian,18/04/2020,Lau,35,6,6,0,20,0,8,2,77,true
1,35,civilian,18/04/2020,Ron,23,6,6,13,6,13,3,0,70,false
1,36,civilian,25/04/2020,Lau,29,2,9,6,14,7,13,0,80,true
1,36,civilian,25/04/2020,Ron,29,10,0,14,8,9,0,0,70,false
1,37,civilian,25/04/2020,Lau,22,2,6,6,9,0,9,2,56,false
1,37,civilian,25/04/2020,Ron,22,9,3,17,12,7,3,0,73,true
3,38,civilian,25/04/2020,Adri,22,9,3,17,12,7,3,0,73,false
3,38,civilian,25/04/2020,Lau,22,9,3,17,13,7,3,0,74,true
3,39,civilian,25/04/2020,Adri,22,9,3,17,15,7,3,0,75,true
3,39,civilian,25/04/2020,Lau,22,9,3,17,13,7,3,0,74,true
4,40,civilian,25/04/2020,Lau,22,9,3,17,12,7,3,0,73,false
4,40,civilian,25/04/2020,Wen,22,9,3,17,13,7,3,0,74,true
4,41,civilian,25/04/2020,Lau,22,9,3,17,12,7,3,0,73,true
4,41,civilian,25/04/2020,Wen,22,9,3,17,12,7,0,0,70,false`;


let players, boardGame, rooms, gameList, scoreCardsList;

players = [
    {
        id: "lau",
        username: "Lau",
        pictureUrl: "../assets/profilePictures/profilePic1.jpg",
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
        id: "ron",
        username: "Ron",
        pictureUrl: "../assets/profilePictures/profilePic2.jpg",
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
        id: "norma",
        username: "Norma",
        pictureUrl: "../assets/profilePictures/profilePic3.jpg",
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
      id: "wen",
      username: "Wen",
      pictureUrl: "../assets/profilePictures/profilePic4.jpg",
      createdOn: new Date(),
      lastUpdate: new Date()
    },
    {
      id: "adri",
      username: "Adri",
      pictureUrl: "../assets/profilePictures/profilePic5.jpg",
      createdOn: new Date(),
      lastUpdate: new Date()
    },

];

boardGame = [{
    id: "7wduel",
    name: "7 Wonders Duel",
    players: {
        min: 2,
        max: 2
    },
    averagePlayTime: 25,
    url: "../assets/profilePictures/7WondersPicture.jpg"
}];


rooms = [
    {
        id: "7wduel-lau-ron",
        boardGame: '7 Wonders Duel',
        players: [
            {
                username: 'Lau',
                color: '#713871',
                pictureUrl: "../assets/profilePictures/profilePic1.jpg",
            },
            {
                username: 'Ron',
                color: '#1C54A3',
                pictureUrl: "../assets/profilePictures/profilePic2.jpg",
            }
        ],
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
        id: "7wduel-lau-norma",
        boardGame: '7 Wonders Duel',
        players: [
            {
                username: 'Lau',
                color: '#038649',
                pictureUrl: "../assets/profilePictures/profilePic1.jpg",
            },
            {
                username: 'Norma',
                color: '#F7C93E',
                pictureUrl: "../assets/profilePictures/profilePic3.jpg",
            }
        ],
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
        id: "7wduel-adri-lau",
        boardGame: '7 Wonders Duel',
        players: [
            {
                username: 'Adri',
                color: '#713871',
                pictureUrl: "../assets/profilePictures/profilePic5.jpg",
            },
            {
                username: 'Lau',
                color: '#1C54A3',
                pictureUrl: "../assets/profilePictures/profilePic1.jpg",
            }
        ],
        createdOn: new Date(),
        lastUpdate: new Date()
    },
    {
        id: "7wduel-lau-wen",
        boardGame: '7 Wonders Duel',
        players: [
            {
                username: 'Lau',
                color: '#038649',
                pictureUrl: "../assets/profilePictures/profilePic1.jpg",
            },
            {
                username: 'Wen',
                color: '#F7C93E',
                pictureUrl: "../assets/profilePictures/profilePic4.jpg",
            }
        ],
        createdOn: new Date(),
        lastUpdate: new Date()
    },
];


let parse = (input) => {
    let output = [];
    let csvArray = input.split("\n");
    let csvColumns = csvArray[0].split(",");
    csvArray.shift();
    csvArray.forEach((row, rowIndex) => {
        let newObj = new Object();
        csvColumns.forEach((columName, columnIndex) => {
            let values = row.split(",");
            newObj[columName] = values[columnIndex];
        });
        output.push(newObj);
    });
    return output;
}


let createGames = (games) => {
    let scoreCardsOutput = {};
    let gamesOutput = {};
    games.forEach(element => {
        //Scorecards
        let dateFormatted = parseDate(element.date);
        let scoreCard = {
            player: element.player,
            scores: {
                civilian: element.civilian,
                scientific: element.scientific,
                commercial: element.commercial,
                guild: element.guild,
                wonders: element.wonders,
                progress: element.progress,
                coins: element.coins,
                military: element.military,
                total: element.total
            },
            createdOn: dateFormatted 
        };
        if (!scoreCardsOutput[element.gameId]) {
            scoreCardsOutput[element.gameId] = [];
            scoreCardsOutput[element.gameId].push(scoreCard);
        }
        else {
            scoreCardsOutput[element.gameId].push(scoreCard);
        }

        //Games
        let scoreCardSummary = {
            username: element.player,
            score: element.total,
            winner: element.winner
        };
        if (!gamesOutput[element.gameId]) {
            gamesOutput[element.gameId] = {
                roomId: element.roomId,
                victoryType: element.victoryType,
                createdOn: element.date,
                scoreCards: [scoreCardSummary]
            };
        }
        else {
            gamesOutput[element.gameId].scoreCards.push(scoreCardSummary);
        }


    });
    scoreCardsList = scoreCardsOutput;
    gameList = gamesOutput;

};

createGames(parse(input));

let insertData = (data, entity) => {
    data.forEach(element => {
        let id = element.id;
        delete element.id;
        if (id) {
            db.collection(entity).doc(id).set(element)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        }
        else {
            db.collection(entity).add(element)
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        }
    });
};



let insertGames = (json) => {
    for (let prop in json) {
        let roomId;
        if (json[prop].roomId == 1)
            roomId = '7wduel-lau-ron';
        else if (json[prop].roomId == 2)
          roomId = '7wduel-lau-norma';
        else if (json[prop].roomId == 3)
          roomId = '7wduel-adri-lau';
        else if (json[prop].roomId == 4)
            roomId = '7wduel-lau-wen';

        delete json[prop].roomId;
        json[prop].createdOn = parseDate(json[prop].createdOn);

        let path = db.collection('rooms').doc(roomId).collection('games');

        path.add(json[prop])
            .then(function (docRef) {
                console.log("Game Document written with ID: ", docRef.id);
            
                let scoreCards = scoreCardsList[prop];
                
                scoreCards.forEach(element => {
                    db.collection('rooms').doc(roomId).collection('games').doc(docRef.id).collection('scorecards').add(element)
                        .then(function (scorecardDocRef) {
                            console.log("Scorecard written!", `rooms/${roomId}/games/${docRef.id}/scorecard/${scorecardDocRef.id}`);
                        })
                        .catch(function (error) {
                            console.error("Error writing scorecard: ", error);
                        });
                });

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });

    }

};

function parseDate (str) {
    var parts = str.split("/");
    var dt = new Date(parseInt(parts[2], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[0], 10))
    return dt;
};

//Real data
insertData(players, "players");
insertData(boardGame, "boardgames");
insertData(rooms, "rooms");
insertGames(gameList);



//insertData(rooms2, "rooms");
// let inputTest =  `roomId,gameId,victoryType,date,player,civilian,scientific,commercial,guild,wonders,progress,coins,military,total,winner
// 4,60,civilian,23/11/2019,Lau,7,8,9,5,16,5,3,0,53,false
// 4,60,civilian,23/11/2019,Wen,7,8,9,5,16,5,3,0,56,true
// 4,60,civilian,23/11/2019,Lau,7,8,9,5,16,5,3,0,80,true
// 4,60,civilian,23/11/2019,Wen,7,8,9,5,16,5,3,0,73,true
// 3,60,civilian,23/11/2019,Lau,7,8,9,5,16,5,3,0,60,true
// 3,60,civilian,23/11/2019,Adri,7,8,9,5,16,5,3,0,53,false
// 3,60,civilian,23/11/2019,Lau,7,8,9,5,16,5,3,0,53,false
// 3,60,civilian,23/11/2019,Adri,7,8,9,5,16,5,3,0,56,true`;
// createGames(parse(inputTest));
// insertGames(gameList);
// insertData(rooms3, "rooms");



