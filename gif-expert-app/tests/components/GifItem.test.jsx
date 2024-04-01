import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas es <GifItem/>', () => { 

  const title = 'Super Mario';
  const url = 'https://www.lavanguardia.com/andro4all/hero/2023/05/super-mario-bros-la-pelicula.png';

  test('hacer match con el snapshot', () => { 
    const {container} = render(<GifItem title={title} url={url}/>);
    expect(container).toMatchSnapshot();
  })

  test('debe de mostrar la imagen con el url y el alt indicado', () => { 
    
    render(<GifItem title={title} url={url}/>);
    //screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const {src, alt} = screen.getByRole('img');
    expect(src).toEqual(url);
    expect(alt).toEqual(title);

  })

  test('debe de mostrar el titulo en el componente', () => { 
    render(<GifItem title={title} url={url}/>);
    expect(screen.getByText(title)).toBeTruthy();
  })

})