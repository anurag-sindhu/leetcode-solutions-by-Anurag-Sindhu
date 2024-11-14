var pokemon = {
  firstname: 'Pika',
  lastname: 'Chu ',
  getPokeName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var pokemonName = function() {
  console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.apply(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon();
logPokemon();
console.log(pokemon)
