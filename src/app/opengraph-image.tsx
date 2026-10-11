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
          background: "#faf5f1",
          padding: 72,
        }}
      >
        <div
          style={{
            color: "#8b1a1a",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          EMBEE FINSOFT
        </div>
        <div
          style={{
            marginTop: 18,
            color: "#241310",
            fontSize: 68,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Digitizing the work.
        </div>
        <div style={{ marginTop: 24, color: "#5d4a43", fontSize: 28 }}>
          Chandigarh
        </div>
      </div>
    ),
    size,
  );
}
