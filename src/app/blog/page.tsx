"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Residential Solar in India: 2024 Trends',
    excerpt: 'Explore how government policies and new panel technologies are making solar more affordable than ever for Indian homes.',
    category: 'Innovation',
    author: 'Rahul Chand',
    date: 'Oct 24, 2023',
    readTime: '6 min read',
    img: 'https://picsum.photos/seed/blog1/800/500'
  },
  {
    id: 2,
    title: 'How to Maximize Your Solar Subsidy Benefits',
    excerpt: 'A comprehensive guide to navigating the PM Surya Ghar Muft Bijli Yojana and other state-level solar incentives.',
    category: 'Guide',
    author: 'Solar Team',
    date: 'Nov 12, 2023',
    readTime: '8 min read',
    img: 'https://picsum.photos/seed/blog2/800/500'
  },
  {
    id: 3,
    title: 'Solar Maintenance: 5 Pro-Tips for Peak Performance',
    excerpt: 'Keep your solar panels producing maximum energy year-round with these simple maintenance practices.',
    category: 'Maintenance',
    author: 'Tech Support',
    date: 'Dec 05, 2023',
    readTime: '5 min read',
    img: 'https://picsum.photos/seed/blog3/800/500'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-widest text-xs mb-4"
            >
              Solar Insights
            </motion.div>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-foreground">Latest <span className="text-primary">Articles</span></h1>
          </div>
          <div className="flex gap-4">
             {['All', 'Innovation', 'Guide', 'Tech'].map(cat => (
               <button key={cat} className="px-6 py-3 rounded-full border border-gray-100 font-bold hover:bg-muted transition-colors text-foreground focus:ring-2 focus:ring-primary focus:outline-none">{cat}</button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer transition-all duration-500 overflow-hidden isolate"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.05] group-hover:-translate-y-2 group-hover:border-primary/30 border border-transparent isolate">
                <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-1 text-xs font-black text-primary border border-gray-100 shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              </div>
              
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-sm text-muted-foreground font-semibold">
                  <span className="flex items-center gap-2 group-hover:text-primary transition-colors"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-2 group-hover:text-primary transition-colors"><Clock size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-500 leading-tight group-hover:translate-x-1">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed line-clamp-2 transition-colors group-hover:text-foreground/80">
                  {post.excerpt}
                </p>
                <div className="pt-4">
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center font-black text-foreground hover:gap-3 transition-all group-hover:text-accent">
                    Read Story <ArrowRight className="ml-2 text-primary transition-transform group-hover:translate-x-2" size={20} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
