#!/usr/bin/env node

/**
 * Script to create a new blog post
 * Usage: node scripts/new-blog-post.js "Post Title" "category"
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node scripts/new-blog-post.js "Post Title" "category"');
  process.exit(1);
}

const title = args[0];
const category = args[1];
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const date = new Date().toISOString().split('T')[0];

const template = `---
title: "${title}"
description: "Brief description of the ${title} post"
date: "${date}"
category: "${category}"
slug: "${slug}"
---

# ${title}

Your content goes here...

## Section 1

Content for section 1.

## Section 2

Content for section 2.
`;

const filePath = path.join(__dirname, '..', 'src', 'content', `${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.log(`File ${slug}.mdx already exists!`);
  process.exit(1);
}

fs.writeFileSync(filePath, template);
console.log(`✅ Created new blog post: src/content/${slug}.mdx`);
console.log(`📝 Edit the file to add your content`);
console.log(`🚀 The post will automatically appear in your blog!`);