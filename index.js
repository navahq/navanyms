/**
 * People who work at Nava are people first, but for fun sometimes we use a
 * collective noun. Some people have preferences, others like the variety :)
 */
var rootNoun = 'Nava';
var navas = [
  'Navaardvarks',
  'Navaberries',
  'Navaboos',
  'Navacados',
  'Navaguavas',
  'Navaknights',
  'Navalanches',
  'Navalavas',
  'Navallamas',
  'Navallelujahs',
  'Navamons',
  'Navanados',
  'Navanators',
  'Navanauts',
  'Navaneers',
  'Navant-gardes',
  'Navanuggets',
  'Navapreneurs',
  'Navaramas',
  'Navarinas',
  'Navarinos',
  'Navarinxs',
  'Navaroos',
  'Navarugulas',
  'Navarwhals',
  'Navasauri',
  'Navascholars',
  'Navatars',
  'Navatinis'
];

/**
 * Rotate through the navanyms
 * @param {HTMLElement} nounElement - The HTML element that wraps the Navanym
 * @param {Number} speed - Shuffle speed (in milliseconds)
 */
function navanyms(nounElement, speed) {
  var target = Math.floor(Math.random() * navas.length);
  var targetNoun = navas[target];
  var subtractInterval;
  var addInterval;
  var shuffleTimeout = speed || 2500;
  var typingInterval = 100;

  function subtractToNoun() {
    var current = nounElement.textContent;
    // subtract a character
    var next = current.substr(0, current.length - 1);
    nounElement.textContent = next;

    // stop subtracting letters when we reach the root
    if (next === rootNoun) {
      clearInterval(subtractInterval);
      // immediately start adding letters
      addInterval = setInterval(addToNoun, typingInterval);
    }
  };

  function addToNoun() {
    var current = nounElement.textContent;
    // add a letter
    var next = targetNoun.substr(0, current.length + 1);
    nounElement.textContent = next;
    // stop if we've reached our target
    if (next === targetNoun) {
      clearInterval(addInterval);
      // wait to shuffle again
      setTimeout(shuffle, shuffleTimeout);
    }
  };

  // pick a random collective noun
  function shuffle() {
    var oldTarget = target;
    while (target === oldTarget) {
      target = Math.floor(Math.random() * (navas.length - 1));
    }
    targetNoun = navas[target];
    // start subtracting letters
    subtractInterval = setInterval(subtractToNoun, typingInterval);
  };

  // kick it off
  shuffle();
}

export default navanyms;
