// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";

// const app = express();
// app.use(cors());

// app.get("/api/reviews", async (req, res) => {
//   const placeId = "ChIJ-Z_sYbZ7n0ARtIHK5jBxAME";
//   const apiKey = process.env.GOOGLE_KEY;

//   try {
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
//     );

//     const data = await response.json();


//     const reviews = data.result?.reviews;

//     res.json(
//       reviews.map((r) => ({
//         ...r,
//         profile_photo_url: r.profile_photo_url
//           ? r.profile_photo_url + "&sz=120"
//           : null,
//       }))
//     );
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3001, () => {
//   console.log("http://localhost:3001");
// });
