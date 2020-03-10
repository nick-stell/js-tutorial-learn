// ========= Additional constructs for better work with types

function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponse {
  header: string = "header response";
  result: string = "result response";
}

class MyError {
  header: string = "error header";
  message: string = "error message";
}

function handle(response: MyResponse | MyError) {
  if (response instanceof MyResponse) {
    return {
      info: response.header + response.result
    };
  }

  return {
    info: response.header + response.message
  };
}

// ================

type AlertType = "success" | "danger" | "warning" | "info";

function setAlertType(type: AlertType) {
  // ...
}

setAlertType("danger");
setAlertType("danger");

//setAlertType("default");
