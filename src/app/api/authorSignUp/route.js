export async function POST(req, { params }) {
  try {




    
    return Response.json(
      { Message: "author signup successfully" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ Message: "Internal Server Error" }, { status: 500 });
  }
}
