///////////////////
//////Register/////
///////////////////

export const registerUser = async (user) => {
  const res = await fetch(
    "https://backend-tytc.onrender.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const register = res.json();

  return register;
};

///////////////////
///////Login///////
///////////////////

export const loginUser = async (user) => {
  const res = await fetch("https://backend-tytc.onrender.com/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const login = await res.json();
  return login;
};

///////////////////
///////Change Password///////
///////////////////

export const changePassword = async (user, token) => {
  const res = await fetch("https://backend-tytc.onrender.com/api/users", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
    body: JSON.stringify(user),
  });
  const login = await res.json();
  return login;
};

///////////////////
///////Forgot Password///////
///////////////////

export const forgotPassword = async (user) => {
  const res = await fetch(
    "https://backend-tytc.onrender.com/api/users/forgot-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  const forgot = await res.json();
  return forgot;
};

///////////////////
///////Reset Password///////
///////////////////

export const resetPassword = async (user, id) => {
  const res = await fetch(
    "https://backend-tytc.onrender.com/api/users/reset-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: id,
      },
      body: JSON.stringify(user),
    }
  );
  const reset = await res.json();
  return reset;
};
