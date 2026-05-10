import "./PageSkeletons.css";

// Unified Skeleton Card Component
const UnifiedSkeletonCard = ({ iconShape = "circle" }) => (
  <div className='unified-skeleton-card'>
    <div
      className={`unified-skeleton-icon unified-skeleton-icon--${iconShape}`}
    ></div>
    <div className='unified-skeleton-card-title'></div>
    <div className='unified-skeleton-card-title-second'></div>
    <div className='unified-skeleton-desc-line'></div>
    <div className='unified-skeleton-desc-line short'></div>
    <div className='unified-skeleton-desc-line'></div>
    <div className='unified-skeleton-desc-line medium'></div>
    <div className='unified-skeleton-desc-line short'></div>
    <div className='unified-skeleton-btn'></div>
  </div>
);

// All skeletons now use the same centered layout
const SkeletonLayout = ({ iconShapes = ["circle", "rect"] }) => (
  <div className='unified-skeleton-container'>
    <div className='unified-skeleton-content'>
      <div className='unified-skeleton-header'>
        <div className='unified-skeleton-title'></div>
        <div className='unified-skeleton-subtitle'></div>
      </div>
      <div className='unified-skeleton-grid'>
        <UnifiedSkeletonCard iconShape={iconShapes[0]} />
        <UnifiedSkeletonCard iconShape={iconShapes[1]} />
      </div>
    </div>
  </div>
);

export const ExercisesSkeleton = () => (
  <SkeletonLayout iconShapes={["circle", "hex"]} />
);

export const DefaultSkeleton = () => (
  <SkeletonLayout iconShapes={["circle", "rect"]} />
);

export const InterviewSkeleton = () => (
  <SkeletonLayout iconShapes={["circle", "hex"]} />
);

export const GuidesSkeleton = () => (
  <SkeletonLayout iconShapes={["rect", "circle"]} />
);
