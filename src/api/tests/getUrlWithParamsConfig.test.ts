import getUrlWithParamsConfig, { EndPoints } from '../getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Function expect two arguments "getPokemons" and { name: "Pikachu" }. Return object with fields "pathname", "protocol", "host" and { name: "Pikachu" }', () => {
    const url = getUrlWithParamsConfig(EndPoints.getPokemons, { name: 'Pikachu' });

    expect(url).toEqual({
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      query: { name: 'Pikachu' },
    });
  });

  test('Function expect two arguments "getPokemons" and { limit: "15" }. Return object with fields "pathname", "protocol", "host" and { limit: "15" }', () => {
    const url = getUrlWithParamsConfig(EndPoints.getPokemons, { limit: '15' });

    expect(url).toEqual({
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      query: { limit: '15' },
    });
  });

  test('Function expect two arguments "getPokemon" and { id: "25" }. Return object with fields "pathname", "protocol", "host" and empty object', () => {
    const url = getUrlWithParamsConfig(EndPoints.getPokemon, { id: '25' });

    expect(url).toEqual({
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      protocol: 'http',
      query: {},
    });
  });
});
