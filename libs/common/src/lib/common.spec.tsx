import { render } from '@testing-library/react';

import LearnForgeCommon from './common';

describe('LearnForgeCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LearnForgeCommon />);
    expect(baseElement).toBeTruthy();
  });
});
