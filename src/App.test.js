import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('The counter starts at 0', () => {
  // App 컴포넌트를 렌더링
  render(<App />);
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0)
});

test("minus button has correct text", () => {
  // App 컴포넌트를 렌더링
  render(<App/>)
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const buttonElement = screen.getByTestId("plus-button")
  // id가 plus-button인 엘레멘트가 0인지 테스트
  expect(buttonElement).toHaveTextContent("+");
})

test("minus button has correct text", () => {
  // App 컴포넌트를 렌더링
  render(<App/>)
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const buttonElement = screen.getByTestId("minus-button")
  // id가 minus-button인 엘레멘트가 0인지 테스트
  expect(buttonElement).toHaveTextContent("-");
})

test("When the + button is clicked, the counter changes to 1", () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App/>);
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const buttonElement = screen.getByTestId("plus-button");
  // click plus button
  fireEvent.click(buttonElement)
  // 카운터가 0에서 +1 되어서 1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1)
})

test("When the - button is clicked, the counter changes to -1", () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App/>);
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const buttonElement = screen.getByTestId("minus-button");
  // click minus button
  fireEvent.click(buttonElement)
  // 카운터가 0에서 -1 되어서 -1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1)
});

test("on/off button has blue color", () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App/>);
  // screen object를 이용해서 원하는 엘레멘트에 접근 (접근할 때 ID로 접근)
  const buttonElement = screen.getByTestId("on/off-button")
  // on/off 버튼 색깔을 blue로
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue"});
})

test("prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App/>);

  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");

  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
})