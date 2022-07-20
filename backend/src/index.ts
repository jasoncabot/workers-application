import { greeter } from "@app/shared";

export async function handleRequest(request: Request, env: Bindings) {
    return new Response(greeter());
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

export default worker;
