import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Big Creek Tree Service — Greater Cleveland NE Ohio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#3E8018",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle diagonal stripe texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 50px, rgba(0,0,0,0.04) 50px, rgba(0,0,0,0.04) 100px)",
          }}
        />

        {/* Main content row */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "64px",
            padding: "60px 80px 40px",
          }}
        >
          {/* Tree icon */}
          <div style={{ display: "flex", flexShrink: 0 }}>
            <svg
              width="180"
              height="200"
              viewBox="0 0 100 115"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="50,4 34,28 66,28" fill="rgba(255,255,255,0.95)" />
              <polygon points="50,14 22,48 78,48" fill="rgba(255,255,255,0.95)" />
              <polygon points="50,28 10,70 90,70" fill="rgba(255,255,255,0.95)" />
              <rect x="42" y="69" width="16" height="26" rx="4" fill="#72CC35" />
            </svg>
          </div>

          {/* Text block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "96px",
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "0.04em",
                lineHeight: 0.9,
                textTransform: "uppercase",
              }}
            >
              BIG CREEK
            </div>
            <div
              style={{
                fontSize: "58px",
                fontWeight: 900,
                color: "#72CC35",
                letterSpacing: "0.1em",
                lineHeight: 1,
                textTransform: "uppercase",
              }}
            >
              TREE SERVICE
            </div>
            <div
              style={{
                fontSize: "26px",
                color: "rgba(255,255,255,0.82)",
                letterSpacing: "0.03em",
                marginTop: "16px",
                lineHeight: 1.5,
              }}
            >
              Licensed &amp; Insured · Greater Cleveland, NE Ohio
              {"\n"}Tree Removal · Stump Grinding · 24/7 Storm Response
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            width: "100%",
            height: "72px",
            backgroundColor: "#2a5c10",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.03em",
            }}
          >
            bigcreektreeservice.com
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#72CC35",
              letterSpacing: "0.04em",
            }}
          >
            (216) 551-6445 · Free Estimates
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
