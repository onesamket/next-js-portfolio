export async function GET(request: Request) {
    const repos = await fetch(`https://api.github.com/users/onesamket/repos`);
    const repository = await repos.json()
    return Response.json({ repository })
}