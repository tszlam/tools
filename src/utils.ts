export const dateFormat = (datetime?: number|Date) => {
    const pad = (num: number, length: number = 2) => `${num}`.padStart(length, '0')
    const _datetime = datetime ? new Date(datetime) : new Date()
    const y = pad(_datetime.getFullYear(), 4)
    const m = pad(_datetime.getMonth() + 1)
    const d = pad(_datetime.getDate())
    const h = pad(_datetime.getHours())
    const min = pad(_datetime.getMinutes())
    const s = pad(_datetime.getSeconds())
    return `${y}-${m}-${d} ${h}:${min}:${s}`
}