import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bright Way — Charlotte's Premier Uniform Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #142240 50%, #1a3060 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "#00b4d8",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Bright Way
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Charlotte&apos;s Premier Uniform Partner — No Contracts, No Surprises
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            brightwayuniforms.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
