import { render } from '@testing-library/react';
import Header from './admin-feature-header';
describe('AdminFeatureHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
