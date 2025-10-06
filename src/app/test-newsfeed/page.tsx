'use client';

import NewsFeedCard from '@/components/NewsFeedCard';

export default function TestNewsFeedPage() {
  return (
    <div style={{ 
      padding: '40px', 
      background: '#f9fafb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      color: 'black'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        NewsFeedCard Component Test
      </h1>

      {/* Test Case 1: Default State */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Default State (No Interactions)
        </h2>
        <NewsFeedCard 
          description="This is a simple news feed item with default state. Users can like or dislike this content."
          initialLikes={0}
          initialDislikes={0}
        />
      </section>

      {/* Test Case 2: With Initial Counts */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          With Initial Likes and Dislikes
        </h2>
        <NewsFeedCard 
          description="This post already has some likes and dislikes. It shows how the component handles non-zero initial values."
          initialLikes={42}
          initialDislikes={3}
        />
      </section>

      {/* Test Case 3: Long Text */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Long Description Text
        </h2>
        <NewsFeedCard 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. This is a very long description to test how the component handles text wrapping and layout."
          initialLikes={128}
          initialDislikes={7}
        />
      </section>

      {/* Test Case 4: Multiple Cards */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Multiple Cards in Sequence
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <NewsFeedCard 
            description="Breaking news: Technology advances continue to reshape our daily lives."
            initialLikes={256}
            initialDislikes={12}
          />
          <NewsFeedCard 
            description="Community update: New features have been added to improve user experience."
            initialLikes={89}
            initialDislikes={5}
          />
          <NewsFeedCard 
            description="Announcement: Scheduled maintenance will occur this weekend."
            initialLikes={34}
            initialDislikes={2}
          />
        </div>
      </section>

      {/* Test Case 5: Short Text */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Short Description
        </h2>
        <NewsFeedCard 
          description="Short update!"
          initialLikes={5}
          initialDislikes={1}
        />
      </section>

      {/* Test Case 6: High Numbers */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          High Engagement Numbers
        </h2>
        <NewsFeedCard 
          description="Viral content with extremely high engagement numbers to test number display."
          initialLikes={9999}
          initialDislikes={543}
        />
      </section>
    </div>
  );
}
