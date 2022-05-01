import { render } from '@testing-library/react';

import ContentTitle from './content-title';

describe('ContentTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentTitle />);
    expect(baseElement).toBeTruthy();
  });
});
