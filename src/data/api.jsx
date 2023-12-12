import React from 'react'

const api = () => {

    fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
   .then(response => response.json())
   .then(data => console.log(data));

  return (
    <div>api</div>
  )
}

export default api