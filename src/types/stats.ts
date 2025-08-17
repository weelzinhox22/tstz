export interface Stats {
  yes: number
  no: number
  total: number
  yesPercentage: number
  noPercentage: number
}

export interface TrackResponse {
  success: boolean
  count: number
  response: 'yes' | 'no'
}
