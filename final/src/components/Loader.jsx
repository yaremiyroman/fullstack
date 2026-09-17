import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styled from 'styled-components';

const LoaderWrapper = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
`;

export default function Loader() {
    return (
        <LoaderWrapper sx={{ display: 'flex' }}>
            <CircularProgress aria-label="Loading…" />
        </LoaderWrapper>
    );
}
