const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

// Get all exams
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('exams')
    .select('*')
    .order('start_time', { ascending: true })

  if (error) return res.status(500).json({ message: error.message })
  res.json(data)
})

module.exports = router