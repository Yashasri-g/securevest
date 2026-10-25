'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/data/blogPosts';
import TiltSpotlightCard from '@/components/TiltSpotlightCard';

interface HomeBlogGridProps {
  posts: BlogPost[];
}

export default function HomeBlogGrid({ posts }: HomeBlogGridProps) {
  // Staggered Container Variant matching JournalHub with 0.08s delay between cards
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };

  return (
    <motion.div
      className="journal-cards-grid"
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {posts.map((post, index) => (
        <TiltSpotlightCard key={post.slug} post={post} index={index} />
      ))}
    </motion.div>
  );
}
