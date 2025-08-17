import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

// Initialize Redis client from environment variables
const redis = Redis.fromEnv()

export async function POST(request: NextRequest) {
  try {
    const { response } = await request.json()
    
    if (!response || !['yes', 'no'].includes(response)) {
      return NextResponse.json({ error: 'Invalid response' }, { status: 400 })
    }
    
    // Increment counter for the specific response
    const key = `forgiveness_${response}`
    const count = await redis.incr(key)
    
    // Also track total responses
    await redis.incr('forgiveness_total')
    
    // Track timestamp for analytics
    const timestamp = new Date().toISOString()
    await redis.lpush(`${key}_timestamps`, timestamp)
    
    return NextResponse.json({ 
      success: true, 
      count,
      response 
    })
  } catch (error) {
    console.error('Error tracking response:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get current counts
    const yesCount = await redis.get('forgiveness_yes') || 0
    const noCount = await redis.get('forgiveness_no') || 0
    const totalCount = await redis.get('forgiveness_total') || 0
    
    return NextResponse.json({
      yes: yesCount,
      no: noCount,
      total: totalCount,
      yesPercentage: totalCount > 0 ? Math.round((Number(yesCount) / Number(totalCount)) * 100) : 0,
      noPercentage: totalCount > 0 ? Math.round((Number(noCount) / Number(totalCount)) * 100) : 0
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
