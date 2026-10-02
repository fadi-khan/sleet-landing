import { ImageResponse } from "next/og";

// Default social preview image for every page that doesn't set its own.
// The text is English for both locales: the image renderer has no Arabic
// font loaded.
export const alt = "Sleet — logistics management system and fleet monitoring";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #0B3742 0%, #064058 60%, #0a5f73 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: 2 }}>
          SLEET
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
            Logistics Management System &amp; Fleet Monitoring
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#04cfe6" }}>
            Live GPS · Dashcam video · Fuel · Temperature · Proof of delivery
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.75)" }}>
          sleet.sa
        </div>
      </div>
    ),
    size
  );
}
