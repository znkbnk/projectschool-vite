// components/Skeleton.jsx

export const SkeletonBox = ({ width, height, className = "" }) => (
  <div
    className={`skeleton-box ${className}`}
    style={{
      width: width || "100%",
      height: height || "20px",
      background:
        "linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite",
      borderRadius: "8px",
    }}
  />
);

export const SkeletonText = ({ lines = 3, gap = "12px" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap }}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBox
        key={i}
        height='16px'
        width={i === lines - 1 ? "70%" : "100%"}
      />
    ))}
  </div>
);

export const SkeletonCard = () => (
  <div
    style={{
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      padding: "24px",
      marginBottom: "16px",
    }}
  >
    <SkeletonBox height='24px' width='60%' className='mb-3' />
    <SkeletonText lines={3} />
    <div style={{ marginTop: "16px" }}>
      <SkeletonBox height='40px' width='120px' />
    </div>
  </div>
);
