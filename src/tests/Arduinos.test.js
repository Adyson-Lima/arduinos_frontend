import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Arduinos from '../pages/Arduinos';

describe('testes da tela Arduinos', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Arduinos/>
      </BrowserRouter>
    );
  });

  it('Existe card em Arduinos?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it('Existe link Novo em Arduinos?', () => {
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

});