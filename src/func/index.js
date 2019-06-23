const fetchData = async (type) => {
  const collection = await fetch(`https://swapi.co/api/${type}/`)
    .then(res => {
      if(res.status !== 200) {
        return {results: null};
      }
      return res.json();
    });
  return collection.results;
}

const getData = (obj = []) => {
  if(obj.length > 0) {
    const id = Math.floor(Math.random() * obj.length);
    return obj[id];
  }
  return null;
}

const getWinner = (pOne = {}, pTwo = {}, attribute) => {
  let winner = 'draw';
  if(pOne[attribute] > pTwo[attribute]) {
    winner = 'Player One Wins';
  } else if(pOne[attribute] < pTwo[attribute]) {
    winner = 'Player Two Wins';
  }
  return winner;
}

export default {
  fetchData,
  getData,
  getWinner,
};
