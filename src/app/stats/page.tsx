'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Stats } from '@/types/stats'

export default function StatsPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/track-response')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p>Carregando estatísticas...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Estatísticas de Respostas</h1>
          <Button onClick={fetchStats} disabled={isLoading}>
            Atualizar
          </Button>
        </div>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Total de Respostas</h3>
              <p className="text-3xl font-bold text-slate-600">{stats.total}</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Sim, te perdoo</h3>
              <p className="text-3xl font-bold text-green-600">{stats.yes}</p>
              <p className="text-sm text-muted-foreground">{stats.yesPercentage}%</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Prefiro não responder</h3>
              <p className="text-3xl font-bold text-red-600">{stats.no}</p>
              <p className="text-sm text-muted-foreground">{stats.noPercentage}%</p>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Taxa de Perdão</h3>
              <p className="text-3xl font-bold text-blue-600">{stats.yesPercentage}%</p>
              <p className="text-sm text-muted-foreground">dos que responderam</p>
            </Card>
          </div>
        )}

        {stats && stats.total > 0 && (
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Visualização</h3>
            <div className="w-full bg-gray-200 rounded-full h-8 mb-4">
              <div 
                className="bg-green-600 h-8 rounded-l-full flex items-center justify-center text-white text-sm font-medium"
                style={{ width: `${stats.yesPercentage}%`, minWidth: stats.yesPercentage > 0 ? '40px' : '0' }}
              >
                {stats.yesPercentage > 15 && `${stats.yesPercentage}%`}
              </div>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>👍 Perdoou ({stats.yes})</span>
              <span>👎 Não respondeu ({stats.no})</span>
            </div>
          </Card>
        )}

        {stats && stats.total === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">Ainda não há respostas registradas.</p>
          </Card>
        )}

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/">Voltar para a carta</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
