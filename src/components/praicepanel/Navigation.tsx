import * as React from 'react';
import styled, {ThemedStyledProps} from 'styled-components';

interface IProps {
    showNext: boolean;
    disableNext: boolean;

    showPrevious: boolean;
    disablePrevious: boolean

    next(): void;
    previous(): void;
}

const Navigation = (props: IProps) => {
    const {showPrevious, disablePrevious, previous} = props;
    const {showNext, disableNext, next} = props;

    return (
        <div>
            <Button
                show={showPrevious}
                disable={disablePrevious}
                onClick={previous}
            >Previous</Button>

            <Button
                show={showNext}
                disable={disableNext}
                onClick={next}
            >Next</Button>
        </div>
    );
}

type ButtonProps = ThemedStyledProps<{show: boolean, disable: boolean}, void>;
const Button = styled.button`
    display: ${(props: ButtonProps) => props.show ? 'inline-block' : 'none'};
    cursor: ${(props: ButtonProps) => props.disable ? 'default' : 'pointer'};
    opacity: ${(props: ButtonProps) => props.disable ? 0.6 : 1};

` as ThemedStyledProps<any, void>;

export default Navigation;