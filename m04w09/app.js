$(document).ready(function() {
  console.log('Hello from console! 👋');

  // All the required elements within the DOM
  const pokemonCard = $('#pokemon-card');
  const pokemonName = $('#pokemon-name');
  const pokemonAbilities = $('#pokemon-abilities');
  const pokemonImage = $('#pokemon-image');
  const loadingPokeball = $('#loading-pokeball');

  // Event handler for the submit action
  const handleSubmit = event => {
    event.preventDefault();

    pokemonCard.hide();
    loadingPokeball.show();

    const pokemonInput = $('#pokemon-input').val();

    setTimeout(() => {
      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`,
        method: 'GET'
      })
        .then(data => {
          // console.log(data);

          if (!data.name) {
            pokemonImage.attr(
              'src',
              'https://www.clipartmax.com/png/full/129-1298464_open-pokeball-download-open-pokeball.png'
            );
            pokemonName.text('There is no pokemon with that name :(');
            pokemonAbilities.empty();

            loadingPokeball.hide();
            pokemonCard.show();

            return;
          }

          pokemonImage.attr('src', data.sprites.front_default);
          pokemonImage.show();
          pokemonName.text(data.name);
          pokemonAbilities.empty();

          for (const ab of data.abilities) {
            const abilityMarkup = `<li>${ab.ability.name}</li>`;
            pokemonAbilities.append(abilityMarkup);
          }

          loadingPokeball.hide();
          pokemonCard.show();
        })
        .catch(error => {
          // console.log(error);

          if (error.status === 404) {
            pokemonImage.attr(
              'src',
              'https://www.clipartmax.com/png/full/129-1298464_open-pokeball-download-open-pokeball.png'
            );
            pokemonName.text('There is no pokemon with that name :(');
            pokemonAbilities.empty();

            loadingPokeball.hide();
            pokemonCard.show();
          }
        });
    }, 2000);
  };

  // Adding the event handler to the element that will trigger it
  $('#pokemon-form').submit(handleSubmit);
});
