import { useState, useReducer, useMemo, useRef, useCallback } from "react";

import Search from "./Search";
import useCharacters from "../hooks/useCharacters"; // Custom Hook para traer los Characters

import "../styles/index.css";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState(""); // Estado para el input
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: favorite,
    });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div>
      <div>
        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
      </div>

      <div className="Characters">
        {favorites.favorites.map((favorite) => (
          <div className="Character-card" key={favorite.id}>
            <img src={favorite.image} alt={favorite.name} />
            <h1>{favorite.name}</h1>
            <h4>FAVORITE</h4>
          </div>
        ))}

        {filteredUsers.map((character) => (
          <div className="Character-card" key={character.id}>
            <img src={character.image} alt={`Imagen de ${character.name}`} />
            <h2>{character.name}</h2>
            <button
              className="button"
              type="button"
              onClick={() => handleClick(character)}
            >
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
