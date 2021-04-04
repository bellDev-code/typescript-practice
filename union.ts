{
  // Union 응용하는 법
  // 연습하기

  const ID = "test";
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

  const login = (id: string, pw: string): LoginResponse => {
    if (id === ID && pw === PW) {
      return {
        status: "SUCCESS",
        detail: {
          statusCode: 200,
          log: "useID: &{ID} is logged",
        },
      };
    } else {
      return {
        status: "FAILED",
        error: "id, password invaild",
      };
    }
  };

  const printLoginState = (response: LoginResponse) => {
    switch (response.status) {
      case "SUCCESS":
        console.log(response.detail);
        break;

      case "FAILED":
        console.log(response.error);
        break;
      default:
        throw new Error("${response} is not exist.");
    }
    // if (response.status === "SUCCESS") {
    //   console.log(response.status);
    //   console.log(response.detail);
    // }
    // if (response.status === "FAILED") {
    //   console.log(response.error);
    // }
  };

  const response = login("test", "1234");
  printLoginState(response);

  console.log(response);
}
