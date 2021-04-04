{
  const ID = "sumaoo20";
  const PW = "1234";

  type SuccessState = {
    status: "SUCCESS";
    detail: {
      statusCode: number;
      log: string;
    };
  };

  type FailedState = {
    status: "FAILED";
    error: string;
  };

  type LoginResponse = SuccessState | FailedState;

  const loginPage = (id: string, pw: string): LoginResponse => {
    if (id === ID && pw === PW) {
      return {
        status: "SUCCESS",
        detail: {
          statusCode: 200,
          log: `useID: ${ID} is logged`,
        },
      };
    } else {
      return {
        status: "FAILED",
        error: "id, password invalid",
      };
    }
  };

  const PrintLoginState = (response: LoginResponse) => {
    switch (response.status) {
      case "SUCCESS":
        console.log(response.detail);
        break;

      case "FAILED":
        console.log(response.error);
        break;

      default:
        throw new Error(`${response} is not exist`);
    }
  };

  const response = loginPage("sumaoo20", "1234");
  PrintLoginState(response);
  console.log(response);
}
