import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// mock completo
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  
  const category = 'the joker';

  test('debe de mostrar el loaging inciaimente', () => { 
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category}/>);

    expect(screen.getByText('Cargando ...'));
    expect(screen.getByText(category));

  })

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

    const gifs = [{
      id:'1234567890',
      title:"The Joker",
      url:"https://media.giphy.com/media/l0MYtLqKZJ7xOaYkI/img.jpg"
    },
    {
      id:'65465465',
      title:"goku",
      url:"https://media.giphy.com/media/l0MYtLqKZJ7xOaYkI/test.png"
    }
  ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category}/>);   
    
    expect(screen.getAllByRole('img').length).toBe(2);
  })

})