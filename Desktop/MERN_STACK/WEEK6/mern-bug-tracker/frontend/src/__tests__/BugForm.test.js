import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../BugForm';

test('renders and submits the bug form', () => {
  const handleSubmit = jest.fn();
  render(<BugForm onSubmit={handleSubmit} />);
  fireEvent.change(screen.getByPlaceholderText(/title/i), { target: { value: 'Bug title' } });
  fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: 'Bug desc' } });
  fireEvent.click(screen.getByText(/report bug/i));
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Bug title', description: 'Bug desc' });
});
