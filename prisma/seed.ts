import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories for indie hackers/startups
  const categories = [
    {
      name: 'SaaS & Software',
      slug: 'saas-software',
      description: 'Software as a Service applications and tools'
    },
    {
      name: 'E-commerce & Marketplaces',
      slug: 'ecommerce-marketplaces', 
      description: 'Online stores and digital marketplaces'
    },
    {
      name: 'Mobile Apps',
      slug: 'mobile-apps',
      description: 'iOS and Android applications'
    },
    {
      name: 'Developer Tools',
      slug: 'developer-tools',
      description: 'APIs, libraries, and development utilities'
    },
    {
      name: 'Design & Creative',
      slug: 'design-creative',
      description: 'Design tools, templates, and creative services'
    },
    {
      name: 'Marketing & Analytics',
      slug: 'marketing-analytics',
      description: 'Marketing automation and analytics platforms'
    },
    {
      name: 'Productivity & Organization',
      slug: 'productivity-organization',
      description: 'Task management and productivity tools'
    },
    {
      name: 'Education & Learning',
      slug: 'education-learning',
      description: 'Online courses and educational platforms'
    },
    {
      name: 'Finance & Crypto',
      slug: 'finance-crypto',
      description: 'Financial services and cryptocurrency tools'
    },
    {
      name: 'AI & Machine Learning',
      slug: 'ai-machine-learning',
      description: 'Artificial intelligence and ML tools'
    }
  ]

  // Create review tags
  const tags = [
    { name: 'User Experience', color: '#3b82f6' },
    { name: 'Customer Support', color: '#10b981' },
    { name: 'Features', color: '#8b5cf6' },
    { name: 'Pricing', color: '#f59e0b' },
    { name: 'Performance', color: '#ef4444' },
    { name: 'Design', color: '#06b6d4' },
    { name: 'Documentation', color: '#6b7280' },
    { name: 'Reliability', color: '#dc2626' },
    { name: 'Integration', color: '#7c3aed' },
    { name: 'Value for Money', color: '#059669' }
  ]

  console.log('🌱 Seeding database...')

  // Seed categories
  console.log('Creating categories...')
  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category
    })
  }

  // Seed tags
  console.log('Creating review tags...')
  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag
    })
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })