'use client';

import React, { useState } from 'react';
import styles from './NewsFeedCard.module.css';

export interface NewsFeedCardProps {
  /** The main description/content of the news feed item */
  description: string;
  /** Initial number of likes (optional) */
  initialLikes?: number;
  /** Initial number of dislikes (optional) */
  initialDislikes?: number;
  /** Callback when like button is clicked */
  onLike?: (liked: boolean) => void;
  /** Callback when dislike button is clicked */
  onDislike?: (disliked: boolean) => void;
  /** Custom className for the card */
  className?: string;
}

/**
 * NewsFeedCard component displays a card with description text and like/dislike buttons
 *
 * @example
 * ```tsx
 * <NewsFeedCard
 *   description="This is a news update about something interesting!"
 *   initialLikes={42}
 *   initialDislikes={3}
 * />
 * ```
 */
export default function NewsFeedCard({
  description,
  initialLikes = 0,
  initialDislikes = 0,
  onLike,
  onDislike,
  className,
}: NewsFeedCardProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  // Format large numbers (e.g., 1000 → 1K, 1000000 → 1M)
  const formatCount = (count: number): string => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  const handleLike = () => {
    if (userLiked) {
      // Remove like
      setLikes(likes - 1);
      setUserLiked(false);
      onLike?.(false);
    } else {
      // Add like
      setLikes(likes + 1);
      setUserLiked(true);
      onLike?.(true);

      // Remove dislike if user previously disliked
      if (userDisliked) {
        setDislikes(dislikes - 1);
        setUserDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (userDisliked) {
      // Remove dislike
      setDislikes(dislikes - 1);
      setUserDisliked(false);
      onDislike?.(false);
    } else {
      // Add dislike
      setDislikes(dislikes + 1);
      setUserDisliked(true);
      onDislike?.(true);

      // Remove like if user previously liked
      if (userLiked) {
        setLikes(likes - 1);
        setUserLiked(false);
      }
    }
  };

  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.description}>
        <p>{description}</p>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleLike}
          className={`${styles.actionButton} ${userLiked ? styles.active : ''}`}
          aria-label={userLiked ? `Unlike (${likes} likes)` : `Like (${likes} likes)`}
          aria-pressed={userLiked}
        >
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill={userLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={userLiked ? "3" : "2"}
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          <span className={styles.count}>{formatCount(likes)}</span>
        </button>

        <button
          onClick={handleDislike}
          className={`${styles.actionButton} ${userDisliked ? styles.active : ''}`}
          aria-label={userDisliked ? `Remove dislike (${dislikes} dislikes)` : `Dislike (${dislikes} dislikes)`}
          aria-pressed={userDisliked}
        >
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill={userDisliked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={userDisliked ? "3" : "2"}
          >
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
          </svg>
          <span className={styles.count}>{formatCount(dislikes)}</span>
        </button>
      </div>

      {/* Screen reader live region for count updates */}
      <span className={styles.srOnly} aria-live="polite" aria-atomic="true">
        {likes} likes, {dislikes} dislikes
      </span>
    </div>
  );
}
