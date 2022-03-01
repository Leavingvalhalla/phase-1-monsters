document.addEventListener('DOMContentLoaded', () => {
  const firstFiftyMonsters = fetch('http://localhost:3000/monsters?_limit=50', {
    headers: {
      'Content-Type': 'application/json',
      // prettier-ignore
      'Accept': 'application/json',
    },
    body: {},
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log('stuff');
    });
});
