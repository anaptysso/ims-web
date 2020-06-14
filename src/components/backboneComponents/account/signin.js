/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { SIGNIN_ACTIONS } from "../../../redux/account/signin/signinActions";

const Signin = (props) => {
  useEffect(() => {
    return (props) => {
      props.unload();
    };
  }, []);

  return (
    <div>
      <span>Username: </span>
      <input
        name="username"
        type="text"
        value={props.username}
        onChange={(event) =>
          props.signinStateUpdate(event.target.name, event.target.value)
        }
      />
      <span>Password: </span>
      <input
        name="password"
        type="password"
        value={props.password}
        onChange={(event) =>
          props.signinStateUpdate(event.target.name, event.target.value)
        }
      />
      <button onClick={props.signinClick}>Sign in</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state.signin });

const mapDispatchToProps = (dispatch) => ({
  signinStateUpdate: (key, payload) =>
    dispatch({ type: SIGNIN_ACTIONS.UPDATE_STATE, key: key, payload: payload }),
  signinClick: () => dispatch({ type: SIGNIN_ACTIONS.SIGNIN }),
  unload: () => dispatch({ type: SIGNIN_ACTIONS.UNLOADED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
