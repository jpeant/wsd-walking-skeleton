import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

const handleRequest = (request) => {
  return new Response("I will learn how to write web applications!");
};

serve(handleRequest, { port: 7777 });