import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#141414",
          padding: 72,
        }}
      >
        <div
          style={{
            color: "#A52020",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          EMBEE FINSOFT
        </div>
        <div
          style={{
            marginTop: 18,
            color: "#FFFFFF",
            fontSize: 60,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Transforming business through technology.
        </div>
        <div style={{ marginTop: 24, color: "#FFFFFF", fontSize: 28 }}>
          AI, Microsoft solutions, and enterprise software
        </div>
      </div>
    ),
    size,
  );
}
