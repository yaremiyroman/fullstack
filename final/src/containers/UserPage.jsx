import { Alert, Box, Paper, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function formatFieldValue(value) {
  if (value === null || value === undefined || value === '') {
    return '-';
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

function UserPage() {
  const user = useSelector(state => state.users.user);

  if (!user) {
    return <Alert severity="info">User data is not available.</Alert>;
  }

  const userFields = Object.entries(user);

  return (
    <Box sx={{ maxWidth: 720, mx: 'auto', py: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        User Info
      </Typography>

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack spacing={1.5}>
          {userFields.map(([fieldName, fieldValue]) => (
            <Box
              key={fieldName}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '180px 1fr' },
                gap: 1,
                borderBottom: '1px solid',
                borderColor: 'divider',
                pb: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                {fieldName}
              </Typography>
              <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                {formatFieldValue(fieldValue)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

export default UserPage;
