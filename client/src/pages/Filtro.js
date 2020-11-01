import React from 'react';

const Filtro = ({ filtro }) => {
  return (
    <select onChange={filtro}>
      <option value="-1">Todos</option>
      <option value="0">HTML</option>
      <option value="1">CSS</option>
      <option value="2">JavaScript</option>
    </select>
  );
};

export default Filtro;
