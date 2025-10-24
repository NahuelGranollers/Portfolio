import { useEffect, useRef, useState, type FC } from 'react';
import type { Video } from '../types';
import useInView from '../hooks/useInView';

type Props = {
 video: Video;
 onSelect: (v: Video) => void;
};

const VideoCard: FC<Props> = ({ video, onSelect }) => {
 const { ref, inView } = useInView<HTMLDivElement>({ threshold:0.3 });
 const [prefetched, setPrefetched] = useState(false);
 const prefetchLinkRef = useRef<HTMLLinkElement | null>(null);
 const videoPreviewRef = useRef<HTMLVideoElement | null>(null);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
 if (!video?.videoUrl) return;
 if (inView && !prefetched) {
 // guard to avoid creating duplicates
 if (!prefetchLinkRef.current) {
 const link = document.createElement('link');
 link.rel = 'preload';
 link.as = 'video';
 link.href = video.videoUrl;
 // try to infer type from extension
 const ext = (video.videoUrl.split('.').pop() || '').toLowerCase();
 link.type = ext ? `video/${ext}` : 'video/webm';
 document.head.appendChild(link);
 prefetchLinkRef.current = link;
 setPrefetched(true);
 }
 }

 return () => {
 // cleanup on unmount
 if (prefetchLinkRef.current) {
 try {
 prefetchLinkRef.current.remove();
 } catch (e) {
 // ignore
 }
 prefetchLinkRef.current = null;
 }
 };
 }, [inView, prefetched, video?.videoUrl]);

 const handleMouseEnter = () => {
 if (!video?.videoUrl) return;
 setIsHovered(true);
 if (!prefetched && !prefetchLinkRef.current) {
 const link = document.createElement('link');
 link.rel = 'preload';
 link.as = 'video';
 link.href = video.videoUrl;
 const ext = (video.videoUrl.split('.').pop() || '').toLowerCase();
 link.type = ext ? `video/${ext}` : 'video/webm';
 document.head.appendChild(link);
 prefetchLinkRef.current = link;
 setPrefetched(true);
 }

 // Try to play preview when hovered and in view
 if (videoPreviewRef.current && inView) {
 videoPreviewRef.current.currentTime =0;
 videoPreviewRef.current.play().catch(() => {
 // autoplay may be blocked; ignore
 });
 }
 };

 const handleMouseLeave = () => {
 setIsHovered(false);
 if (videoPreviewRef.current) {
 try {
 videoPreviewRef.current.pause();
 videoPreviewRef.current.currentTime =0;
 } catch (e) {
 // ignore
 }
 }
 };

 const handleClick = () => {
 if (video.externalLink) {
 window.open(video.externalLink, '_blank', 'noopener,noreferrer');
 } else {
 onSelect(video);
 }
 };

 return (
 <div
 ref={ref}
 className="video-card group"
 onMouseEnter={handleMouseEnter}
 onMouseLeave={handleMouseLeave}
 >
 <button
 onClick={handleClick}
 className="video-thumbnail-wrapper w-full block text-left relative rounded-lg overflow-hidden"
 aria-label={`Ver proyecto ${video.title}`}
 >
 {/* Thumbnail image */}
 <img
 src={video.thumbnailUrl}
 alt={video.title}
 loading="lazy"
 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
 />

 {/* Preview video (plays on hover) */}
 {video.videoUrl && (
 <video
 ref={videoPreviewRef}
 muted
 loop
 playsInline
 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
 aria-hidden={!isHovered}
 >
 <source src={video.videoUrl} type={`video/${(video.videoUrl.split('.').pop() || '').toLowerCase()}`} />
 </video>
 )}

 {/* Category badge top-left */}
 {video.category && (
 <div className="absolute top-4 left-4 z-10">
 <span className="px-3 py-1 bg-brand-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
 {video.category}
 </span>
 </div>
 )}

 {/* Year badge top-right */}
 {video.year && (
 <div className="absolute top-4 right-4 z-10">
 <span className="px-3 py-1 bg-brand-bg/90 text-brand-text text-xs font-semibold rounded-full backdrop-blur-sm">
 {video.year}
 </span>
 </div>
 )}

 {/* Innovative badge (if present) bottom-left */}
 {video.innovative && (
 <span className="absolute bottom-4 left-4 px-3 py-1 bg-red-500/80 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-xl z-10">
 Innovación
 </span>
 )}

 {/* External link badge bottom-right (higher z) */}
 {video.externalLink && (
 <div className="absolute bottom-4 right-4 z-20">
 <span className="px-3 py-1 bg-brand-secondary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">? ¡Pruébalo!</span>
 </div>
 )}
 </button>

 {/* Info */}
 <div className="mt-4 space-y-2">
 <h3 className="text-lg font-semibold text-brand-text group-hover:text-brand-primary transition-colors">
 {video.title}
 </h3>
 {video.role && <p className="text-brand-primary text-sm font-medium">{video.role}</p>}
 {video.tools && video.tools.length >0 && (
 <div className="flex flex-wrap gap-2 mt-3">
 {video.tools.map((tool, index) => (
 <span key={index} className="px-2 py-1 bg-brand-surface text-brand-text-secondary text-xs rounded border border-brand-border">
 {tool}
 </span>
 ))}
 </div>
 )}
 </div>
 </div>
 );
};

export default VideoCard;
