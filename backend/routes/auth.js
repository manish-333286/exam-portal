const express = require('express')
const router = express.Router()
const supabase = require('../supabase')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('email', email)
    .eq('password', password)
    .single()

  if (error || !data) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  res.json({
    message: 'Login successful',
    user: {
      id: data.id,
      name: data.name,
      email: data.email,
      roll_number: data.roll_number
    }
  })
})

module.exports = router