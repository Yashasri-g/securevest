'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { BlogPost } from '@/data/blogPosts';

interface TiltSpotlightCardProps {
  post: BlogPost;
  index: number;
}

export default function TiltSpotlightCard({ post }: TiltSpotlightCardProps) {
  // Staggered Scroll-Reveal Cascade Variant with cubic-bezier(0.16, 1, 0.3, 1)
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 36,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={cardVariants} className="w-full h-full flex flex-col">
      <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full p-0">
        <CardBody className="journal-3d-card-body bg-white relative group/card hover:shadow-2xl hover:shadow-amber-500/[0.08] border border-black/[0.08] w-full rounded-2xl p-5 flex flex-col justify-between">
          {/* Top section: Image + Details below image */}
          <div className="w-full flex flex-col">
            {/* 1. THUMBNAIL IMAGE AT THE TOP - STRICT UNIFORM 205px HEIGHT */}
            <CardItem translateZ="60" className="w-full block">
              <Link
                href={`/${post.slug}`}
                className="journal-3d-media-link block w-full overflow-hidden rounded-xl border border-black/[0.06] bg-slate-100"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="journal-3d-image-wrap w-full h-[205px] overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="journal-3d-img w-full h-full object-cover object-center block"
                    loading="lazy"
                  />
                </div>
              </Link>
            </CardItem>

            {/* 2. DETAILS BELOW THE IMAGE */}
            <div className="journal-3d-details-wrap mt-4 w-full flex flex-col">
              {/* Date and Duration */}
              <CardItem
                as="div"
                translateZ="35"
                className="journal-3d-meta flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 w-full"
              >
                <span className="journal-3d-date">{post.date}</span>
                <span className="journal-3d-dot text-slate-300">•</span>
                <span className="journal-3d-duration text-amber-700">{post.readTime}</span>
              </CardItem>

              {/* Title: Fixed 2-line height container so all cards have identical title vertical space */}
              <CardItem
                translateZ="50"
                className="journal-3d-title w-full block"
              >
                <div className="journal-3d-title-container h-[3.25rem] flex items-start">
                  <h3 className="m-0 text-left">
                    <Link href={`/${post.slug}`} className="journal-3d-title-link">
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </CardItem>
            </div>
          </div>

          {/* 3. BOTTOM ACTION ROW - LOCKED TO BOTTOM OF CARD */}
          <div className="journal-3d-footer mt-5 flex items-center justify-between w-full">
            <CardItem
              translateZ={30}
              as={Link}
              href={`/${post.slug}`}
              className="journal-3d-read-btn text-xs font-semibold text-slate-900 hover:text-black flex items-center gap-1.5"
            >
              <span>Read Article</span>
              <span className="journal-3d-arrow" aria-hidden="true">→</span>
            </CardItem>

            <CardItem
              translateZ={25}
              as="span"
              className="journal-3d-badge text-xs font-medium text-slate-500"
            >
              {post.readTime}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
