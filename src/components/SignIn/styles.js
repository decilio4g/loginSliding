import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

  h1 {
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  .container {
    background-color: #fff;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;

    .form-container {
      position: absolute;
      top: 0;
      height: 100%;
      transition: all 0.6s ease-in-out;

      &.sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;

        form {
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          height: 100%;
          text-align: center;

          .social-container {
            margin: 20px 0;

            .fa {
              padding: 13px;
              width: 50px;
              text-align: center;
              border-radius: 50%;
            }

            .fa-facebook {
              background: #3b5998;
              color: white;
            }

            .fa-google {
              background: #dd4b39;
              color: white;
            }

            .fa-linkedin {
              background: #007bb5;
              color: white;
            }

            a {
              border: 1px solid #dddddd;
              border-radius: 50%;
              display: inline-flex;
              color: #333;
              justify-content: center;
              align-items: center;
              margin: 0 5px;
              height: 40px;
              width: 40px;
            }

            .forgot-password {
              color: red;
            }
          }

          span {
            font-size: 12px;
          }

          input {
            background-color: #eee;
            border: none;
            border-radius: 3px;
            padding: 12px 15px;
            margin: 8px 0;
            width: 100%;
            outline: none;
          }

          .forgot-password {
            color: #333;
            text-decoration: none;
            margin: 10px 0;
          }
        }
      }
    }

    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform 0.6s ease-in-out;
      z-index: 100;

      .overlay {
        background: #ff416c;
        background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
        background: linear-gradient(to right, #ff4b2b, #ff416c);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;

          &.overlay-right {
            right: 0;
            transform: translateX(0);
          }
        }
      }
    }
  }

  /* ------------------------- MEDIA -------------- */
  @media (min-width: 375px) and (max-width: 667px) {
    h1 {
      font-size: 17px;
    }

    .container {
      .form-container {
        form {
          padding: 0 20px;

          .forgot-password {
            text-decoration: none;
            color: #333;
          }

          .submit {
            border-radius: 20px;
            border: 1px solid #ff4b2b;
            background-color: #ff4b2b;
            color: #ffffff;
            font-size: 10px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            margin-top: 10px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
          }
        }

        .social-container {
          margin: 20px 0;
          display: flex;

          a {
            border: none;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
            height: 40px;
            width: 40px;
          }

          .fa {
            padding: 8px;
            width: 30px;
            text-align: center;
            border-radius: 50%;
          }

          .fa-facebook {
            background: #3b5998;
            color: white;
          }

          .fa-google {
            background: #dd4b39;
            color: white;
          }

          .fa-linkedin {
            background: #007bb5;
            color: white;
          }
        }
      }
    }

    .ghost {
      width: 130px;
      height: 34px;
      font-size: 10px;
      padding: 10px;
    }
  }
`;
