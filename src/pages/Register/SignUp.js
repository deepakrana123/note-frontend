// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { Api } from "../../Api.js";
// // import "./SignUp.css";
// // import { useNavigate } from "react-router-dom";
// // import ImageLoading from "../../ImageLoading.js";
// // import { useDispatch } from "react-redux";
// // import { register } from "../../../store/authSlice.js";

// // const SignUp = () => {
// //   const [email, setEmail] = useState();
// //   const [password, setPassword] = useState();
// //   const [name, setName] = useState();
// //   const [pic, setPic] = useState(
// //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
// //   );
// //   const [confirmPassword, setConfirmPassword] = useState();
// //   // const [message, setMessage] = useState(null);
// //   const [picMessage, setPicMessage] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const submitHandler = async (e) => {
// //     e.preventDefault();
// //     // setLoading(true);
// //     if (password === confirmPassword) {
// //       setError("Password doesnot match");
// //     }
// //     if (email && password && pic && name) {
// //       const config = {
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //       };
// //       const { data } = await axios.post(
// //         `${Api}/user/register`,
// //         { name, email, password, pic },
// //         config
// //       );

// //       localStorage.setItem("userInfo", JSON.stringify(data));
// //       dispatch(register(data))
// //       navigate("/notes");
// //     }
// //   };

// //   const postDetails = (pics) => {
// //     setLoading(true);
// //     if (
// //       pics ===
// //       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
// //     ) {
// //       return setPicMessage("Please Select an Image");
// //     }
// //     setPicMessage(null);
// //     if (pics.type === "image/jpeg" || pics.type === "image/png") {
// //       const data = new FormData();
// //       data.append("file", pics);
// //       data.append("upload_preset", "NoteApp");
// //       data.append("cloud_name", "devendracloud123");
// //       fetch("https://api.cloudinary.com/v1_1/devendracloud123/image/upload", {
// //         method: "post",
// //         body: data,
// //       })
// //         .then((res) => res.json())
// //         .then((data) => {
// //           setPic(data.url.toString());
// //         })
// //         .catch((err) => {
// //           console.log(err);
// //         });
// //     } else {
// //       return setPicMessage("Please Select an Image");
// //     }
// //     setLoading(false);
// //   };
// //   return (
// //     <div className="signUpContainer">
// //       <div className="forms1">
// //         <div className="headingsContainer">
// //           <h3>Register</h3>
// //           <p>Please fill the form</p>
// //         </div>

// //         <div className="mainContainer">
// //           <label htmlFor="username">Your username</label>
// //           <input
// //             type="text"
// //             placeholder="Enter Username"
// //             required
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />

// //           <br></br>

// //           <label htmlFor="pswrd">Your Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter Email"
// //             value={email}
// //             required
// //             onChange={(e) => setEmail(e.target.value)}
// //           />

// //           <br></br>
// //           <label htmlFor="pswrd">Your password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter Password"
// //             required
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />

// //           <br></br>
// //           <label htmlFor="pswrd">Your Confirm password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter Confirm Password"
// //             required
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />

// //           <br></br>
// //           <label htmlFor="pswrd">Pic</label>
// //           <input
// //             type="file"
// //             placeholder="Enter Pic"
// //             required
// //             onChange={(e) => postDetails(e.target.files[0])}
// //           />
// //           {loading ? <ImageLoading /> : ""}
// //           <br></br>
// //           <button
// //             type="submit"
// //             className="buttons"
// //             onClick={(e) => submitHandler(e)}
// //             disabled={loading}
// //           >
// //             Register
// //           </button>
// //           <p className="register">
// //             Already a member? <Link to="/login"> Loginhere!</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;
// import React, { useState, useEffect } from "react";
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loading from "../../components/Loading";
// // import ErrorMessage from "../../components/ErrorMessage";
// // import { register } from "../../actions/userActions";
// import MainScreen from "../../components/MainScreen";
// import "./RegisterScreen.css";

// function RegisterScreen({ history }) {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [pic, setPic] = useState(
//     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//   );
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);
//   const [picMessage, setPicMessage] = useState(null);

//   const dispatch = useDispatch();

//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   const postDetails = (pics) => {
//     if (
//       pics ===
//       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//     ) {
//       return setPicMessage("Please Select an Image");
//     }
//     setPicMessage(null);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "notezipper");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history, userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (password !== confirmpassword) {
//       setMessage("Passwords do not match");
//     } else dispatch(register(name, email, password, pic));
//   };

//   return (
//     <MainScreen title="REGISTER">
//       <div className="loginContainer">
//         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//         {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
//         {loading && <Loading />}
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="name"
//               value={name}
//               placeholder="Enter name"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group controlId="confirmPassword">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={confirmpassword}
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </Form.Group>

//           {picMessage && (
//             <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
//           )}
//           <Form.Group controlId="pic">
//             <Form.Label>Profile Picture</Form.Label>
//             <Form.File
//               onChange={(e) => postDetails(e.target.files[0])}
//               id="custom-file"
//               type="image/png"
//               label="Upload Profile Picture"
//               custom
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Register
//           </Button>
//         </Form>
//         <Row className="py-3">
//           <Col>
//             Have an Account ? <Link to="/login">Login</Link>
//           </Col>
//         </Row>
//       </div>
//     </MainScreen>
//   );
// }

// export default RegisterScreen;
import React from 'react'

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp
