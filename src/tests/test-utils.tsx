import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

interface CustomRenderOptions extends RenderOptions {
  initialEntries?: string[];
}

const customRender = (ui: React.ReactElement, options?: CustomRenderOptions) => {
  const { initialEntries, ...renderOptions } = options || {};

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
    </MemoryRouter>,
    renderOptions
  );
};

export * from '@testing-library/react';

export { customRender as render };