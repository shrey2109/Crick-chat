const createName = (length) => {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}





const teams = ['Bangladesh', 'India', 'Australia', 'Pakistan', 'England', 'SouthAfrica', 'WestIndies', 'ShriLanka', 'Zimbabwe', 'Afghanistan']
const toss = ['bat', 'bowl']
const matchType = ['ODI', 'T20', 'Test'] 
const teamno = Number.parseInt(Math.random()*8);
const team1 = teams[teamno];
const team2 = teams[teamno+1]; 
const run = Number.parseInt(Math.random()*200);
const bat1Run = Number.parseInt(Math.random()*run/2);
const bat1Four = Number.parseInt(bat1Run/10);
const bat1Six = Number.parseInt(bat1Run/20);
const bat1Ball = bat1Run+13;
const bat2Run = Number.parseInt(Math.random()*run/3);
const bat2Four = Number.parseInt(bat2Run/10);
const bat2Six = Number.parseInt(bat2Run/20);
const bat2Ball = bat2Run+7;
const wicket = Number.parseInt(Math.random()*10);
const over = Number.parseInt(Math.random()*20);

export const scoreBoardData={
    "apikey": "2746e36b-2701-4a8a-95db-bceaa32f41cf",
    "data": [
      {
        "id": "a4d9c599-b0fe-437a-be2d-081cad030155",
        "team1": team1,
        "team2": team2, 
        "name": team1 + " vs " + team2,
        "matchType": matchType[Number.parseInt(Math.random()*2)],
        "status": team1 + " opt to " + toss[Number.parseInt(Math.random()*1)],
        "venue": team2,

        "r": run,
        "w": wicket,
        "o": over,
        "inning": team1,
        "score": team1 + " : " + run+"/"+wicket+"("+over+")",

        "b1n": createName(Number.parseInt(10)),
        "b1r": bat1Run,
        "b1b": bat1Ball,
        "b1f": bat1Four,
        "b1s": bat1Six,
        "b1sr": ((bat1Run/bat1Ball)*100).toFixed(2),
        
        "b2n": createName(Number.parseInt(10)),
        "b2r": bat2Run,
        "b2b": bat2Ball,
        "b2f": bat2Four,
        "b2s": bat2Six,
        "b2sr": ((bat2Run/bat2Ball)*100).toFixed(2),
        
        "bn": createName(Number.parseInt(10)),
        "bo": (over/4).toFixed(1),
        "br": Number.parseInt(Math.random()*30),
        "bmo": Number.parseInt(Math.random()*3),
        "bw": Number.parseInt(Math.random()*wicket),
        "beco": (Math.random()*10).toFixed(2),

        "partnership": bat1Run+bat2Run,
        "commentry": createName(Number.parseInt(10)),
        "lastWikt": run-bat1Run,
        "umpire": createName(Number.parseInt(10)),
        "thirdumpire": createName(Number.parseInt(10)),
        
        "hasSquad": true,
        "matchStarted": true,
        "matchEnded": false
      },
    ],
  }