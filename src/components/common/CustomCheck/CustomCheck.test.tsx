import React from 'react';
import { render } from '@testing-library/react';
import CustomCheck from './CustomCheck';

describe('CustomCheck Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <CustomCheck type="checkbox" checked={true} onChange={() => {}} />,
    );

    expect(container).toBeInTheDocument();
  });

  it('properly renders checkbox', () => {
    const { container: checkboxContainer } = render(
      <CustomCheck type="checkbox" checked={true} onChange={() => {}} />,
    );

    const commonInput = checkboxContainer.querySelector('input');

    expect(commonInput?.type).toEqual('checkbox');

    const { container: trueContainer } = render(
      <CustomCheck type="checkbox" checked={true} onChange={() => {}} />,
    );

    const trueInput = trueContainer.querySelector('input');

    expect(trueInput?.checked).toEqual(true);

    const { container: falseContainer } = render(
      <CustomCheck type="checkbox" checked={false} onChange={() => {}} />,
    );

    const falseInput = falseContainer.querySelector('input');

    expect(falseInput?.checked).toEqual(false);
  });

  it('properly renders radio', () => {
    const { container: radioContainer } = render(
      <CustomCheck
        type="radio"
        value="test"
        checked={true}
        onChange={() => {}}
      />,
    );

    const radioInput = radioContainer.querySelector('input');

    expect(radioInput?.type).toEqual('radio');

    const { container: trueContainer } = render(
      <CustomCheck
        type="radio"
        value="test"
        checked={true}
        onChange={() => {}}
      />,
    );

    const trueInput = trueContainer.querySelector('input');

    expect(trueInput?.checked).toEqual(true);

    const { container: falseContainer } = render(
      <CustomCheck
        type="radio"
        value="test"
        checked={false}
        onChange={() => {}}
      />,
    );

    const falseInput = falseContainer.querySelector('input');

    expect(falseInput?.checked).toEqual(false);
  });
});
