import Alert from '@mui/material/Alert';

import styled from 'styled-components';

const MessageWrapper = styled(Alert)`
    color: red;
    font-size: 32px;
`;

export default function Error({ message }) {
    return (
        <MessageWrapper severity="error">
            ERROR: {message}
        </MessageWrapper>
    );
}
