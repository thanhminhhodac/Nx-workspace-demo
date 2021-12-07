import { render } from '@testing-library/react';
import Dashboard from './admin-pages-dashboard';
describe('AdminPagesDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dashboard />);
    expect(baseElement).toBeTruthy();
  });
});
