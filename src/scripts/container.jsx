// Container/Presentation pattern
// it enforces separation of concerns by separating
// the view from the logic

//Presentational component
import React from 'react';

export function DogImages({ dogs }) {
  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)

}

// Container component
function DogImagesContainer() {
  const [dogs, setDogs] = React.useState([])

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => res.json())
      .then(({ message }) => setDogs({ dogs: message }))
  }, [])

  return (
    <DogImages dogs={dogs} />
  )
}

// Sometimes we can replace the container component with hooks



