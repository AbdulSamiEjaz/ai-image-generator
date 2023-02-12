const express = require("express")
const path = require("path")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000

const router = require("./routes/openai.routes")

const app = express()

// Enable Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")))

app.use("/openai", router)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
