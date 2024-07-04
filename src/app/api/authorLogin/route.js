export async function POST(req, { params }) {
    try {
  
  
  
  
      
      return Response.json(
        { Message: "author login successfully" },
        { status: 200 }
      );
    } catch (error) {
      return Response.json({ Message: "Internal Server Error" }, { status: 500 });
    }
  }
  