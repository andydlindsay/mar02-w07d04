import { renderHook, act } from '@testing-library/react-hooks';
// import useInput from '../useInput';

test.skip('should start with initial value', () => {
  const initialValue = 'hello world';
  const { result } = renderHook(() => useInput(initialValue));
  const [ value ] = result.current;
  expect(value).toBe(initialValue);
});

test.skip('should be updateable with a new value', () => {
  const newValue = 'something new';
  const fakeEvent = { target: { value: newValue } };
  const { result } = renderHook(() => useInput(''));
  console.log(result);
  const onChange = result.current[1];
  act(() => onChange(fakeEvent));
  const value = result.current[0];
  expect(value).toBe(newValue);
});
