import Box from '@mui/material/Box';

import styled from 'styled-components';

const PlugWrapper = styled(Box)`
    margin: 20px;
    font-size: 32px;
`;

export default function Plug({ text }) {
    return (
        <PlugWrapper sx={{ display: 'flex' }}>
            <p>{text}</p>
        </PlugWrapper>
    );
}
