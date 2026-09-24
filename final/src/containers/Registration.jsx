import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import { addUser } from '../slices/usersSlice';

import {
    MIN_TEXT_LENGTH,
    MAX_TEXT_LENGTH,
    EMAIL_REGEX,
} from '../data/constants';

import { validateRegisterForm } from '../validators/registration';

const INITIAL_FORM_VALUES = {
    firstName: '',
    secondName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    policyConsent: false,
};

function Register() {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isLoading = useSelector(state => state.users.loading);

    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.target;

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleCheckboxChange = event => {
        const { name, checked } = event.target;

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(false);

        if (!validateRegisterForm(formValues, setErrors)) {
            return;
        }

        dispatch(addUser({
            firstName: formValues.firstName,
            userName: formValues.firstName,
            secondName: formValues?.secondName ?? null,
            dateOfBirth: formValues.dateOfBirth,
            email: formValues.email,
            password: formValues.password,
            phone: formValues.password,
        }));

        setIsSubmitted(true);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ maxWidth: 520, mx: 'auto', py: 3 }}
        >
            <Stack spacing={2.5}>
                <Typography variant="h4" component="h1">
                    Register
                </Typography>

                {isSubmitted && (
                    <Alert severity="success">
                        Registration form was submitted successfully (simulated submit).
                    </Alert>
                )}

                <TextField
                    required
                    label="Name"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName}
                    slotProps={{
                        htmlInput: { minLength: MIN_TEXT_LENGTH, maxLength: MAX_TEXT_LENGTH },
                    }}
                />

                <TextField
                    label="Second Name"
                    name="secondName"
                    value={formValues.secondName}
                    onChange={handleChange}
                    error={Boolean(errors.secondName)}
                    helperText={errors.secondName}
                    slotProps={{
                        htmlInput: { minLength: MIN_TEXT_LENGTH, maxLength: MAX_TEXT_LENGTH },
                    }}
                />

                <TextField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formValues.dateOfBirth}
                    onChange={handleChange}
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={{
                        '& input::-webkit-datetime-edit-day-field, & input::-webkit-datetime-edit-month-field, & input::-webkit-datetime-edit-year-field, & input::-webkit-datetime-edit-text': {
                            color: formValues.dateOfBirth ? 'inherit' : 'transparent',
                        },
                    }}
                />

                <TextField
                    required
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formValues.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone || 'Use +380XXXXXXXXX or 0XXXXXXXXX format.'}
                />

                <TextField
                    required
                    label="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                />

                <TextField
                    required
                    label="Password"
                    name="password"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                />

                <TextField
                    required
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    error={Boolean(errors.confirmPassword)}
                    helperText={errors.confirmPassword}
                />

                <Box>
                    <FormControlLabel
                        control={(
                            <Checkbox
                                name="policyConsent"
                                checked={formValues.policyConsent}
                                onChange={handleCheckboxChange}
                            />
                        )}
                        label="I agree to the policy consent"
                    />
                    {errors.policyConsent && (
                        <Typography variant="body2" color="error">
                            {errors.policyConsent}
                        </Typography>
                    )}
                </Box>

                <Button type="submit" variant="contained" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
            </Stack>
        </Box>
    );
}

export default Register;
