import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

// sum', 'difference', 'product', and 'quotient',
// +        -               x             :
// `http://localhost:7777?operation=product&number1=2&number2=2`

const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  const calculate = (a) =>
    (operator) =>
      (b) => {
        switch (operator) {
          case "sum":
            return Number(a) + Number(b);
          case "difference":
            return a - b;
          case "product":
            return a * b;
          case "quotient":
            return a / b;
          default:
            return "Invalid parameters.";
        }
      };

  return new Response(
    calculate(params.get("number1"))(params.get("operation"))(
      params.get("number2"),
    ),
  );
};
let port = 7777;
if (Deno.args.length > 0) {
  const lastArgument = Deno.args[Deno.args.length - 1];
  port = Number(lastArgument);
}

serve(handleRequest, { port: port });
