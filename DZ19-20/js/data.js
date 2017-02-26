var usersArr = JSON.parse(JSON.stringify(users));

/* task 1 */

var x = _.uniq(_.flatten(_.map(usersArr, 'skills'))); // сортировал по алфавиту функцией sortBy, но она не учитывает верхний регистр. Поэтому нашел костыль

// временное хранилище позиции и сортируемого значения
var map = x.map(function(e, i) {
  return { index: i, value: e.toLowerCase() };
});

// сортируем карту, содержащую нормализованные значения
map.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// контейнер для результирующего порядка
var skills = map.map(function(e) {
  return x[e.index];
});

console.log(skills);

/* task 2 */

var namesSortedByFriends = _.map(_.sortBy(usersArr, ['friends']), 'name');
console.log(namesSortedByFriends);

/* task 3 */


var friendsNames = _.uniq(_.map(_.flatten(_.map(usersArr, 'friends')), 'name'));
console.log(friendsNames);
