import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      // Show Material-UI dialog for password validation
      setOpenDialog(true);
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If all validations pass, you can proceed with user registration logic here
    // For now, let's just log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/src/images/bgimg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh"
        }}
      >
        <section className="body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font text-3xl text-center font-extrabold">
                Ready to explore? Sign up and begin your educational journey with us....
              </h1>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 bg-opacity-75 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">SIGNUP</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="confirmPassword" className="leading-7 text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  Already have an account? <Link to="/demo-project/login" className="text-indigo-500">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Material-UI Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="password-validation-dialog-title"
        aria-describedby="password-validation-dialog-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <DialogTitle id="password-validation-dialog-title">Password Validation</DialogTitle>
        <DialogContent>
          <DialogContentText id="password-validation-dialog-description">
            Password must be 8 characters with at least one number, one lowercase letter, one uppercase letter, and one special character.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Signup;
