import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useState } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
import { useMemo } from "react"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [
    (value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
    'El correo debe tener un formato válido',
  ],
  password: [(value) => value.length >= 6, 'El password debe de tener mas 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form className="animate__animated animate__fadeIn">
          <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder='Nombre completo'
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid>
            
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder='correo@gmail.com'
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmited}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder='contraseña'
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>

              <Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>

              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={onSubmit}
                >
                  Crear Cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>              
            </Grid>
          </Grid>
        </form>
    </AuthLayout>       

  )
}