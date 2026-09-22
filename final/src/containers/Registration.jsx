import { useState } from 'react';
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

// import { UPLOAD_IMAGES_URL } from '../api';
// import categories from '../data/categories.json';
// import { addPost, clearCurrentPost } from '../slices/postsSlice';
// import { generateDummyUUID } from '../utils/utils';

const MIN_TEXT_LENGTH = 3;
const MAX_TEXT_LENGTH = 255;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UKRAINIAN_PHONE_REGEX = /^(?:\+380\d{9}|380\d{9}|0\d{9})$/;

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

function normalizePhone(value) {
    return value.replace(/[\s()-]/g, '');
}

function Register() {
    const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const validateForm = () => {
        const nextErrors = {};
        const trimmedFirstName = formValues.firstName.trim();
        const trimmedSecondName = formValues.secondName.trim();
        const trimmedPhone = normalizePhone(formValues.phone.trim());
        const trimmedEmail = formValues.email.trim();

        if (!trimmedFirstName) {
            nextErrors.firstName = 'Name is required.';
        } else if (trimmedFirstName.length < MIN_TEXT_LENGTH) {
            nextErrors.firstName = `Name must be at least ${MIN_TEXT_LENGTH} characters.`;
        } else if (trimmedFirstName.length > MAX_TEXT_LENGTH) {
            nextErrors.firstName = `Name must be at most ${MAX_TEXT_LENGTH} characters.`;
        }

        if (trimmedSecondName) {
            if (trimmedSecondName.length < MIN_TEXT_LENGTH) {
                nextErrors.secondName = `Second name must be at least ${MIN_TEXT_LENGTH} characters.`;
            } else if (trimmedSecondName.length > MAX_TEXT_LENGTH) {
                nextErrors.secondName = `Second name must be at most ${MAX_TEXT_LENGTH} characters.`;
            }
        }

        if (!trimmedPhone) {
            nextErrors.phone = 'Phone number is required.';
        }

        if (!trimmedEmail) {
            nextErrors.email = 'Email is required.';
        } else if (!EMAIL_REGEX.test(trimmedEmail)) {
            nextErrors.email = 'Enter a valid email address.';
        }

        if (!formValues.password) {
            nextErrors.password = 'Password is required.';
        }

        if (!formValues.confirmPassword) {
            nextErrors.confirmPassword = 'Please confirm your password.';
        } else if (formValues.confirmPassword !== formValues.password) {
            nextErrors.confirmPassword = 'Passwords must match.';
        }

        if (!formValues.policyConsent) {
            nextErrors.policyConsent = 'You must accept the policy consent.';
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(false);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        console.log('formValues > ', formValues);

        setIsSubmitting(false);
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

                <Button type="submit" variant="contained" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </Stack>
        </Box>
    );
}

export default Register;
