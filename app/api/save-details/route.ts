import { google } from "googleapis";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req.method, req.body);

  const { email, agree, country } = await req.json();

  // Load service account credentials from environment
  console.log("Loading service account credentials");
  console.log(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!, "base64").toString(
      "utf-8"
    )
  );

  console.log("Credentials loaded");
  console.log(credentials);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  console.log(process.env.GOOGLE_SHEET_ID);

  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
  const range = "Responses!A1"; // Adjust this to your sheet name and range

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            email,
            agree,
            country,
            new Date().toLocaleDateString("en-US", {
              month: "long", // April
              weekday: "short", // Thu
              day: "numeric", // 17
              year: "numeric", // 2023
              hour: "2-digit", // 12
              minute: "2-digit", // 30
              second: "2-digit", // 30
              hour12: true, // 12-hour format
            }),
          ],
        ],
      },
    });

    // return res.status(200).json({ message: "Data saved to sheet" });
    return NextResponse.json(
      { message: "Data saved to sheet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving to sheet:", error);

    // return res.status(500).json({ message: "Error sending email", error });
    return NextResponse.json(
      { message: "Failed to save data", error },
      { status: 500 }
    );
    // return res.status(500).json({ message: "Failed to save data" });
  }
}
