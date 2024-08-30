import type { APIRoute } from "astro";

export async function GET() {
  return new Response(JSON.stringify({msg: "Hello, World!"}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// export async function POST() {
//   return new Response(JSON.stringify({ msg: "Hello there, from the POST request" }), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

export const POST: APIRoute = async({ params, request }) => {
    const body = await request.json();
    return new Response(JSON.stringify(body), {
        status: 200, 
        headers: {
            'Content-Type': 'application/json'
        }
    })
}   